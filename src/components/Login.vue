<template>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">登录</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form :model="user">
                        <div class="form-group">
                            <input type="text" class="form-control" id="loginName" placeholder="请输入用户名">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="password" placeholder="请输入密码">
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block" @click="login">登录</button>
                        <div class="row">
                            <div class="col px-md-5">
                                <div class="text-left">
                                    <a href="#" class="">忘记密码?</a>
                                </div>
                            </div>
                            <div class="col px-md-5">
                                <div class="text-right">
                                    <a href="#" class="">注册</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    login: function() {
      let that = this;
      console.log("In Login Method");
        that.$store.commit("saveToken", "");
          this.$api.get(
            "Login/Token",
            { name: that.user.loginName, pass: that.user.password },
            r => {
              if (r.success) {
                console.log("Login Success");
                var token = r.token;
                that.$store.commit("saveToken", token);
                console.log(that.$store.state.token);
                console.log(that.$route.query.redirect);
                this.$emit("loginStatus", true);
                $("#loginModal").hide();
                //this.$router.replace(that.$route.query.redirect)//? that.$route.query.redirect:"http://localhost:6688/");
              } else {
                console.log("Login Failed");
                this.$message({
                  type: "error",
                  message: "用户名或密码错误",
                  showClose: true
                });
              }
            }
          );
        },
  },
  data() {
    return {
        isLogin:false,
      user: {
          loginName:"admins",
          password:"1",
      },
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
    created() {
      var that=this;
        if (that.$store.state.token&&that.$store.state.token.length>=128){
            this.isLogin=true;
        }
    }
};
</script>