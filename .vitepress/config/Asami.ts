export const sidebarAsami = [
    {text: '首页', link: '/'},
    {text: '浅见 绘理', link: '/Asami'},
    {
        text: '故事集',
        collapsed: false,
        items: [
            {
                text: '第一卷 日常的协奏曲',
                items: [
                    {text: '1. 舞萌', link: '/Asami/stories/volume1/1-舞萌'},
                    {text: '2. 开学前夕', link: '/Asami/stories/volume1/2-开学前夕'}
                ]
            }
        ]
    },
    {
        text: '设定集',
        collapsed: true, // 设定集默认折叠，看起来更整洁
        items: [
            {
                text: "角色",
                items: [
                    {text: '浅见 绘理', link: '/Asami/designs/characters/浅见绘理'},
                    {text: '月城 朔夜', link: '/Asami/designs/characters/月城朔夜'},
                ]
            },
            {
                text: "世界观",
                items: [
                    {text: '千岁川理工大学', link: '/Asami/designs/world/千岁川理工大学'},
                ]
            }
        ]
    }
]