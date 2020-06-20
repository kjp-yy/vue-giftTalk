<template>
  <div>
    <top></top>
    <div class="form_main">
      <div class="form_style">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item style="text-align:center;font-weight:700;font-size:15px">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="jump()">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
// 引入头部文件
import top from "./header";
export default {
  components: {
    top
  },
  data() {
    return {
      ruleForm: {
        username: "",
        pass: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 注册
    jump() {
      this.$router.push("/register");
    },
    submitForm(formName) {
      let that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          that.$axios.post("/swagger/admin/login", that.ruleForm).then(res => {
            if (res.data.code == 200) {
              // 请求用户信息接口
              let user_value = "Bearer " + res.data.data.token;
              //  给vuex传token
              that.$store.commit("changelogin", user_value);
              that.$axios.get("/swagger/admin/info").then(res => {
                that.$store.commit("usertatus", res.data.data);
              });
              // 跳转到首页
              that.$router.push("/fenye");
            }else{
              alert('用户名或密码错误！')
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>>
<style lang="scss">
.form_main {
  background: url(../assets/time.jpg) no-repeat;
  background-size: 100% 100%;
}
.form_style {
  width: 45%;
  margin: 10px auto;
  padding: 130px 0;
}
</style>