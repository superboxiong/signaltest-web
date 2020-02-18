<template>

    <div>
      <input type="text" v-if="pwdType" v-model="eyeTxt" />
      <input type="password" placeholder="输入新密码" v-model="eyeTxt" v-else />
      <img :src="seen ? seenImg : unseenImg" @click="changeType()" v-on:mouseover="hoverEye" v-on:mouseout="outEye" class="icon-eye" />
    </div>

</template>

<style></style>

<script>

    export default {
      data() {
        return {
          seen: "",
          unseenImg: require("../../assets/see.png"),   //看不见密码时小眼睛的显示图片地址
          seenImg: require("../../assets/see.png"),   //看得见密码时小眼睛的显示图片地址
          eyeTxt: "",
          pwdType: false   //此时文本框隐藏，显示密码框
        };
      },
      methods: {
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
    };

</script>
