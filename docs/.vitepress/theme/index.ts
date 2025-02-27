import DefaultTheme from 'vitepress/theme'
import { type Theme } from 'vitepress'
import { h } from 'vue'
import { useData } from 'vitepress'

import { initSvgSymbols } from "./utils/client-svg-register"

// import './styles/settings/_colors.scss'
import './styles/color.css'
import './styles/custom.css'
import './styles/component-vars.css'
import './styles/overwrite.css'
import './styles/home.css'
import './styles/fonts.css'
import 'virtual:group-icons.css'



import { VIcon } from './components/VIcon'
import { VChip } from './components/VChip'
import Announcement from './components/Announcement.vue'
import HomeUnderline from './components/home/HomeUnderline.vue'
import HomeFooter from './components/home/HomeFooter.vue'
import { data as FooterData } from './data/footer'
import EmbedXPost from './components/EmbedXPost.vue'






export default {
  ...DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    const { frontmatter } = useData()

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
      'home-hero-info-before': () => h(Announcement),
      'home-hero-image': () => h(VIcon, {
        slug: 'dragon-logo',
        class: 'VPImage image-src'
      }),
      'layout-bottom': () => h(HomeFooter, { data: FooterData })
    })
  },
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      // const plugin = await import('plugin-that-access-window-on-import')
      // app.use(plugin.default)
      initSvgSymbols()
    }

    app.component('VIcon', VIcon)
    app.component('VChip', VChip)
    app.component('HomeUnderline', HomeUnderline)
    app.component('EmbedXPost', EmbedXPost)
  }
} satisfies Theme


if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}
