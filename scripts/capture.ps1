param(
  [Parameter(Mandatory = $true)][string]$Name,
  [int]$Width = 1440,
  [int]$Height = 900,
  [string]$Section = '',
  [string]$HoverSelector = '',
  [string]$Eval = '',
  [string]$Url = 'http://127.0.0.1:5174/clay-portfolio/',
  [int]$Wait = 2800,
  [int]$Port = 9334,
  [switch]$Full,
  [switch]$ReducedMotion
)

$ErrorActionPreference = 'Stop'
$targets = Invoke-RestMethod "http://127.0.0.1:$Port/json/list"
$target = $targets | Where-Object { $_.type -eq 'page' } | Select-Object -First 1
if (-not $target) { throw "No Chrome page target on port $Port." }

$ws = [System.Net.WebSockets.ClientWebSocket]::new()
$ws.ConnectAsync([Uri]$target.webSocketDebuggerUrl, [Threading.CancellationToken]::None).GetAwaiter().GetResult()
$buffer = New-Object byte[] 33554432
$script:seq = 0

function Send-Cdp {
  param([string]$Method, $Params = @{})
  $script:seq++
  $payload = @{ id = $script:seq; method = $Method; params = $Params } |
    ConvertTo-Json -Depth 32 -Compress
  $bytes = [Text.Encoding]::UTF8.GetBytes($payload)
  $ws.SendAsync(
    [ArraySegment[byte]]::new($bytes),
    [System.Net.WebSockets.WebSocketMessageType]::Text,
    $true,
    [Threading.CancellationToken]::None
  ).GetAwaiter().GetResult()

  while ($true) {
    $sb = [Text.StringBuilder]::new()
    do {
      $result = $ws.ReceiveAsync(
        [ArraySegment[byte]]::new($buffer),
        [Threading.CancellationToken]::None
      ).GetAwaiter().GetResult()
      [void]$sb.Append([Text.Encoding]::UTF8.GetString($buffer, 0, $result.Count))
    } while (-not $result.EndOfMessage)

    $message = $sb.ToString() | ConvertFrom-Json
    if ($message.id -eq $script:seq) {
      if ($message.error) { throw ($message.error | ConvertTo-Json -Compress) }
      return $message
    }
  }
}

$root = Split-Path $PSScriptRoot -Parent
$out = Join-Path $root ".shots\$Name.png"
New-Item -ItemType Directory -Force -Path (Split-Path $out) | Out-Null

[void](Send-Cdp 'Page.enable')
[void](Send-Cdp 'Runtime.enable')
if ($ReducedMotion) {
  [void](Send-Cdp 'Emulation.setEmulatedMedia' @{
    features = @(@{ name = 'prefers-reduced-motion'; value = 'reduce' })
  })
} else {
  [void](Send-Cdp 'Emulation.setEmulatedMedia' @{
    features = @(@{ name = 'prefers-reduced-motion'; value = 'no-preference' })
  })
}
[void](Send-Cdp 'Emulation.setDeviceMetricsOverride' @{
  width = $Width; height = $Height; deviceScaleFactor = 1; mobile = ($Width -lt 600)
})
[void](Send-Cdp 'Page.addScriptToEvaluateOnNewDocument' @{
  source = "window.__errs = window.__errs || []; if (!window.__errTracking) { window.__errTracking = true; const __ce = console.error.bind(console); console.error = (...a) => { window.__errs.push(a.map(String).join(' ')); __ce(...a); }; addEventListener('error', (e) => window.__errs.push(String(e.message))); addEventListener('unhandledrejection', (e) => window.__errs.push(String(e.reason))); }"
})
[void](Send-Cdp 'Page.navigate' @{ url = $Url })
Start-Sleep -Milliseconds $Wait
[void](Send-Cdp 'Runtime.evaluate' @{
  expression = "document.documentElement.style.scrollBehavior='auto'"
})

if ($Section) {
  $expression = "(() => { const el = document.getElementById('$Section'); if (!el) return -1; const y = el.getBoundingClientRect().top + window.scrollY; window.scrollTo(0, y); return y; })()"
  $value = (Send-Cdp 'Runtime.evaluate' @{
    expression = $expression; returnByValue = $true
  }).result.result.value
  Write-Host "scrollY=$value"
  Start-Sleep -Milliseconds 800
}

if ($HoverSelector) {
  $selectorJson = $HoverSelector | ConvertTo-Json -Compress
  $point = (Send-Cdp 'Runtime.evaluate' @{
    expression = "(() => { const el = document.querySelector($selectorJson); if (!el) return null; const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()"
    returnByValue = $true
  }).result.result.value
  if ($point) {
    [void](Send-Cdp 'Input.dispatchMouseEvent' @{
      type = 'mouseMoved'; x = $point.x; y = $point.y; button = 'none'
    })
    Start-Sleep -Milliseconds 950
  }
}

if ($Eval) {
  $value = (Send-Cdp 'Runtime.evaluate' @{
    expression = $Eval; returnByValue = $true; awaitPromise = $true
  }).result.result.value
  Write-Host ("eval: " + ($value | ConvertTo-Json -Depth 16 -Compress))
}

if ($Full) {
  $scrollExpression = @'
(async () => {
  const step = Math.max(360, window.innerHeight * 0.55);
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((resolve) => setTimeout(resolve, 160));
  }
  window.scrollTo(0, 0);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return document.documentElement.scrollHeight;
})()
'@
  [void](Send-Cdp 'Runtime.evaluate' @{
    expression = $scrollExpression; returnByValue = $true; awaitPromise = $true
  })
  $metrics = Send-Cdp 'Page.getLayoutMetrics'
  $content = $metrics.result.cssContentSize
  $shot = Send-Cdp 'Page.captureScreenshot' @{
    format = 'png'
    fromSurface = $true
    captureBeyondViewport = $true
    clip = @{ x = 0; y = 0; width = $content.width; height = $content.height; scale = 1 }
  }
} else {
  $errors = (Send-Cdp 'Runtime.evaluate' @{
    expression = 'window.__errs || []'; returnByValue = $true
  }).result.result.value
  if ($errors.Count -gt 0) { Write-Host "page errors: $($errors -join ' | ')" }
  $shot = Send-Cdp 'Page.captureScreenshot' @{
    format = 'png'; fromSurface = $true; captureBeyondViewport = $false
  }
}

[IO.File]::WriteAllBytes($out, [Convert]::FromBase64String($shot.result.data))
$ws.Dispose()
Write-Host "saved $out"
