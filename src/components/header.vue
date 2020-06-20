<template>
  <div class="h_top">
    <div class="head">
      <div class="head_logo">
        <img src="../assets/1550737570483.png" alt />
      </div>
      <div class="input_center">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <ul class="head_right">
        <li>
          <img src="../assets/shop.png" alt />
          <p>购物车</p>
        </li>
        <li v-show="!isLogin">
          <img src="../assets/denglu.png" alt />
          <router-link to="login">登录</router-link>
        </li>
        <li v-show="isLogin" id="tuichu">
          <div>
            <img :src="userinfo.icon" style="border-radius:50%" alt />
            <p>{{userinfo.username}}</p>
          </div>
          <router-link to="" @click.native="out()">退出</router-link>
        </li>
        <li>
          <img src="../assets/zhuce.png" alt />
          <router-link to="register">注册</router-link>
        </li>
        <li>
          <img src="../assets/header_sign-hash-0459d02c.gif" alt />
          <p>签到</p>
        </li>
        <li>
          <router-link to="fenye">首页</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input3: ""
      // 定义一个isLogin用来保存从状态管理中获取到的值
      // isLogin:false
    };
  },
  // 监听属性（watch监听的是data里面的数据,而computed监听的是state里面的属性）
  computed: {
    userinfo() {
      return this.$store.getters.getUserinfo;
    },
    isLogin() {
      return this.$store.getters.getIslogin;
    }
  },
  methods:{
    out(res){
      var l_user = localStorage.getItem('Authorization')
      if(l_user){
          // 清空localstorage
          localStorage.clear()
          this.$router.push("/login");
      }
    }
  }
};
</script>>
<style lang="scss" scope>
.h_top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 5px 20px -16px red;
  z-index: 1;
  background: #f5f5f5;
}
.head {
  width: 88%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .head_logo {
    width: 160px;
    height: 100px;
    img {
      width: 160px;
      height: 100px;
    }
  }
  .head_right {
    height: 50px;
    // background: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      list-style-type: none;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 65px;
      padding-right: 10px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
      p {
        font-size: 14px;
      }
      a {
        font-size: 14px;
        text-decoration: none;
        color: #000;
      }
    }
  }
}
// 输入框
.input_center {
  width: 41%;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
// 退出
#tuichu {
  width: 100px;
  div {
    width: 50px;
    text-align: center;
    border-radius: 10%;
    box-shadow: 0 0 10px pink inset;
    p {
      width: 50px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
