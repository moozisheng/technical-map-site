export const technicalList = [
  {
    title: "Lazada Seller Campaign (促销互动移动端)",
    description:
      "Seller Campaign  移动端与 PC  端新的 Campaign  流程不同步，且移动端运行不佳，用户体验差，需重构升级。主要页面有活动列表页、活动报名页、协议签署页、产品价格批量设置页等",
    technologyStack:
      "react、ahooks、antd mobile、Vite、TypeScript、unocss、less、vmojs ",
    gridArea: "r0c0/r0c1",
  },
  {
    title: "Lazada Seller Affiliate (卖家倡导计划) 移动端",
    description:
      "通过分享产品和店铺链接赚取佣金，引导卖家入驻 Lazada ，卖家可以在卖家中心生成链接，并分享到社交媒体。页面有卖家信息编辑页，账单、支付信息页，店铺、产品链接分享页等",
    technologyStack:
      "react18、Ant Design、antd mobile、Vite、ahooks、unocss、sass、i18n、vmojs",
    gridArea: "r0c2/r0c3",
  },
  {
    title: "Lazada Seller Affiliate (卖家倡导计划) PC端",
    description:
      "通过分享产品和店铺链接赚取佣金，引导卖家入驻 Lazada ，卖家可以在卖家中心生成链接，并分享到社交媒体。页面有卖家信息编辑页，账单、支付信息页，店铺、产品链接分享页等",
    technologyStack:
      "react18、Ant Design、antd mobile、Vite、ahooks、unocss、sass、i18n、vmojs",
    gridArea: "r1c0/r1c1",
  },
  {
    title: "Merlion-UI 组件库",
    description:
      "服务与Lazada卖家中心B端系统的业务组件库，已积累了地址选择器、产品卡片选择器、文本拷贝、时间范围选择器、货币显示、自定义HTML渲染器、Excel导出导入、多媒体查看器等40多个业务组件",
    technologyStack: "react18、antd、ahooks、vite、vitest、scss",
    gridArea: "r1c2",
  },
  {
    title: "Admin 游戏运营平台",
    description:
      "阿里互娱所有游戏的运营平台。该项目为前后端分离项目，面向内部用户，提供游戏运行相关功能。功能模块有公告发布、服务器管理系统、客服系统、奖励/活动/激活码系统、聊天系统等20多个系统。",
    technologyStack:
      "react、redux、immutable、Ant.Design Pro、TypeScript、less、webpack",
    gridArea: "r1c3",
  },
  {
    title: "天燕监控系统",
    description:
      "该系统是一个游戏 App  性能埋点监控系统，提供了 Native  层面的指标数据和分析能力，可以采集客户端性能相关数据，分析客户端性能的总体的总体情况和定位相关性能问题。主要功能模块有场景分析、网络性能、日志分析、定制报表、实时大屏等。",
    technologyStack:
      "react、umi、Ant.Design Pro、ProTable、bizcharts、TypeScript、Midway、less",
    gridArea: "r2c0",
  },
  {
    title: "互娱财务系统",
    description:
      "原财务系统基于独代业务合作场景搭建，已经不满足于自研发行的财务结算的业务场景，且技术栈老旧，已无法在旧系统上迭代新功能，需要开发新的财务系统支撑自研发行的财务结算场景。",
    technologyStack:
      "react、umi、Ant.Design Pro、ProTable、TypeScript、Midway、less",
    gridArea: "r2c1",
  },
  {
    title: "图片资源管理系统",
    description: "",
    gridArea: "r2c2",
  },
  {
    title: "互娱打包系统",
    description:
      "系统主要是面向内部用户的，主要是游戏包管理相关的业务。功能模块包括游戏母包管理、配置表管理、一级渠道包管理、sdk组件管理、二级渠道包管理等功能，涵盖了游戏发行包打包的全生命周期。",
    technologyStack: "larva、umi、react、antd、TypeScript、less",
    gridArea: "r2c3",
  },
  {
    title: "互娱游戏基础库",
    description: "",
    gridArea: "r3c0",
  },
  {
    title: "One系统",
    description:
      "自研平台应用统一使用的权限校验、身份认证中心,通过Oauth2.0提供自研平台应用接入",
    gridArea: "r3c1",
  },

  {
    title: "仓颉业务中台",
    description:
      "⼀个业务系统往往依赖多个基础服务和中台服务，在部署时就会重复部署这些服务，多系统组合增加了系统复杂度，其业务上⼿、使⽤及维护成本也很⾼。仓颉中台通过多服务统⼀编排，⼀站式管理，可减少基础服务的重复部署，降低业务上⼿、使⽤及维护成本。",
    technologyStack:
      "React、dva、umi、Ant.Design Pro、TypeScript、G6、Midway、less",
    gridArea: "r3c2",
  },

  {
    title: "搜索服务化管理中台",
    description:
      "该项目为集团内部的业务管理平台，面向的用户是普通用户和管理员。既有提供索引服务的前端管理入口，也有提供后端系统的运维控制入口。主要模块有索引服务中心，特征中心、应用管理、权限管理等。",
    technologyStack:
      "ES6+、React、dva、UmiJS、antd、TypeScript、Midway、Nodejs、less、echarts",
    gridArea: "r3c3",
  },

  {
    title: "爬虫调度平台",
    description: "",
    gridArea: "r4c0",
  },
  {
    title: "爬虫标注平台",
    description:
      "在 App 爬虫标注平台上，通过配置就可实现相应的爬取入库，再由统一入库模块进行过滤分发到相应的业务。Starter 模块负责发起初始请求，即爬取入口，ContentCrawler 负责处理爬取的内容，并控制下一步流程。",
    technologyStack: "React、antd、Mobx、Egg、Nodejs、less、ES6+、webpack",
    gridArea: "r4c1",
  },

  {
    title: "爬虫种子管理平台",
    description:
      "信息内容的爬取，其种子信息用 Excel 存储，基本上都是手工填入，缺乏可视化，统一化的管理平台，极大的影响爬取效率，后期维护也十分困难。主要模块有种子管理模块、分组管理模块、配置管理模块。",
    technologyStack: "React、antd、Egg、Nodejs、MySQL、less、ES6+、webpack",
    gridArea: "r4c2",
  },

  {
    title: "UED应用部署中台",
    description:
      "一个用于应用部署的管理系统，支持集团的搜索业务、在线业务、离线业务等众多业务，平台还与其它系统打通，可以更好地与集团生态进行互通。在平台中，组件复用、监控、日志归集标准化，将大部分基础能力下沉，让开发者更关注于本身的业务逻辑开发中。",
    technologyStack:
      "Vue、Vuex、vue-router、element-ui、g6、g2、sass、egg、webpack",
    gridArea: "r4c3",
  },
  {
    title: "医鹿病友社区H5应用",
    description: "",
    gridArea: "r5c0",
  },

  {
    title: "WMS 仓储管理系统",
    description:
      "基于 Jupiter 搭建的微前端应用，使用 BFF 聚合底层 API 。通过信息化、智能化方式管理仓储作业中的实物流、操作流、单据流等。仓储管理系统作为子应用，主要有商品管理、拣货管理、仓库管理、退供管理、发货管理等功能模块。",
    technologyStack: "react、Jupiter、BFF、ArcoDesign、TypeScript、less",
    gridArea: "r5c2",
  },
  {
    title: "渡鸦低代码搭建平台",
    description:
      "每个业务都有自己的运营系统，多个运营系统会存在多个重复的业务功能，每个系统都重新搭建，其开发、维护成本会很高。基于这些痛点，选择开发一个低代码搭建平台，快速搭建业务运营系统。通过复用已有的页面模板、可视化拖拽的能力，可快速搭建一套运营系统，为不同的业务提供运营能力。已快速接入vlog社区、病友社区、阿里医院等20+个业务。",
    technologyStack:
      "React、Ant Design、mobx 、mbox-state-tree、TypeScript、scss、jest、rollup",
    gridArea: "r5c3/r6c3",
  },
  {
    title: "样本库管理平台",
    description:
      "内容理解（分类、Tag等）是推荐算法的基础，文本的理解和视频的理解的算法都强依赖于“高质量的样本数据”，将样本及标记结果用系统管理起来，并提供数据读取能力，降低样本的维护成本，提升样本标注和管理效率。主要功能模块有样本增删查改、样本批量导入导出、label 增删查改、label 批量导入导出。",
    technologyStack:
      "ES6+、React、dva、antd、Egg、Nodejs、localstorage、webpack",
    gridArea: "r5c1/r6c1",
  },
  {
    title: "rhino-ui 业务组件库",
    description:
      "定位于中后台系统的业务组件库，组件的思路来源于后台管理系统的常用功能，已积累了省市区级联、Excel导出、可折叠按钮组、多媒体查看器、图片上传等30多个业务组件",
    technologyStack: "React、Ant Design、dumi、TypeScript、unocss、scss、jest",
    gridArea: "r6c0",
  },
  {
    title: "node 爬虫",
    description:
      "在信息内容的爬取中，⽆论是⽹⻚爬取还是 JSON/RSS  接⼝爬取，其爬取流程与内容基本都是相同的，因此要开发⼀套通⽤的爬⾍，便于维护。通⽤爬⾍分为数据产出任务和数据消费任务，数据产出任务负责提取。",
    gridArea: "r6c2",
    technologyStack:
      "ES6+、Nodejs、Anyproxy、MySQL、puppeteer、appium、youtube-dl、ffmpeg、axios、cheerio",
  },
];
