<template>

  <div class="toast" v-show="toastShow">
    {{toastText}}
  </div>

</template>

<style></style>

<script>

    export default {
      data() {
      return {
        toastShow: false,
        toastText: ''
      }
    },
    methods: {
      toast (str) {
        let v = this
        v.toastText = str
        v.toastShow = true
        setTimeout(function(){
          v.toastShow = false
        }, 1500)
      }
    }
    }

</script>
