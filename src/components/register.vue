<template>
  <div>
    <top></top>
    <div class="form_main">
      <div class="form_style">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="icon" prop="icon">
            <el-input v-model="ruleForm.icon"></el-input>
          </el-form-item>
          <el-form-item label="note" prop="note">
            <el-input v-model="ruleForm.note"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="username" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="nickname" prop="nickName">
            <el-input v-model="ruleForm.nickName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
        email: "",
        icon: "",
        nickName: "",
        note: "",
        password: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 5, max: 15, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ],
        nickName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 13, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        note: [
          { required: true, message: "个人介绍哦", trigger: "blur" },
          { min: 13, max: 50, message: "长度在 13 到 50 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //   alert("submit!");
          this.$axios
            .post("/swagger/admin/register", this.ruleForm)
            .then(res => {
              if (res.data.code == 200) {
                this.$router.push("/login");
              }
            });
        } else {
          console.log("error submit!!");
          // alert('注册失败')
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
  color: black;
}
</style>