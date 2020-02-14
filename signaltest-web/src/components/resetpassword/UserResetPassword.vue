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
    <div class="register-div">
      <input class="input-css" type="text" placeholder="手机号码"/>
    </div>
    <div class="register-div">
      <div class="inputCode">
        <input class="imgCode-css" type="text" placeholder="验证码" />
      </div>
      <div class="imgCode">
        <img  width="100%" height="40px" alt="点我获验证码" src="../../assets/imgCode.png"/>
      </div>
    </div>
    <div class="register-div">
      <input class="input-css" type="password" placeholder="重置密码"/>
    </div>

    <div class="button" align="center">确认重置</div>
  </div>

</template>

<style scoped>
  @import "../../style/User.css";
</style>

<script>

  export default {
    data() {
      return {msg: 'vue'}
    }
  }

</script>
