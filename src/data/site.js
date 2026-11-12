export const profile = {
  name: 'REN BOWEN',
  nameZh: '任博文',
  role: '计算机科学 · 本科三年级',
  direction: '机器学习 / 深度学习 → 具身智能',
  location: 'China · UTC+8',
  status: 'Open to collaboration',
  github: {
    label: 'bowenren-Andrew',
    url: 'https://github.com/bowenren-Andrew',
  },
  app: {
    label: 'ren-rag-pdf.streamlit.app',
    url: 'https://ren-rag-pdf.streamlit.app/',
  },
}

export const navLinks = [
  { id: 'about', label: '关于' },
  { id: 'work', label: '项目' },
  { id: 'skills', label: '能力' },
  { id: 'contact', label: '联系' },
]

export const hero = {
  eyebrow: 'PORTFOLIO 2026 · CLAY EDITION',
  lead: '把模型、数据和一点点好奇心，捏成能跑起来的东西。',
  chips: ['PYTORCH', 'RAG', 'EMBODIED AI'],
}

export const about = {
  title: '把想法，捏成能跑的东西。',
  lead: '我是任博文，计算机科学大三。正在系统补齐机器学习与深度学习的基础——从经典模型的假设与评估，到用 PyTorch 手写训练循环、调参和排查过拟合。',
  body: '方向是具身智能。我相信智能不止于文本与图像，而在于感知、推理与行动形成闭环。现在正在学习强化学习、机器人仿真与多模态模型，也在用一个个能跑起来的小项目，把知识变成可以演示的东西。',
  quote: '智能不止于文本与图像，而在于感知、推理与行动形成闭环。',
}

export const facts = [
  { label: '现在', value: '强化学习与机器人仿真' },
  { label: '方向', value: 'Machine Learning → Embodied AI' },
  { label: '工具', value: 'Python · PyTorch · Streamlit · Supabase' },
  { label: '坐标', value: 'China · UTC+8' },
]

export const learning = [
  {
    index: '01',
    title: '深度学习工程',
    text: '复现网络结构，理解训练、正则化与评估，把 PyTorch 用顺。',
  },
  {
    index: '02',
    title: '检索增强生成',
    text: '从文档解析、切分、向量化到带出处的回答，完整搭一遍。',
  },
  {
    index: '03',
    title: '具身智能',
    text: '强化学习、机器人仿真与多模态感知，正在起步。',
  },
]

export const skills = [
  {
    id: 'python',
    icon: 'code',
    title: 'Python',
    cn: '编程语言',
    en: 'PRIMARY LANGUAGE',
    desc: '数据处理、脚本自动化、接口调用与后端原型，日常开发的主力语言。',
    tags: ['数据处理', '自动化', 'API'],
  },
  {
    id: 'ml',
    icon: 'brain',
    title: 'Machine Learning',
    cn: '机器学习',
    en: 'FOUNDATIONS',
    desc: '理解经典模型的假设、训练与评估，能从特征工程走到可解释的结果。',
    tags: ['监督学习', '模型评估', '特征工程'],
  },
  {
    id: 'dl',
    icon: 'layers',
    title: 'Deep Learning',
    cn: '深度学习',
    en: 'NEURAL NETWORKS',
    desc: '用 PyTorch 搭建并训练网络，正在深入 Transformer 与训练工程。',
    tags: ['PyTorch', '训练循环', '调参'],
    badge: '在学',
  },
  {
    id: 'rag',
    icon: 'search',
    title: 'RAG Application',
    cn: 'RAG 应用开发',
    en: 'RETRIEVAL + GENERATION',
    desc: '把文档解析、向量检索、提示编排与出处引用串成可用的问答产品。',
    tags: ['pgvector', 'DeepSeek', '检索'],
  },
  {
    id: 'fullstack',
    icon: 'stack',
    title: 'Full-stack Prototyping',
    cn: '全栈小项目',
    en: 'SHIP SMALL IDEAS',
    desc: '用 Streamlit 与 Supabase 快速验证想法，从界面到数据一层层跑通。',
    tags: ['Streamlit', 'Supabase', '部署'],
  },
]

export const projects = [
  {
    id: 'rag-course-assistant',
    index: '01',
    type: '个人项目',
    tag: 'RAG APPLICATION',
    title: '课程资料问答助手',
    titleEn: 'COURSE MATERIAL RAG ASSISTANT',
    summary:
      '把课程 PDF 与 PPTX 变成一个能追问、能给出原文出处的私人助教。上传资料后自动生成摘要与推荐问题；提问时先检索、再生成，回答附带页码级引用；支持多轮追问与多用户数据隔离。',
    features: [
      { title: '文档自动整理', text: '上传 PDF / PPTX，自动解析、切分并写入向量库。' },
      { title: '摘要与推荐问题', text: '读完资料先给结构摘要，再给出可以直接发问的问题。' },
      { title: '答案带原文出处', text: '每条回答标注来源文档、章节与页码，可回到原文核对。' },
      { title: '多轮与多用户', text: '支持上下文追问，每个用户的知识库与会话彼此隔离。' },
    ],
    stack: ['Streamlit', 'DeepSeek', 'pgvector', 'Supabase', 'RAG'],
    links: {
      app: 'https://ren-rag-pdf.streamlit.app/',
      repo: 'https://github.com/bowenren-Andrew/rag-pdf-qa',
    },
    caption: '真实应用里的资料索引、带出处回答与追问流程',
    preview: {
      kind: 'rag',
      url: 'ren-rag-pdf.streamlit.app',
      files: [
        { type: 'PDF', name: '机器学习导论.pdf', meta: '128 页 · 已索引' },
        { type: 'PPTX', name: '深度学习实践.pptx', meta: '64 页 · 已索引' },
      ],
      summary: '覆盖监督学习、模型评估、神经网络与优化方法，重点在第 4 章的损失函数对比。',
      questions: ['交叉熵与 MSE 的区别？', '如何判断模型过拟合？', '学习率对收敛的影响？'],
      question: '为什么分类任务更常用交叉熵，而不是 MSE？',
      answer:
        '交叉熵直接比较预测分布与真实分布，偏离越大，梯度越强；MSE 作用在概率上时，容易因 Sigmoid 饱和而梯度消失。',
      answer2: '这也是分类任务默认使用交叉熵的原因。',
      sources: [
        { name: '机器学习导论.pdf', loc: 'Ch.4 · P.87' },
        { name: '深度学习实践.pptx', loc: 'P.12' },
      ],
    },
  },
  {
    id: 'china-population-dashboard',
    index: '02',
    type: '开源 fork 改造',
    tag: 'DATA DASHBOARD',
    title: '中国人口仪表盘',
    titleEn: 'CHINA POPULATION DASHBOARD',
    summary:
      '基于 dataprofessor/population-dashboard fork 改造：把美国州级人口仪表盘换成中国大陆 31 个省级行政区 2010–2023 年数据。数据来自国家统计局《中国统计年鉴》，经转录、单位换算与交叉校验；地图改用本地 GeoJSON 生成 SVG，不依赖地图 CDN。',
    features: [
      { title: '官方年鉴数据链', text: '三份年鉴表转录为 434 行省级面板，万人换算为人，并与全国总数交叉校验。' },
      { title: '本地地图不空白', text: '放弃会请求 CDN 的 Plotly geo，改用本地 GeoJSON 直出 SVG choropleth，离线也能渲染。' },
      { title: '阈值按中国数据校准', text: '净变化阈值由原版 5 万改为 ±20 万，依据省级同比变化中位数；2023 年净增 2 省、净减 7 省。' },
      { title: '筛选与导出', text: '年份、省份多选、10 套配色、单省趋势图，当前筛选结果可下载为 CSV。' },
    ],
    stack: ['Streamlit', 'pandas', 'Altair', 'GeoJSON', 'SVG'],
    links: {
      app: 'https://china-population-dashboard.streamlit.app/',
      repo: 'https://github.com/bowenren-Andrew/china-population-dashboard',
    },
    caption: '真实应用里的中国省级地图、热力图与省份排名',
    preview: {
      kind: 'image',
      url: 'china-population-dashboard.streamlit.app',
      image: 'media/projects/china-population-dashboard.png',
      alt: '中国人口仪表盘界面预览',
      seal: 'DATA',
      sealSub: 'POPULATION\n2010–2023',
    },
  },
]

export const projectMore = {
  text: '更多项目在整理中，先去 GitHub 看看过程',
  url: 'https://github.com/bowenren-Andrew',
}

export const contact = {
  title: '有想法，就聊聊。',
  lead: '如果你也在做机器学习、RAG 或具身智能相关的事情，或者有合适的机会，欢迎直接找到我。',
  note: '开放交流与合作',
}
