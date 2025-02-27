// fetch remote data, or generate metadata based on local files.
import type { SiteNavSection } from "../types"
// <meta property="og:image" content="">
// logo
// favicon
// brand name


export default {
     load() {
      return data
    }
  }



  export const data: SiteNavSection[] = [
    {
      title: 'Tools',
      items: [
        {
          icon: 'https://resend.com/_next/image?url=%2Fstatic%2Flanding-page%2Fresend-logo-footer.webp&w=3840&q=75',
          title: 'Resend',
          desc: 'The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.',
          link: 'https://resend.com/'
        },
        {
          icon: 'https://docsearch.algolia.com/img/docsearch-x-algolia-logo-light-mode.png',
          title: 'docsearch',

          desc: 'Free Algolia Search For Developer Docs',
          link: 'https://docsearch.algolia.com/'
        },
        {
          icon: 'https://docusaurus.io/img/meta_opensource_logo_negative.svg',
          title: 'docusaurus',
          desc: 'Build optimized websites quickly, focus on your content',
          link: 'https://docusaurus.io/'
        },
        {
          icon: "https://endoflife.date/assets/logo-192x192.png",
          title: 'endoflife.date',
          desc: 'documents EOL dates and support lifecycles for various products',
          link: 'https://endoflife.date/nodejs'
        }
      ]
    },
    {
      title: 'Profile stats graph',
      items: [
        {
          icon: '/logo.png',
          title: 'GitHub Stars Sparklines',
          desc: 'GitHub Stars Sparklines',
          link: 'https://stars.medv.io/'
        },
        {
          icon: 'https://user-images.githubusercontent.com/6661165/91657958-61b4fd00-eb00-11ea-9def-dc7ef5367e34.png',
          title: 'GitHub Profile Trophy',
          desc: ' Add dynamically generated GitHub Stat Trophies on your README',
          link: 'https://github.com/ryo-ma/github-profile-trophy#readme'
        },
        {
          icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
          title: 'Qwerty Learner',
          desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
          link: 'https://qwerty.fe-mm.com'
        },
        {
          icon: '/logo.png',
          title: 'Contributors-Readme-Action',
          desc: '',
          link: 'https://netease-music.fe-mm.com'
        },
        {
          icon: '/logo.png',
          title: 'Contributors-Readme-Action',
          desc: 'mmPlayer 在线音乐播放器',
          link: 'https://github.com/marketplace/actions/contribute-list'
        },
      ]
    },
    {
      title: 'Tools',
      items: [
        {
          icon: 'https://crontab.guru/cronitor.png',
          title: 'crontab guru',
          desc: 'The quick and simple editor for cron schedule expressions by Cronitor',
          link: 'https://crontab.guru/'
        },
        {
          icon: 'https://reactrouter.com/favicon-light.png',
          title: 'React Router',
          desc: 'React 的声明式路由',
          link: 'https://reactrouter.com'
        },
        {
          icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
          title: 'codeflow',
          desc: 'Measure Code Quality • Decrease Technical Debt • Find Refactoring Opportunities',
          link: 'https://www.getcodeflow.com/'
        },
        {
          icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
          title: 'UmiJS',
          desc: '插件化的企业级前端应用框架',
          link: 'https://umijs.org'
        },
        {
          icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
          title: 'Ant Design',
          desc: '一套企业级 UI 设计语言和 React 组件库',
          link: 'https://ant.design'
        },
        {
          icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
          title: 'Ant Design Mobile',
          desc: '构建移动 WEB 应用程序的 React 组件库',
          link: 'https://mobile.ant.design'
        },
        {
          icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
          title: 'Zustand',
          desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
          link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
        },
        {
          icon: 'https://valtio.pmnd.rs/favicon.ico',
          title: 'Valtio',
          desc: 'makes proxy-state simple for React and Vanilla',
          link: 'https://valtio.pmnd.rs'
        },
        {
          icon: 'https://jotai.org/favicon.svg',
          title: 'Jotai',
          desc: 'primitive and flexible state management for React',
          link: 'https://jotai.org'
        },
        {
          icon: 'https://cn.redux.js.org/img/redux.svg',
          title: 'Redux',
          desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
          link: 'https://cn.redux.js.org'
        },
        {
          icon: 'https://zh.mobx.js.org/assets/mobx.png',
          title: 'MobX',
          desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
          link: 'https://zh.mobx.js.org'
        },
        {
          icon: 'https://ahooks.js.org/simple-logo.svg',
          title: 'ahooks',
          desc: '一套高质量可靠的 React Hooks 库',
          link: 'https://ahooks.js.org/zh-CN'
        }
      ]
    },
    {
      title: 'Deploy tool chain',
      items: [
        {
          icon: 'https://letsencrypt.org/images/letsencrypt-logo-horizontal.svg',
          title: 'letsencrypt',
          desc: 'A nonprofit Certificate Authority providing TLS certificates to 550 million websites.',
          link: 'https://letsencrypt.org/'
        },
        {
          icon: 'https://www.sectigo.com/images/sectigo-logo.svg',
          title: 'sectigo',
          desc: 'Automate certificate lifecycle management',
          link: 'https://www.sectigo.com/'
        },
        {
          icon: 'https://cn.vuejs.org/logo.svg',
          title: 'Vue Router',
          desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
          link: 'https://router.vuejs.org/zh'
        },
        {
          icon: 'https://pinia.vuejs.org/logo.svg',
          title: 'Pinia',
          desc: '符合直觉的 Vue.js 状态管理库',
          link: 'https://pinia.vuejs.org/zh'
        },
        {
          icon: 'https://nuxt.com/icon.png',
          title: 'Nuxt.js',
          desc: '一个基于 Vue.js 的通用应用框架',
          link: 'https://nuxt.com'
        },
        {
          icon: 'https://vueuse.org/favicon.svg',
          title: 'VueUse',
          desc: 'Vue Composition API 的常用工具集',
          link: 'https://vueuse.org'
        },
        {
          icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
          title: 'Element Plus',
          desc: '基于 Vue 3，面向设计师和开发者的组件库',
          link: 'https://element-plus.org'
        },
        {
          icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
          title: 'Ant Design Vue',
          desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
          link: 'https://antdv.com'
        },
        {
          icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
          title: 'Vant',
          desc: '轻量、可定制的移动端 Vue 组件库',
          link: 'https://vant-ui.github.io/vant'
        },
        {
          icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
          title: 'Cube UI',
          desc: '基于 Vue.js 实现的精致移动端组件库',
          link: 'https://didi.github.io/cube-ui'
        },
        {
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
          title: 'NutUI',
          desc: '京东风格的轻量级移动端组件库',
          link: 'https://nutui.jd.com'
        }
      ]
    },
    {
      title: 'JavaScript 框架类库',
      items: [
        {
          icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
          title: 'Svelte',
          desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
          link: 'https://svelte.dev'
        },
        {
          // icon: 'https://simpleicons.org/icons/jquery.svg',
          icon: '/icons/jquery.svg',
          title: 'jQuery API 中文文档',
          desc: '一个兼容多浏览器的 JavaScript 框架',
          link: 'https://jquery.cuishifeng.cn'
        }
      ]
    },
    {
      title: 'CSS 相关',
      items: [
        {
          icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
          title: 'PostCSS',
          desc: '一个用 JavaScript 转换 CSS 的工具',
          link: 'https://postcss.org'
        },
        {
          icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
          title: 'Sass',
          desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
          link: 'https://sass-lang.com'
        },
        {
          icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
          title: 'TailwindCSS 中文网',
          desc: '一个功能类优先的 CSS 框架',
          link: 'https://www.tailwindcss.cn'
        }
      ]
    },
    {
      title: '小程序相关',
      items: [
        {
          icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
          title: '微信小程序文档',
          desc: '微信小程序官方开发者文档',
          link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
        },
        {
          icon: '/icons/taro.svg',
          title: 'Taro',
          desc: '多端统一开发解决方案',
          link: 'https://taro.jd.com'
        },
        {
          icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
          title: 'uni-app',
          desc: '一个使用 Vue.js 开发所有前端应用的框架',
          link: 'https://uniapp.dcloud.net.cn'
        },
        {
          icon: 'https://mpxjs.cn/favicon.ico',
          title: 'Mpx',
          desc: '增强型跨端小程序框架',
          link: 'https://mpxjs.cn'
        }
      ]
    },
    {
      title: 'Node 相关',
      items: [
        {
          icon: '/icons/nodejs.svg',
          title: 'Node.js',
          desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
          link: 'https://nodejs.org/zh-cn'
        },
        {
          icon: 'https://expressjs.com/images/favicon.png',
          title: 'Express',
          desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
          link: 'https://expressjs.com'
        },
        {
          icon: '/icons/koa.svg',
          title: 'Koa',
          desc: '基于 Node.js 平台的下一代 web 开发框架',
          link: 'https://koajs.com'
        },
        {
          icon: 'https://www.eggjs.org/favicon.png',
          title: 'Egg',
          desc: '为企业级框架和应用而生',
          link: 'https://www.eggjs.org/zh-CN'
        },
        {
          icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
          title: 'Nest.js 中文文档',
          desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
          link: 'https://docs.nestjs.cn'
        }
      ]
    },
    {
      title: '可视化',
      items: [
        {
          icon: 'https://echarts.apache.org/zh/images/favicon.png',
          title: 'ECharts',
          desc: '一个基于 JavaScript 的开源可视化图表库',
          link: 'https://echarts.apache.org/zh/index.html'
        },
        {
          icon: 'https://antv.vision/icons/icon-72x72.png',
          title: 'AntV',
          desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
          link: 'https://antv.vision/zh/'
        },
        {
          icon: 'https://d3js.org/favicon.png',
          title: 'D3.js',
          desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
          link: 'https://d3js.org'
        },
        {
          icon: 'https://www.chartjs.org/favicon.ico',
          title: 'Chart.js',
          desc: '一个简单而灵活的 JavaScript 图表库',
          link: 'https://www.chartjs.org'
        },
        {
          icon: 'https://threejs.org/files/favicon.ico',
          // icon: 'https://threejs.org/files/favicon_white.ico',
          title: 'Three.js',
          desc: 'JavaScript 3d 库',
          link: 'https://threejs.org'
        }
      ]
    },
    {
      title: 'Aesthetic',
      items: [
        {
          icon: 'https://ucarecdn.com/6a2fdaa9-b925-4b1c-8990-41cd44046891/cubehero.svg',
          title: 'cube',
          desc: 'Build AI and analytics solutions with unified data',
          link: 'https://cube.dev/?ref=eco-vue-chartjs'
        },
        {
          icon: 'https://cdn.prod.website-files.com/673f71b4ebbb99190437de75/67917518352105f18532c234_Group%203.svg',
          title: 'sourcegraph',
          desc: 'Grok your entire codebase',
          link: 'https://sourcegraph.com/demo/code-search?form_submission_source=demo-code-search&utm_source=google&utm_medium=cpc&utm_campaign=21930501112&utm_term=developer%20productivity%20tools&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s3gQk2YqAeNFjcIDPCCz3TqFG9PxJGacrb5Ks3w996jQNHomY0ImlMaAnl6EALw_wcB'
        },
        {
          icon: 'https://www.rollupjs.com/img/favicon.png',
          title: 'Rollup',
          desc: 'Rollup 是一个 JavaScript 模块打包器',
          link: 'https://www.rollupjs.com'
        },
        {
          icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
          title: 'Turbo',
          desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
          link: 'https://turbo.build'
        },
        {
          icon: 'https://www.babeljs.cn/img/favicon.png',
          title: 'Babel',
          desc: 'Babel 是一个 JavaScript 编译器',
          link: 'https://www.babeljs.cn'
        },
        {
          icon: 'https://esbuild.github.io/favicon.svg',
          title: 'esbuild',
          desc: 'An extremely fast bundler for the web',
          link: 'https://esbuild.github.io'
        },
        {
          icon: 'https://swc.rs/favicon/apple-touch-icon.png',
          title: 'SWC',
          desc: 'Rust-based platform for the Web',
          link: 'https://swc.rs'
        }
      ]
    },
    {
      title: 'cross-platform',
      items: [
        {
          icon: 'https://v2.tauri.app/_astro/logo.DCjQDXhk.svg',
          title: 'Tauri2.0',
          desc: 'Create small, fast, secure, cross-platform applications',
          link: 'https://v2.tauri.app/'
        },
        {
          icon: 'https://www.electronjs.org/assets/img/logo.svg',
          title: 'electronjs',
          desc: 'Build cross-platform desktop apps with JavaScript, HTML, and CSS',
          link: 'https://www.electronjs.org/'
        },
        {
          icon: 'https://reactnative.dev/img/header_logo.svg',
          title: 'React Native',
          desc: 'Learn once, write anywhere.',
          link: 'https://reactnative.dev/'
        },
        {
          icon: 'https://docs.flutter.dev/assets/images/branding/flutter/logo/de',
          title: 'flutter',
          desc: 'Flutter transforms the development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase.',
          link: 'https://docs.flutter.dev/get-started/install?_gl=1*1nkh7cy*_gcl_aw*R0NMLjE3NDAzMzEzMzAuQ2owS0NRaUFxLXU5QmhDakFSSXNBTkxqLXMwMTNNM2IxV0lYMzhvUzJyMDA4RjVORVV1R3N4RGVVV2RjTTJfdlhJYU9EcWhPd0FXYzUySWFBby1jRUFMd193Y0I.*_gcl_dc*R0NMLjE3NDAzMzEzMzAuQ2owS0NRaUFxLXU5QmhDakFSSXNBTkxqLXMwMTNNM2IxV0lYMzhvUzJyMDA4RjVORVV1R3N4RGVVV2RjTTJfdlhJYU9EcWhPd0FXYzUySWFBby1jRUFMd193Y0I.*_up*MQ..*_gs*MQ..*_ga*ODY0NTcwNjU5LjE3NDAzMzEzMjk.*_ga_04YGWK0175*MTc0MDMzMTMyOS4xLjAuMTc0MDMzMTMyOS4wLjAuMA..&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s013M3b1WIX38oS2r008F5NEUuGsxDeUWdcM2_vXIaODqhOwAWc52IaAo-cEALw_wcB&gclsrc=aw.ds'
        },
        {
          icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/logo-en.png',
          title: 'uni-app',
          desc: 'write once, Run anywhere.',
          link: 'https://en.uniapp.dcloud.io/'
        },
      ]
    },
    {
      title: 'UI toolkit',
      items: [
        {
          icon: 'https://www.projectwallace.com/favicon.png',
          title: 'Tools, Generators & Resources',
          desc: "CSS Portal is home to many examples of CSS / HTML and how it can be used in website design. Here you'll find all CSS properties and many CSS generators to help with all your design needs. You will find hundreds of pages of tools, resources and generators to help with CSS and HTML. All of our generators will produce the necessary code that you can then copy and paste into your web project. Hopefully you find this website helpful in assisting you with your CSS and HTML needs.",
          link: 'https://www.cssportal.com/'
        },
        {
          icon: 'https://www.projectwallace.com/favicon.png',
          title: 'Open-source Retool for Enterprise',
          desc: 'Build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.',
          link: 'https://refine.dev/docs/#use-cases'
        },
        {
          icon: 'https://www.projectwallace.com/favicon.png',
          title: 'reactbits',
          desc: 'Hand-picked animated components collection for creative developers',
          link: 'https://play.tailwindcss.com/'
        },
        {
          icon: 'https://www.projectwallace.com/favicon.png',
          title: 'reactbits',
          desc: 'Hand-picked animated components collection for creative developers',
          link: 'https://www.projectwallace.com/'
        },
        {
          icon: 'https://www.projectwallace.com/favicon.png',
          title: 'wallace',
          desc: 'The best CSS analyzer out there.',
          link: 'https://www.projectwallace.com/'
        },
        {
          title: 'Primer Octicons',
          desc: 'Octicons are a set of SVG icons built by GitHub for GitHub.',
          link: 'https://github.com/primer/octicons'
        },
        {
          icon: 'https://svgl.app/images/logo.svg',
          title: 'svgl',
          desc: 'All SVGs include links to the respective products or companies that own them. Please contact the owner directly if you need to use their logo',
          link: 'https://svgl.app/'
        },
        {
          icon: 'https://simpleicons.org/favicon-31836fe1a9ff1dfa.ico',
          title: 'Simple Icons',
          desc: '3269 SVG icons for popular brands',
          link: 'https://simpleicons.org'
        },
        {
          icon: 'https://iconify.design/favicon.svg',
          title: 'Iconify',
          desc: 'Home of open source icon sets',
          link: 'https://iconify.design/'
        },
        {
          icon: "https://www.nerdfonts.com/assets/img/nerd-fonts-logo.svg",
          title: 'nerdfonts cheat-sheet',
          desc: 'Enter (part) of a word to search for or paste the icon or enter space / blank (\' \') to show all icons',
          link: 'https://www.nerdfonts.com/cheat-sheet'
        },
        {
          "icon": "https://framerusercontent.com/images/JYmaRmvY5KiIEZxe0LiJiCm9hFM.svg?scale-down-to=512",
          title: "kree8",
          desc: 'A Dedicated Design Team for Founders and Startups ',
          link: 'https://kree8.agency/'
        },
        {
          icon: 'https://www.chartjs.org/img/chartjs-logo.svg',
          title: 'Chart.js',
          desc: 'Simple yet flexible JavaScript charting library for the modern web',
          link: 'https://www.chartjs.org/'
        },
      ]
    },

    {
      title: 'influencer',
      items: [
        {
          icon: 'https://www.projectwallace.com/favicon.png',
          title: 'Engineering leader and senior thinker',
          desc: "Addy Osmani is an Irish Software Engineer and leader currently working on the Google Chrome web browser. A developer for 20+ years, he has worked at Google for over twelve years, focused on making the web fast and better for users and web developers. He previously worked on Fortune 500 sites. Addy is the author of a number of books including Learning JavaScript Design Patterns, Leading Effective Engineering Teams, Stoic Mind and Image Optimization. You can try his recent apps.You can find him on LinkedIn, Twitter or TikTok. He's given over 175 talks worldwide. You can find Addy's writing on his blog, Substack and on LeadDev.",
          link: 'https://addyosmani.com/'
        },
        {
          title: 'ishadeed',
          desc: "I design and build web and mobile experiences and teach people about them.",
          link: 'https://ishadeed.com/'
        },
        {
          title: 'lowlighter',
          link: 'https://github.com/lowlighter/metrics'
        },
        {
          icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
          title: 'Stack Overflow',
          desc: '全球最大的技术问答网站',
          link: 'https://stackoverflow.com'
        },

        {
          title: '知乎',
          icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
          desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
          link: 'https://juejin.cn'
        }
      ]
    },
    {
      title: 'blog',
      items: [
        {
          icon: 'https://graphite.dev/nextImageExportOptimizer/neon-hex-logo.d69de1a0-opt-1920.WEBP',
          title: 'graphite',
          desc: 'The AI-powered pull request toolchain',
          link: 'https://graphite.dev/'
        },
        {
          icon: 'https://graphite.dev/nextImageExportOptimizer/neon-hex-logo.d69de1a0-opt-1920.WEBP',
          title: 'graphite',
          desc: 'Searching and Filtering Stars',
          link: 'https://github.blog/news-insights/searching-and-filtering-stars/'
        },
        {
          icon: 'https://blog.stackblitz.com/logo/bolt-color.svg',
          title: 'stackblitz blog',
          link: 'https://blog.stackblitz.com/'
        },
        {
          icon: 'https://blog.stackblitz.com/logo/bolt-color.svg',
          title: 'stackblitz user guide',
          link: 'https://developer.stackblitz.com/guides/user-guide/getting-started'
        },
        {
          icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
          title: 'Meta Developer Documentation',
          link: 'https://developers.facebook.com/docs'
        },
        {
          icon: 'https://mintlify.b-cdn.net/v6.6.0/brands/x-twitter.svg',
          title: 'X Developer Platform',
          link: 'https://docs.x.com/home'
        },
        {
          title: 'github API docs',
          link: 'https://docs.github.com/en/enterprise-server@3.10/rest/repos/repos?apiVersion=2022-11-28#list-repository-contributors'
        },

      ]
    },
    {
      title: 'AI tools',
      items: [
        {
          icon: 'https://framerusercontent.com/images/upy0ulUxWlHpxbKDOVxvuTJ6yaY.png?scale-down-to=512',
          title: 'kapa ai',
          desc: 'Trusted AI answers for your technical users. ',
          link: 'https://www.kapa.ai/'
        },
        {
          icon: 'https://www.notion.so/images/logo-ios.png',
          title: 'Notion AI（笔记）',
          link: 'https://www.notion.so'
        },
        {
          icon: 'https://www.midjourney.com/apple-touch-icon.png',
          title: 'Midjourney（绘画）',
          link: 'https://www.midjourney.com'
        },
        {
          icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
          title: 'Beautiful.ai（PPT）',
          link: 'https://www.beautiful.ai'
        }
      ]
    },
    {
      title: 'email',
      items: [
        {
          title: 'Shortwave',
          "icon": "https://www.shortwave.com/images/logomark.svg",
          desc: "Supercharge your productivity with advanced AI & real-time team collaboration",
          link: 'https://www.shortwave.com/'
        },
        {
          title: 'Superhuman',
          "icon": "https://framerusercontent.com/images/kVLfqsm3HAwPB0Y6h08ymuwuE.jpg",
          desc: "Superhuman is the most productive email app ever made. Collaborate faster and get more done with AI-powered email.",
          link: 'https://superhuman.com/'
        },
      ]
    },
    {
      title: 'Identity Access Management (IAM),  Single-Sign-On (SSO) platform ',
      items: [
        {
          title: 'topiam',
          "icon": "https://topiam.cn/img/full-logo.svg",
          desc: "以开源为核心的IAM/IDaaS 身份管理平台",
          link: 'https://topiam.cn/'
        },
        {
          title: 'JustAuth',
          "icon": "https://www.justauth.cn/logo.png",
          desc: "开箱即用的整合第三方登录的开源组件",
          link: 'https://www.justauth.cn/'
        },
        {
          title: 'casdoor',
          "icon": "https://casdoor.org/img/casdoor.png",
          desc: "A UI-first Identity Access Management (IAM) / Single-Sign-On (SSO) platform with web UI supporting OAuth 2.0, OIDC, SAML, CAS, LDAP, SCIM, WebAuthn, TOTP, MFA, RADIUS, Google Workspace, Active Directory and Kerberos",
          link: 'https://casdoor.org/'
        },
        {
          title: 'casdoor',
          "icon": "https://casdoor.org/img/casdoor.png",
          desc: "Add authentication to applications and secure services with minimum effort.No need to deal with storing users or authenticating users.Keycloak provides user federation, strong authentication, user management, fine-grained authorization, and more.",
          link: 'https://www.keycloak.org/'
        },
        {
          title: 'clerk',
          "icon": "https://casdoor.org/img/casdoor.png",
          desc: "Need more than just a sign-in box? Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.",
          link: 'https://clerk.com/'
        },
        {
          title: 'supabase auth',
          "icon": "https://casdoor.org/img/casdoor.png",
          desc: "A JWT based API for managing users and issuing JWT tokens",
          link: 'https://github.com/supabase/auth'
        },
        {
          title: 'gotrue',
          "icon": "https://casdoor.org/img/casdoor.png",
          desc: "An SWT based API for managing users and issuing SWT tokens.",
          link: 'https://github.com/netlify/gotrue'
        },
      ]
    },

  ]
