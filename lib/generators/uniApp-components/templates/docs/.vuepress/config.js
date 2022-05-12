const { description } = require('../../package');

module.exports = (options, context) => ({
    title: '@babe0806/ember',
    description: description,
    base: '/ember/',
    port: '3000',
    dest: './doc-dist',
    themeConfig: {
        repo: '/',
        repoLabel: 'GitLab',
        sidebarDepth: 2,
        nav: [{ text: '组件', link: '/components/installation' }],
        sidebar: {
            '/component': [
                '/components/installation',
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: ['/components/multiple-select'],
                },
            ],
        },
        smoothScroll: true, // 启用页面滚动效果
    },
    plugins: ['@vuepress/back-to-top'],
});
