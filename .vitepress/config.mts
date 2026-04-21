import {defineConfig} from 'vitepress'
import {sidebarAsami} from './config/Asami'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "秋奈的 OC 们",
    description: "这里是秋奈的 OC 们的家",
    srcDir: './src',
    themeConfig: {
        sidebar: {
            '/Asami/': sidebarAsami,
            '/': [
                {text: '首页', link: '/'},
                {text: '浅见 绘理', link: '/Asami/'}
            ]
        }

    },
})
