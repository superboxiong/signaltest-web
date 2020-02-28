<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "test",

        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    age: [
                        {validator: checkAge, trigger: 'blur'}
                    ]
                }
            };
        },
        // methods: {
        //     submitForm(formName) {
        //         this.$refs[formName].validate((valid) => {
        //             if (valid) {
        //                 alert('submit!');
        //             } else {
        //                 console.log('error submit!!');
        //                 return false;
        //             }
        //         });
        //     },
        //     resetForm(formName) {
        //         this.$refs[formName].resetFields();
        //     }
        // }
    }
</script>

<style scoped>

</style>



========================================================================
<template>

  <div >

    <div class="out_label">
      <img class="in_label login_logo" src="../../assets/logo.png">
    </div>
    <div class="login_form">
      <div>
        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm"  class="demo-ruleForm">

          <el-form-item class="login_icon"  prop="phone">
            <el-input type="text" prefix-icon="el-input__icon el-icon-user"  class="login_user  "
                      placeholder="请输入账号" onfocus="this.placeholder=''"  v-model="ruleForm.phone" autocomplete="off"/>
          </el-form-item>

          <el-form-item class="login_icon" prop="password">
            <el-input :type="passw" prefix-icon="el-input__icon el-icon-lock" class="login_password "  placeholder="请输入密码"
                      onfocus="this.placeholder=''"  prop="pass" v-model="ruleForm.password"  autocomplete="off">
              <i slot="suffix" :class="icon" @click="showPass"></i>
            </el-input>
          </el-form-item>

        </el-form>
      </div>
      <div class="option_password">
        <input type="checkbox" class="remember_password" style="float: left" v-model="remember">
        <span style="float: left" >记住密码</span>
        <span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
      <br>
      <div>
        <el-button class="login_btn" type="primary" round @click="login('ruleForm')">登录</el-button>
        <!--        <el-button type="text" @click="ope">点击打开 Message Box</el-button>-->
      </div>
      <br>
      <div>
        <el-button class="register_btn" type="sumbit" round>注册</el-button>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "UserLogin",
        data() {

            var validatePhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('账号不能为空'));
                } else {
                    callback();
                }
            };
            var validatePassword = (rule, value, callback) => {
                if (this.remember==true){
                    callback();
                }else {
                    if (value === '') {
                        callback(new Error('密码不能为空'));
                    } else {
                        callback();
                    }
                }

            };
            return {
                remember: false,
                //用于改变Input类型
                passw:"password",
                //用于更换Input中的图标   status-icon
                icon:"el-input__icon el-icon-view",

                ruleForm: {
                    phone: '',
                    password: ''
                },
                rules: {
                    phone: [
                        {validator: validatePhone, trigger: 'blur'},
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'},
                    ],

                }
            }
        },
        methods: {
            showPass(){
                //点击图标是密码隐藏或显示
                if( this.passw=="text"){
                    this.passw="password";
                    //更换图标
                    this.icon="el-input__icon el-icon-view";
                }else {
                    this.passw="text";
                    this.icon="el-input__icon el-icon-loading";
                };
            },
            login(formName) {

                let _this=this
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.$axios.get('http://localhost:9099/signaltest/user/userLogin',{params: {phone: this.ruleForm.phone,password:this.ruleForm.password,flag:this.remember,},credentials: true})
                            .then(function (res) {
                                console.log(res)
                            }).catch(function (error) {
                            _this.$toast(error.response.data.message)
                            console.log(error.response.data.message)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });

            }
        }
    }


</script>

<style >

  body {
    padding: 0;
    margin:0;
    font-family: "Microsoft YaHei UI Light";
  }


  .out_label {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 220px;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border:1px solid #409eff;
    margin: 0 auto;
    filter: brightness(1.4);
  }
  .in_label {
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
    top:0;
    margin: auto;
    height: 50px;
  }
  .login_logo{
    /*height: 30%;*/
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }
  .login_form {
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
  }

  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #848487, #848487);
    background: -o-linear-gradient(right, #848487, #848487);
    background: -moz-linear-gradient(right,#848487, #848487);
    background: linear-gradient(to right, #848487, #848487);
    filter: brightness(1.4);
  }
  .register_btn{
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #848487, #848487);
    background: -o-linear-gradient(right, #848487, #848487);
    background: -moz-linear-gradient(right, #848487, #848487);
    background: linear-gradient(to right, #848487, #848487);
    filter: brightness(1.4);
  }

</style>

