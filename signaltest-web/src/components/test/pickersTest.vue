
<template>
  <div>
    <vuePickers :data="pickData"
                @cancel="cancel"
                @confirm="confirm"
                :showToolbar="true"
                :maskClick="false"
                :visible.sync="pickerVisible"
    />
  </div>
</template>

<script>
  import vuePickers from 'vue-pickers'
  export default {
    components: {
      vuePickers
    },
    data () {
      let tdata = []
      for (let i = 0; i < 20; i++) {
        tdata.push({
          label: `第${i}行`,
          value: i
        })
      }
      return {
        pickerVisible: true,
        pickData: [ tdata ],
        result: ''
      }
    },
    methods: {
      cancel:function () {
        this.$emit("closeme")
      },
      confirm (res) {
        this.result = JSON.stringify(res)
        console.log("aaaaaaaaaaaaaaa")
        console.log(res[0].value)
        console.log("aaaaaaaaaaaaaaaa")
      }
    },
  }
</script>
