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
         
          <el-form-item label="电话" prop="telephone">
            <el-input v-model="ruleForm.telephone"></el-input>
          </el-form-item>
           <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authCode">
            <el-button @click="get_code()">获取验证码</el-button>
            <el-input v-model="ruleForm.authCode" placeholder="请输入验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
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
      code: "",
      ruleForm: {
        username: "",
        password: "",
        telephone: "",
        authCode: ""
      },
      rules: {
          telephone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 1, max: 10, message: "长度为11位数字", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        authCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 6, max: 6, message: "长度为 6 个数字", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 获取验证码
    get_code() {
      this.$axios
        .get("/swag/sso/getAuthCode", {
          params: {
            telephone: this.ruleForm.telephone
          }
        })
        .then(res => {
          // this.ruleForm.authCode=res.data.data
          this.code = res.data.data;
          alert("你的验证码为：" + this.code);
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 使用表单序列化请求数据
            let datalist= new FormData();
            datalist.append('telephone',this.ruleForm.telephone)
            datalist.append('password',this.ruleForm.password)
            datalist.append('authCode',this.ruleForm.authCode)
            this.$axios
              .post("/swag/sso/updatePassword", datalist)
              .then(res => {
                  console.log(res)
                if (res.data.code == 200) {
                    console.log("更新成功")
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