# REN BOWEN · Clay Portfolio

独立于原 `portfolio/` 暗黑站的新作品集。React 19 + Vite 8，零 UI 框架、零 CDN 字体，黏土卡通风格。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://127.0.0.1:5174 。生产构建：

```bash
npm run build
npm run preview
```

预览地址为 http://127.0.0.1:4174 。

## 页面结构

- Hero：英文大标题、10 秒转头视频循环、正面头像贴纸（含眨眼）、状态标签
- 关于我：3/4 侧面大图、个人介绍、事实信息、正在学习的三条线
- 精选项目：目前只有“课程资料问答助手”，下方留了一条非卡片的扩展提示
- 能力：5 张黏土卡片，最后两张为宽卡
- 联系：藏青黏土面板、GitHub / Live App、90° 侧面头像

## 内容怎么改

文案、项目、技能都在 `src/data/site.js`：

- `profile`：姓名、身份、GitHub、应用链接
- `hero`：开头小标签与技术栈
- `about` / `facts` / `learning`：关于我
- `skills`：能力卡片
- `projects`：精选项目数组
- `projectMore`：项目区底部的扩展提示

### 新增项目

往 `projects` 数组追加同结构对象即可。组件会自动渲染；项目数量大于 1 时外层会加 `is-multi`，方便在 `projects.css` 里扩展双列或多列布局。没有 `preview` 的项目不会渲染预览面板。

## 素材

`public/media/` 下的文件全部来自用户提供的同一组三视图与视频：

- `avatar-front.png`：Hero 正面头像贴纸，带 CSS 眨眼
- `avatar-three-quarter.png`：关于我 3/4 侧面
- `avatar-profile.png`：联系区 90° 侧面
- `head-turn.mp4`：Hero 主视频，10 秒，正面 → 侧面 → 正面，循环
- `wave.mp4`：Hero 悬停 / 点击后播放的 5 秒挥手视频

视频均为静音、`playsInline`、自动播放。视频容器不做缩放或运镜，保证素材本身的转头动作干净。

## 动效

- 浮动：背景黏土块、头像贴纸、状态标签、项目区光斑
- 悬停：按钮压感、卡片抬升、技能图标轻转、头像区挥手
- 滚动视差：`useParallax` 给 `[data-parallax]` 写入 `--parallax-y`
- 入场：`useReveal` 通过 IntersectionObserver 给 `[data-reveal]` 加 `is-inview`
- 眨眼：正面头像上的两片眼睑，7.2 秒一次
- 全部动效都遵守 `prefers-reduced-motion`
- 开启“减少动态效果”时，循环转头视频会停在正面封面；悬停 / 点击挥手仍由用户主动触发

## 结构

```
src/
  data/site.js            内容数据
  components/             Nav / Hero / About / Projects / Skills / Contact
  hooks/                  useScrollSpy / useReveal / useParallax
  styles/                 token、导航、Hero、区块、项目、联系
public/media/             三视图与两段视频
scripts/capture.ps1       本地 Chrome DevTools 截图脚本（可选）
```

## 验证

```bash
npm run build
```

构建通过后启动 `npm run dev`，在 1440×900 与 390×844 下检查布局、视频自动播放、悬停挥手与移动端导航。

### 可选：截图

先启动一个带调试端口的 Chrome，再运行截图脚本：

```powershell
chrome --headless=new --remote-debugging-port=9334 --user-data-dir="$env:TEMP\clay-chrome" about:blank
pwsh -File scripts/capture.ps1 -Name hero -Width 1440 -Height 900
pwsh -File scripts/capture.ps1 -Name full -Width 390 -Height 844 -Full
```

输出在 `.shots/`，该目录已在 `.gitignore` 中。
