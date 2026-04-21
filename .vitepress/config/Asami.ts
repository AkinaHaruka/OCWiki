export const sidebarAsami = [
    {text: '首页', link: '/'},
    {text: '全部角色', link: '/all'},
    {
        text: '浅见 绘理', link: '/Asami', items:
            [
                {
                    text: '故事集',
                    items: [
                        {
                            text: '第一卷 日常的协奏曲',
                            collapsed: true,
                            items: [
                                {text: '1. 舞萌', link: '/Asami/stories/volume1/1-舞萌'},
                                {text: '2. 开学前夕', link: '/Asami/stories/volume1/2-开学前夕'}
                            ]
                        }
                    ]
                },
                {
                    text: '设定集',
                    items: [
                        {
                            text: "角色",
                            collapsed: true,
                            items: [
                                {text: '浅见 绘理', link: '/Asami/designs/characters/浅见绘理'},
                                {text: '月城 朔夜', link: '/Asami/designs/characters/月城朔夜'},
                            ]
                        },
                        {
                            text: "世界观",
                            collapsed: true,
                            items: [
                                {text: '千岁川理工大学', link: '/Asami/designs/world/千岁川理工大学'},
                            ]
                        }
                    ]
                }]
    }

]