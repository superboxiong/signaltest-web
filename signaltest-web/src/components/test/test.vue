<!--<template>-->
<!--<div style="border-color: #37a3b9">-->
  <!--<div id="trigger4" style="width: 100px;height: 100px">ssssss</div> &lt;!&ndash;页面中别漏了这个trigger&ndash;&gt;-->

<!--</div>-->


<!--</template>-->

<!--<style></style>-->

<!--<script>-->
  <!--import MobileSelect from 'mobile-select'-->
  <!--export default {-->
    <!--mounted() {-->
      <!--var mobileSelect4 = new MobileSelect({-->
        <!--trigger: "#trigger4",-->
        <!--title: "区域类型",-->
        <!--wheels: [-->
          <!--{data: ["商业楼宇","学校校区","住宅小区","酒店宾馆","事业单位"]}-->
        <!--],-->
        <!--callback:function(indexArr, data){-->
          <!--console.log(data);-->
        <!--}-->
      <!--});-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--//////////////////////////////////////////////////////////////////////////////////////////////-->
<!--<template>-->
  <!--<div class="hello">-->
    <!--<button @click="toggleModal">打开Modal对话框</button>-->
    <!--<Modal v-show="showModal" v-on:closeme="closeme"></Modal>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import Modal from './Modal';-->
  <!--export default {-->
    <!--name: 'HelloWorld',-->
    <!--data () {-->
      <!--return {-->
        <!--showModal:true-->
      <!--}-->
    <!--},-->
    <!--components:{-->
      <!--Modal-->
    <!--},-->
    <!--methods:{-->
      <!--toggleModal:function(){-->
        <!--this.showModal = !this.showModal;-->
      <!--},-->
      <!--closeme:function(){-->
        <!--this.showModal = !this.showModal;-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
  <!--h1, h2 {-->
    <!--font-weight: normal;-->
  <!--}-->
  <!--ul {-->
    <!--list-style-type: none;-->
    <!--padding: 0;-->
  <!--}-->
  <!--li {-->
    <!--display: inline-block;-->
    <!--margin: 0 10px;-->
  <!--}-->
  <!--a {-->
    <!--color: #42b983;-->
  <!--}-->
<!--</style>-->

<!--////////////////////////////////////////////////////////////////-->
<template>

  <div @click="test">
     test
    <Pickers v-show="isShow" v-on:closeme="closeme"></Pickers>
  </div>

</template>

<style></style>

<script>
  import Pickers from './pickersTest'
  export default {
    components:{
      Pickers
    },
    data() {
      return {
        isShow:false
      }
    },
    methods:{
      test:function () {
        alert("cccccc")
        this.isShow=!this.isShow
        console.log(this.isShow)
      },
      closeme:function () {
        this.isShow=!this.isShow
        console.log(this.isShow)
      }
    }
  }

</script>
