import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//  import UserRegister from '@/components/register/UserRegister'
import UserResetPassword from '@/components/resetpassword/UserResetPassword'
// import Test from '@/components/test/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserResetPassword',
      component: UserResetPassword
    }
  ]
})
