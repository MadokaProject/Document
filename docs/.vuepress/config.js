module.exports = {
    title: 'Madoka',
    description: '一个基于 Graia 和 Mirai 的快速、可配置、可自定义插件的 QQ 机器人',
    dest: './dist',
    port: '7777',
    head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '使用文档',
                link: '/doc/',
            },
            {
                text: '开发者文档',
                items: [
                    { text: '插件开发文档', link: '/developer/doc/' },
                    { text: 'API列表', link: '/developer/api/' },
                    { text: '其他语言SDK', link: '/developer/sdk/' },
                ],
            },
            {
                text: '配置项',
                link: '/settings/',
            },
            {
                text: '更新日志',
                link: '/release/',
            },
            {
                text: '加入QQ群',
                link: '//',
            },
            {
                text: 'Github',
                link: 'https://github.com/MadokaProject/Madoka',
            },
        ],
        sidebar: {},
        sidebarDepth: 2,
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: '有新的内容.',
                buttonText: '更新',
            },
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
    },
};
