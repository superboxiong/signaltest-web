<head>
  <title>密码重置</title>
  <meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="format-detection" content="telephone=no">
  <link rel="stylesheet" type="text/css" href="../../style/User.css">
</head>
<template>
  <div class="content">
    <div class="top-div">
      <div class="top-img">
        <img src="../../assets/top.png" width="27%" height="30px" align="left" @click="returnClick"/>
      </div>
      <div class="top-info">注册</div>
    </div>
    <div class="register-div">
      <input v-model="userName" class="input-css" type="text" placeholder="手机号码"/>
    </div>
    <div class="register-div">
      <div class="inputCode">
        <input v-model="captcha" class="imgCode-css" type="text" placeholder="验证码" />
      </div>
      <div class="imgCode">
        <img  @click="resetCode" width="100%" height="40px" alt="点我获验证码" src="../../assets/imgCode.png" id="imageId"/>
      </div>
    </div>
    <div class="register-div">
      <div>
        <input class="inputPassword" type="text" v-if="pwdType" v-model="password" />
        <input class="inputPassword" type="password" placeholder="重置密码" v-model="password" v-else />
      </div>
      <div class="imgSee">
        <img  :src="seen ? seenImg : unseenImg"  @click="changeType()" v-on:mouseover="hoverEye" v-on:mouseout="outEye" width="100%" height="37px" />
      </div>
    </div>

    <div class="button" align="center" @click="reset">确认重置</div>
  </div>

</template>

<style scoped>
  @import "../../style/User.css";
</style>

<script>
  let phone = /^1[0-9]{10}$/  //手机号码正则
  let passwordRes=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/  //密码正则表达式
  export default {
    data() {
      return {
        userName: '',
        password:'',
        captcha:'',
        seen: "",
        unseenImg: require("../../assets/see.png"),   //看不见密码时小眼睛的显示图片地址
        seenImg: require("../../assets/see.png"),   //看得见密码时小眼睛的显示图片地址
        pwdType: false   //此时文本框隐藏，显示密码框
      }
    },
    methods:{
      resetCode:function(){

        if(this.userName=='' || this.userName.length>11 || !phone.test(this.userName)){
          this.$toast({text: '手机号码不正确'})
          return false
          // document.getElementById("imageId").src='../../assets/imgCode.png'
        }else{
          var num=Math.ceil(Math.random()*10);
          // document.getElementById("imageId").src='http://192.168.0.103:9099/signaltest/user/sendImgCode?phoneNumber='+this.userName+'?'+num
          document.getElementById("imageId").src='http://192.168.1.111:9099/signaltest/user/sendImgCode?phoneNumber='+this.userName+'?'+num
        }

      },
      reset:function () {
        if(this.userName=='' || this.userName.length>11 || !phone.test(this.userName)){
          this.$toast({text: '手机号码不正确'})
          return false
        }
        if(this.password=='' || !passwordRes.test(this.password)){
          this.$toast({text:'密码不符合格式'})
          return false
        }
        if(this.captcha=='' || this.captcha>5){
          this.$toast({text:'验证码不符合格式'})
          return false
        }
        var param={"userName": this.userName,"password": this.password,"captcha":this.captcha}
        //发送密码重置请求
        this.$axios({
          method:'post',
          url: '/signaltest/user/userForgetPwd',
          header: {'Content-Type': 'application/json'},
          data: JSON.stringify(param)
        }).then((response)=> {
          this.$toast({text:response.data.msg})
            // alert(response.data.msg)
        }).catch((error)=> {
          this.$toast({text:error.response.data.message})
        })
      },
      changeType: function() {
        this.seen = !this.seen;   //小眼睛的变化
        this.pwdType = !this.pwdType;   //跟着小眼睛变化，密码框隐藏，显示文本框 内容就显示了
      },
      hoverEye: function(event) {
        this.seen = !this.seen;
      },
      outEye: function(event) {
        this.seen = !this.seen;
      }
    }
  }

</script>
