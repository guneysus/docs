const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'side projects',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/docs/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/guneysus/docs',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      ,{
        link: '/underscore-net/',
        text: 'underscore.net'
      }        
      ,{
        link: '/iter-net/',
        text: 'iter.net'
      }
      ,{
        link: '/fn-net/',
        text: 'fn.net'
      }  
      ,{
        link: '/std-net/',
        text: 'std.net'
      } 
      ,{
        link: '/web-net/',
        text: 'web.net'
      }                
    ],
    sidebar: 'auto'
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
