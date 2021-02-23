module.exports = {
    title: '35Party Wiki',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '入门',
                items: [
                    { text: '快速入门', link: '/guide/' },
                    { text: '加入服务器', items: [{ text: '白名单申请', link: '/guide/firstjoin/whitelist.html' }] },
                    { text: 'Group2', items: [{ text: 'Chinese', link: '/language/chinese/' },] }
                ]
            },
            { text: 'Github', link: 'https://github.com/35party/wiki/' },
        ],
        sidebar: [
            '/',
            '/guide',
            '/guide/firstjoin/whitelist',
        ],
        sidebar: 'auto',
        displayAllHeaders: true
    }
}