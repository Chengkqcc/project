let Mock = require("mockjs");
let arrs = [
    {
        "id": 1,
        "username": "芒果捞八哥",
        "label": {
            "fans": "68.5万",
            "mainlabel": "知名综艺博主"
        },
        "brief": "关注@追剧周刊的人也关注了他"
    },
    {
        "id": 2,
        "username": "西安WE_Best",
        "label": {
            "fans": "708.5万",
            "mainlabel": "游戏领域 阅读数飙升"
        },
        "brief": "认证：WE电竞俱乐部王者荣耀分部成员"
    },
    {
        "id": 3,
        "username": "宇宇YuYu_",
        "label": {
            "fans": "443万",
            "mainlabel": "美容美妆博主 互动数飙升"
        },
        "brief": '"知名美妆博主"'
    },
    {
        "id": 4,
        "username": "圈外老鬼",
        "label": {
            "fans": "956.1万",
            "mainlabel": "娱乐综艺视频自媒体"
        },
        "brief": '"圈内又发生了什么，看了就知道"'
    },
    {
        "id": 5,
        "username": "娱乐酷",
        "label": {
            "fans": "342.1万",
            "mainlabel": "娱乐综艺视频自媒体"
        },
        "brief": "关注@测评社的人也关注了他"
    },
    {
        "id": 6,
        "username": "圈内太子",
        "label": {
            "fans": "343万",
            "mainlabel": "娱乐博主"
        },
        "brief": '"娱乐圈未来的继承人"'
    },
    {
        "id": 7,
        "username": "圈内师爷",
        "label": {
            "fans": "729.5万",
            "mainlabel": "电视剧领域 互动数飙升"
        },
        "brief": "娱乐大小事就在圈内师爷"
    },
    {
        "id": 8,
        "username": "猹无此女",
        "label": {
            "fans": "711万",
            "mainlabel": "知名娱乐博主"
        },
        "brief": "关注@文娱大事件的人也关注了她"
    },
    {
        "id": 9,
        "username": "知名冲浪达人",
        "label": {
            "fans": "731.6万",
            "mainlabel": "娱乐综艺视频自媒体"
        },
        "brief": '"八组第一批热搜博主"'
    },
    {
        "id": 10,
        "username": "娱小丫",
        "label": {
            "fans": "885.4万",
            "mainlabel": "娱乐综艺视频自媒体"
        },
        "brief": '"最新鲜最精彩的综艺片段~"'
    },
    {
        "id": 11,
        "username": "禅师QiaoLei",
        "label": {
            "fans": "6.4万",
            "mainlabel": "游戏领域 涨粉飙升"
        },
        "brief": "认证：英雄体育VSPN主持人、解说"
    },
    {
        "id": 12,
        "username": "赤瓜吃到自己家",
        "label": {
            "fans": "131.4万",
            "mainlabel": "知名娱乐博主"
        },
        "brief": '"谢谢你这么好看还关注我"'
    },
    {
        "id": 13,
        "username": "娱乐扒扒姐",
        "label": {
            "fans": "527.8万",
            "mainlabel": "娱乐明星领域 互动数飙升"
        },
        "brief": '"最酷的内容承包圈内一切笑点"'
    },
    {
        "id": 14,
        "username": "星闻情报",
        "label": {
            "fans": "325.6万",
            "mainlabel": "知名娱乐博主"
        },
        "brief": '"紧跟娱乐热点，吃瓜不缺课"'
    },
    {
        "id": 15,
        "username": "广东卫视技惊四座",
        "label": {
            "fans": "331万",
        },
        "brief": "共704条微博"
    },
    {
        "id": 16,
        "username": "嘉行迪丽热巴工作室",
        "label": {
            "fans": "132万",
            "mainlabel": "娱乐明星领域 阅读数飙升"
        },
        "brief": '"昨日发布一条微博，获得31825互动"'
    },
    {
        "id": 17,
        "username": "波兰旅游局",
        "label": {
            "fans": "11.8万",
            "mainlabel": "娱乐出行领域 涨粉飙升"
        },
        "brief": "@梦多 最近转发了她的微博"
    },
    {
        "id": 18,
        "username": "summer77_",
        "label": {
            "fans": "82万",
            "mainlabel": "微博原创视频博主"
        },
        "brief": '"爱吃爱逛爱化妆"'
    },
    {
        "id": 19,
        "username": "爱追星的闪闪",
        "label": {
            "fans": "113.8万",
            "mainlabel": "知名娱乐博主"
        },
        "brief": '"热剧热综精华不容做过"'
    },
    {
        "id": 20,
        "username": "咸鱼老祖动漫谭",
        "label": {
            "fans": "885.4万",
            "mainlabel": "读书作家领域 阅读数飙升"
        },
        "brief": '"脆皮鸭安利 推文求文原耽"'
    }

]

Mock.mock("/api/my", arrs)