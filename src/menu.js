var menus = [
  {
    action: "home",
    title: "首页",
    path:"/index",
    items: [
      { title: "首页", path: "/dashboard" }]
  },
  {
    action: "apps",
    title: "学习模式",
    path:"/form",
    items: [
      { title: "实验报告学习", path: "/PdfForm" },
      { title: "视频学习", path: "/VideoPlayer" },
    ]
  },
  {
    action: "apps",
    title: "考核模式",
    path:"/form",
    items: [
      { title: "建立模型", path: "/model-form" },
      { title: "实验辨识建模", path: "/data-model-form" },
      { title: "基本数字PID控制规律研究", path: "/easypid-form" },
      { title: "积分分离式PID控制规律研究", path: "/integral-separation-form" },
      { title: "单容水箱串级控制研究", path: "/one-cascade-form" },
      { title: "双容水箱前馈-串级控制研究", path: "/two-cascade-form" },
    ]
  },
  {
    action: "apps",
    title: "自主实验模式",
    path:"/form",
    items: [
      { title: "自主设计控制算法", path: "/write-form" },
      { title: "本地实验地址", path: "/local-form" },
    ]
  },


 /* {
    action: "apps",
    title: "建立模型",
    path:"/form",
    items: [
      { title: "系统机理建模", path: "/model-form" },
      { title: "实验辨识建模", path: "/data-model-form" },
    ]
  },
  {
    action: "people",
    title: "单容水箱控制",
    path:"/form",
    items: [
      { title: "基本数字PID控制规律研究", path: "/easypid-form" },
      { title: "积分分离式PID控制规律研究", path: "/integral-separation-form" },
      { title: "串级控制研究", path: "/one-cascade-form" },
    ]
  },
  {
    action: "attach_money",
    title: "双容水箱控制",
    path:"/form",
    items: [
      { title: "前馈-串级控制研究", path: "/two-cascade-form" },
    ]
  },
  {
    action: "settings",
    title: "算法设计",
    path:"/form",
    items: [
      { title: "自主设计控制算法", path: "/write-form" },
    ]
  },
  {
    action: "settings",
    title: "本地实验",
    path:"/form",
    items: [
      { title: "本地实验地址", path: "/local-form" },
    ]
  }*/
]

export default menus;
