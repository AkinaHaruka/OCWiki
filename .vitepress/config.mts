import {defineConfig} from 'vitepress'
import {sidebarAsami} from '../src/Asami/scripts/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "秋奈的 OC 们",
    description: "这里是秋奈的 OC 们的家",
    srcDir: './src',
    cleanUrls: true,
    lastUpdated: true,
    markdown: {
        math: true
    },
    sitemap: {
        hostname: 'https://oc.akinachan.com'
    },
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
            message: '穿梭于不同的世界线，记录她们的闪光瞬间。',
            copyright: 'Copyright © 2026-present 晴夏秋奈 | <b>All Characters Reserved</b> <br> 文字作品基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> 协议发布'
        },
        editLink: {
            pattern: 'https://github.com/AkinaHaruka/OCWiki/blob/main/src/:path',
            text: '在 GitHub 查看本页面'
        },
    },
})
