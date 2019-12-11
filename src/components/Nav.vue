<template>
    <div id="nav" style="padding:0px;">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #78af7a;">
            <a class="navbar-brand" href="#">Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">首页 <span class="sr-only">(current)</span></a>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <div class="input-group">
                        <input class="form-control form-outline-secondary" type="search" placeholder="Search" aria-label="Search">
                        <span class="input-group-btn">
                            <button type="button" class="btn">
                                <i class="icon ion-md-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
                <div v-if="isLogin">
                    <a class="nav-link" href="javascript:void(0);" v-on:click="loginOut()">注销</a>
                </div>
                <div v-else>
                    <a class="nav-link" href="javascript:void(0);" data-toggle="modal" data-target="#loginModal">登录</a>
                </div>
                <Login v-on:loginStatus="onLoginStatus"/>
            </div>
        </nav>
    </div>
</template>

<script>
import Login from "@/components/Login.vue"
import $ from 'jquery'

export default {
    data() {
        return {
            isLogin: false
        }
    },
    components: {
        Login
    },
    methods: {
        loginOut(){
          this.isLogin=false;
          this.$store.commit("saveToken", "");
          alert("已注销");
        },
        onLoginStatus(status){
            this.isLogin = status;
            if (status) {
                $('#loginModal').modal('hide')
            }
        }
    }
}
</script>