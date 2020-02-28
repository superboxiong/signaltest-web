<head>
  <title>用户注册</title>
  <meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="format-detection" content="telephone=no">
  <link rel="stylesheet" type="text/css" href="../../style/User.css">
</head>
<template>
  <!--<div class="content" id="register" >-->
    <!--<div class="top-div">-->
      <!--<div class="top-img">-->
        <!--<img src="../../assets/top.png" width="27%" height="30px" align="left"/>-->
      <!--</div>-->
        <!--<div class="top-info">注册</div>-->
    <!--</div>-->
    <!--<div class="register-div">-->
      <!--<input v-model="userName" class="input-css" type="text" placeholder="手机号码"/>-->
    <!--</div>-->
    <!--<div class="register-div">-->
      <!--<div>-->
        <!--<input class="inputPassword" type="text" v-if="pwdType" v-model="password" />-->
        <!--<input class="inputPassword" type="password" placeholder="设置密码" v-model="password" v-else />-->
      <!--</div>-->
      <!--<div class="imgSee">-->
        <!--<img  :src="seen ? seenImg : unseenImg"  @click="changeType()" v-on:mouseover="hoverEye" v-on:mouseout="outEye" width="100%" height="37px" />-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="register-div">-->
      <!--<div class="inputCode">-->
        <!--<input v-model="captcha" class="imgCode-css" type="text" placeholder="验证码" />-->
      <!--</div>-->
      <!--<div class="imgCode">-->
        <!--<img id="imageId" src="../../assets/imgCode.png" @click="imgCode" width="100%" height="40px" />-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;End密码输入框&ndash;&gt;-->
    <!--<div id="button" class="button" align="center" @click="registerCommit" >立即注册</div>-->
    <!--<div id="button1" class="button" align="center" >已有账号</div>-->
  <!--</div>-->
<!--////////////////////////////////////////////////////////////////////////////-->
  <div class="building-test-page">
    <div class="header">
      <div class="top-img">
        <img src="../../assets/top.png" width="27%" height="30px" align="left"/>
        <div class="top-info">注册</div>
      </div>
    </div>
    <div class="register-div">
    <input v-model="userName" class="input-css" type="text" placeholder="手机号码"/>
    </div>
    <div class="register-div">
    <div>
    <input class="inputPassword" type="text" v-if="pwdType" v-model="password" />
    <input class="inputPassword" type="password" placeholder="设置密码" v-model="password" v-else />
    </div>
    <div class="imgSee">
    <img  :src="seen ? seenImg : unseenImg"  @click="changeType()" v-on:mouseover="hoverEye" v-on:mouseout="outEye" width="100%" height="37px" />
    </div>
    </div>
    <div class="register-div">
    <div class="inputCode">
    <input v-model="captcha" class="imgCode-css" type="text" placeholder="验证码" />
    </div>
    <div class="imgCode">
    <img id="imageId" src="../../assets/imgCode.png" @click="imgCode" width="100%" height="40px" />
    </div>
    </div>
    <!--End密码输入框-->
    <div id="button" class="button" align="center" @click="registerCommit" >立即注册</div>
    <div id="button1" class="button" align="center" >已有账号</div>
  </div>
</template>

<!--<style scoped>-->
  <!--@import "../../style/User.css";-->
<!--</style>-->
<style lang="scss">
  .building-test-page {
    #container {
      width: 100%;
      height: calc(100% - 30px - 25px);
    }
    // 头部样式
    .header {
      transform:translateY(-200%);
      height: 30px;
      background-color: rgba(107, 107, 107, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      color: white;
      position: relative;
      z-index: 162;
      .time-box {
        width: 100px;
        transform:translateX(70%);
      }
      .switch-button-group {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 1px;
        p {
          padding: 0 5px;
          color: rgba(107, 107, 107, 1);
          font-size: 12px;
        }
        p.selected {
          background-color: rgba(107, 107, 107, 1);
          color: white;
        }
      }
    }
    .select-div{
      height: 30px;
      transform:translateY(1%);
      border-bottom:1px solid;
      /*border-top:1px solid;*/
      border-color: #999999;
      line-height: 260%;
      font-size: 13px;
    }

    .road-test-start-test-button {
      width: 100%;
      height: 25px;
      border-radius: 3px;
      background-color: #cdcdcd;
      padding: 0;
      margin: 0;
      font-size: 12px;
      font-weight: 500;
      position: relative;
      z-index: 161;
      transform:translateY(500%)
    }
    .title{
      border-bottom:1px solid;
      border-color: #999999;
    }
    .content{
      /*width: 100%;*/
      /*height: auto;*/
      /*margin-top: 150px;*/
      /*text-align: center;*/
      margin: 0;
      padding: 0;
    }
    p {
      padding: 0 5px;
      color: rgba(107, 107, 107, 1);
      font-size: 12px;
    }
    p.selected {
      background-color: rgba(107, 107, 107, 1);
      color: white;
    }

    .top-div{
      width: 112%;
      height: 67px;
      line-height: 67px;
      margin-top: -20px;
      margin-left: -34px;
      line-height: 40px;
      text-align: left;
      border: 1px solid #dddddd;
      border-radius: 5px;
      color: #ffffff;
      background-color: #37B4CA;
    }
    .top-img{
      width: 36%;
      height: 0;
      margin: -14px;
      margin-top: -12%;
      /*transform:translateY(0%)*/
    }
    /*整体div*/
    .register-div{
      width: 80%;
      height: 40px;
      margin-top: 10px;
      margin-left: 10%;
      line-height: 40px;
      text-align: center;
      border: 1px solid #dddddd;
      border-radius: 5px;
      background-color: #efefef;
    }
    .image{
      width: 10%;
      margin-top: 5px;
      float: left;
      text-align: right;
    }
    /*输入框div*/
    .input-css{
      width: 90%;
      float: left;
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      border:0px;
      color: #333333;
      font-size: 16px;
      background-color: #efefef;

    }
    /*验证码输入框*/
    .imgCode-css{
      width: 100%;
      float: left;
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      border:0px;
      color: #333333;
      font-size: 16px;
      background-color: #efefef;

    }
    /*输入框*/
    .inputCode{
      width: 30%;
      float: left;
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      border:0px;
      color: #333333;
      font-size: 16px;
      background-color: #efefef;
    }
    /*密码输入框样式*/
    .inputPassword{
      width: 60%;
      float: left;
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      border:0px;
      color: #333333;
      font-size: 16px;
      background-color: #efefef;
    }
    /*图片验证码*/
    .imgCode{
      width: 50%;
      float: right;
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      border:0px;
      color: #333333;
      font-size: 16px;
      background-color: #efefef;
    }
    /*图片显示隐藏样式*/
    .imgSee{
      width: 15%;
      float: right;
      margin-left: 5%;
      height: 37px;
      line-height: 37px;
      border:0px;
      color: #333333;
      font-size: 16px;
      background-color: #efefef;
    }
    /*按钮样式*/
    .button{
      height: 40px;
      width: 80%;
      margin-top: 20px;
      margin-left: 10%;
      font-size: 16px;
      font-family: "微软雅黑";
      font-weight: bold;
      line-height: 38px;
      border-radius: 5px;
      /*color: #ffffff;*/
      /*background-color: #37B4CA;*/
      background-color: rgba(107, 107, 107, 1);
    }

    .button:active {
      background-color:#37a3b9;
    }

  }
  /*.mint-cell-text {*/
  /*vertical-align: middle;*/
  /*font-size: 12px;*/
  /*}*/
  /*.select-div{*/
  /*!*background-color: #fff;*!*/
  /*!*box-sizing: border-box;*!*/
  /*!*color: inherit;*!*/
  /*!*min-height: 4.8rem;*!*/
  /*!*display: block;*!*/
  /*!*overflow: hidden;*!*/
  /*!*position: relative;*!*/
  /*!*text-decoration: none;*!*/
  /*}*/
  /*.mint-cell-title{*/
  /*!*font-size: 5px;*!*/
  /*}*/
  .font-css{
    font-size: 12px;
  }
  .top-info{
    width:-1px;
    /*margin-right: 0px;*/
    height: 40px;
    margin-top: -6px;
    line-height: 40px;
  }
</style>
<script>
  let phone = /^1[0-9]{10}$/  //手机号码正则
  let passwordRes=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/  //密码正则表达式
   import axios from "axios";
  import toast from '../../toast/index.js'
   // let param ={""}
   export default {
      name: "register",
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
        registerCommit:function() {
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
          this.$axios({//用户注册请求
            method: 'post',
            url: '/signaltest/user/userRegister',
            headers:{'Content-Type': 'application/json'},
            data: JSON.stringify(param)
          }).then((response)=> {
            this.$toast({text:response.data.msg})
          }).catch((error)=> {
             // console.log(error.response.data)
            this.$toast({text:error.response.data.message})
          })
        },
        imgCode:function () {  //获取图片验证码
          if(this.userName=='' || this.userName.length>11 || !phone.test(this.userName)){
           this.$toast({text: '手机号码不正确'})
            return false
          }

          var phoneNumber={"phoneNumber":this.userName}
          console.log(phoneNumber)
          var num=Math.ceil(Math.random()*10);
          document.getElementById("imageId").src='http://192.168.0.108:9099/signaltest/user/sendImgCode?phoneNumber='+this.userName+'?'+num
          // document.getElementById("imageId").src='http://192.168.0.103:9099/signaltest/user/sendImgCode?phoneNumber='+this.userName+'?'+num
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
