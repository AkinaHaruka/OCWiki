import {defineConfig} from 'vitepress'
import {sidebarAsami} from '../src/Asami/scripts/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "秋奈的 OC 们",
    description: "这里是秋奈的 OC 们的家",
    srcDir: './src',
    cleanUrls: true,
    themeConfig: {
        sidebar: {
            '/Asami/': sidebarAsami,
            '/': [
                {text: '首页', link: '/'},
                {text: '全部角色', link: '/all'},
                {text: '浅见 绘理', link: '/Asami/'}
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/AkinaHaruka/OCWiki'},
        ],
        nav: [
            {text: 'Project Akina', link: 'https://www.akinachan.com'}
        ],
        search: {
            provider: 'local'
        },
        footer: {
            message: 'Released under the Creative Commons License.',
            copyright: 'Copyright © 2026-present 晴夏秋奈'
        },
        editLink: {
            pattern: 'https://github.com/AkinaHaruka/OCWiki/blob/main/src/:path',
            text: '在 GitHub 查看本页面'
        },
    },
    markdown: {
        math: true
    },
    sitemap: {
        hostname: 'https://oc.akinachan.com'
    }
})
