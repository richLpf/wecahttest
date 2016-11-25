// pages/user/login.js
Page({
  data:{
    checkUser:false,
    checkPass:false,
    userRule:'',
    passRule:''
  },
  listernerUser:function(e){
    var valueUser = e.detail.value;
    var userLength = valueUser.length;
    if(userLength<8 && userLength!=0){
        this.setData({
          userRule:'用户名不正确',
          checkUser:false
        })
    }else{
        this.setData({
          userRule:'',
          checkUser:true,
          userName:valueUser,
        })
    }
  },
  listernerPass:function(e){
    var valuePass = e.detail.value;
    var passLength = valuePass.length;
     if(passLength<6){
        this.setData({
          passRule:'密码不正确',
          checkPass:false
        })
    }else{
         this.setData({
          passRule:'',
          checkPass:true,
          password:valuePass
        })
    }
  },
  goLogin:function(){
    if(this.data.checkUser==true && this.data.checkPass==true && this.data.userName!=undefined){
        console.info("账号",this.data.userName)
        console.info("密码",this.data.password)
    }if(this.data.userName==undefined){
         this.setData({
          userRule:'用户名不正确'
        })
    }
  }
})
//小程序的表单验证验证
//小程序的传参