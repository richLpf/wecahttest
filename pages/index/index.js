Page({
  data: {
    imgUrls: [
      'https://www.fengrongwang.com//upload/image/2016/11/09/2016110916332979609.png',
      'https://www.fengrongwang.com//upload/image/2016/11/09/2016110916411620730.png',
      'https://www.fengrongwang.com//upload/image/2016/07/05/2016070514553099479.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    text:"你好",
    wiper_mode:"scaleToFill",
    mode:"scaleToFill",
    notice_info:"【通知】关于农业银行恢复快捷、绑卡支付",
    gift:"../imgs/gift.png",
    primarySize:"mini",
    plain:"true",
    invest_pic1:"../imgs/investTit.png",
    indexDotted:"../imgs/dotted.png",
    indexList:[
      {
        titleImg:'../imgs/car.png',
        title:'个人车辆质押GRCL00331项目',
        payStyle:'按月付息/到期还本',
        income:'12%',
        totleMoney:'500,000元',
        projectTime:'2个月',
        readyPic:'../imgs/ready.png',
        project1:'../projects/project1'
        },
      {
        titleImg:'../imgs/give.png',
        title:'供应链金融-物资公司电缆采购',
        payStyle:'按月付息/到期还本',
        income:'13.2%',
        totleMoney:'500,000元',
        projectTime:'5个月',
        readyPic:'../imgs/ready.png',
        project1:'../projects/project2'
      }
    ]
  },
  toInfo:function(){
      
  },
  currentImg:function(e){
      console.info(e)
  }
})