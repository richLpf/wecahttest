Page({
    data:{
        line:"../imgs/projectLine1.png",
        backMoney:'../imgs/backMoney.png',
        title:'个人车辆质押质押GRCL0348项目',
        projectStyle:"../imgs/car.png",
        projectNum:"CLZY-HNZZ-LXZ-1611220001",
        projectTime:"2016-11-23 14:00",
        backStyleMoney:'按月付息/到期还本',
        titleFirst:'border-right:1px solid #ccc;',
        titleSecond:'border-bottom:1px solid #ccc;',
        titleThird:'border-bottom:1px solid #ccc;',
        table:1
    },
    projectIntro:function(){
        this.setData({
            table:1,
            titleFirst:'border-right:1px solid #ccc;',
            titleSecond:'border-bottom:1px solid #ccc;',
            titleThird:'border-bottom:1px solid #ccc;'
        })
    },
    projectDetail:function(){
        this.setData({
            table:2,
            titleFirst:'border-right:1px solid #ccc;border-bottom:1px solid #ccc;',
            titleSecond:'border-right:1px solid #ccc;',
            titleThird:'border-bottom:1px solid #ccc;'
        })
    },
    projectList:function(){
            this.setData({
            table:3,
            titleFirst:'border-bottom:1px solid #ccc;',
            titleSecond:'border-bottom:1px solid #ccc;',
            titleThird:'border-left:1px solid #ccc;'
        })
    }
})