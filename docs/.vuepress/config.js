module.exports = {
    title: 'Madoka-Docs',
    description: 'Madoka一个可自定义的，基于Graia和Mirai的集群管、功能、娱乐为一体的QQ插件式机器人',
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
                link: '/use-docs/',
            },
            {
                text: '开发者文档',
                items: [
                    { text: '插件开发文档', link: '/developer/plugin-docs/' },
                    { text: 'API列表', link: '/developer/api/' },
                    { text: '其他语言SDK', link: '/developer/sdk/' },
                ],
            },
            {
                text: '配置项',
                link: '/config/',
            },
            {
                text: '更新日志',
                link: '/update-log/',
            },
            {
                text: '加入QQ群',
                link: '//',
            },
            {
                text: 'Github',
                link: 'https://github.com/MadokaProject',
            },
        ],
        sidebar: {},
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
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
