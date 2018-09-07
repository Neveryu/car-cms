<template>
  <el-container class="login-container">
    <el-card class="animated flipInX">
      <div slot="header" class="card-head">
        <img src="/static/img/login-logo.png" alt="">
        <h2 class="login-title">停车支付后台管理系统</h2>
      </div>
      <el-form :rules="rules" :model="loginForm" ref="loginForm" label-width="60px">
        <el-form-item label="邮箱" prop="email" style="position:relative">
          <el-input type="text" v-model="loginForm.email" @keyup.enter.native="goToPwdInput"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" @keyup.enter.native="onLogin" ref="pwd"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">登录</el-button>
          <p class="forgot"><a href="">忘记密码？</a></p>
        </el-form-item>
      </el-form>
    </el-card>
  </el-container>
</template>
<script>
// import { isValidUsername } from '@/utils/validate'
// import { saveToLocal, loadFromLocal } from '@/common/local-storage'
// import { mapActions } from 'vuex'
import { login } from '@/api/login'
/* eslint-disable*/
export default {
  data() {
    // username 验证
    const validateAccount = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确的邮箱'))
      } else {
        callback()
      }
    }
    // pwd 验证
    const validatePwd = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: '',
        pwd: ''
      },
      loading: false,
      rules: {
        email: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateAccount },
          { required: true, trigger: 'change', validator: validateAccount }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validatePwd },
          { required: true, trigger: 'change', validator: validatePwd }
        ]    
      }
    }
  },
  methods: {
    goToPwdInput() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
    },
    onLogin() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].blur()
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          login(this.loginForm).then(resp => {
            if(resp.code === 0) {
              this.$router.push({ path: '/' })
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus">
  $dark_gray: #889aa4
  .login-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #666
    background #666 url('/static/img/full-screen-image.jpg') no-repeat
    background-position center
    background-size cover
    .el-card {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -220px 0 0 -200px;
      width: 450px;
      height: 430px;
      background: #fff;
      .card-head {
        text-align center
      }
      .login-title {
        margin: 0;
        text-align: center;
      }
      .el-input /deep/ .el-input__inner {
        // text-indent: 12px;
      }
      .el-button--primary {
        width: 100%;
      }
      .forgot {
        padding-top 15px
        text-align center
      }
    }
  }
</style>