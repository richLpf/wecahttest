// pages/user/register.js
//多定义几个code随机取数
Page({
  data:{
    picCode:'../imgs/code.png',
    infoCode:'../imgs/phoneCode.png',
    seeCode:'../imgs/seePass.png',
    agree:'../imgs/agree.png',
    checkUser:false,
    checkPhone:false,
    checkPicCode:false,
    checkinfo:false,
    checkPass:false,
    checkStatus:true
  },
  listernerUser:function(e){
     
      var registerName = e.detail.value;
      console.info(registerName)

  },
  listernerPhone:function(){

  },
  listernerPic:function(){

  },
  listernerInfo:function(){

  },
  listernerPass:function(){

  },
  changeInfo:function(){
      this.setData({
        infoCode:'../imgs/send.png'
      })
  },
  lookPass:function(){

  },
  changePic:function(){
      this.setData({
        picCode:'../imgs/code2.png'
      })
  },
  toRegister:function(){

  },
  status:function(){
    if(this.data.checkStatus){
        this.setData({
          agree:'../imgs/disagree.png',
          checkStatus:false
       })
    }else{
        this.setData({
          agree:'../imgs/agree.png',
          checkStatus:true
       })
    }
  }
})