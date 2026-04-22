export const sidebarEri = [
    {text: '首页', link: '/'},
    {text: '全部角色', link: '/all'},
    {
        text: '浅见 绘理', link: '/Eri', items:
            [
                {
                    text: '故事集',
                    items: [
                        {
                            text: '第一卷 日常的协奏曲',
                            collapsed: true,
                            items: [
                                {text: '1. 舞萌', link: '/Eri/stories/volume1/1-舞萌'},
                                //{text: '2. 开学前夕', link: '/Eri/stories/volume1/2-开学前夕'}
                            ]
                        },
                        {
                            text: '日常',
                            link: '/Eri/stories/daily',
                            collapsed: true,
                            items: [
                                {text: '偏见', link: '/Eri/stories/daily/偏见'},
                                {text: 'ADHD', link: '/Eri/stories/daily/ADHD'},
                            ]
                        }
                    ]
                },
                {
                    text: '设定集',
                    link: '/Eri/designs',
                    items: [
                        {
                            text: "角色",
                            collapsed: true,
                            items: [
                                {text: '浅见 绘理', link: '/Eri/designs/characters/浅见绘理'},
                                {text: '月城 朔夜', link: '/Eri/designs/characters/月城朔夜'},
                            ]
                        },
                        {
                            text: "世界观",
                            collapsed: true,
                            items: [
                                {text: '千岁川理工大学', link: '/Eri/designs/world/千岁川理工大学'},
                            ]
                        }
                    ]
                }]
    }

]