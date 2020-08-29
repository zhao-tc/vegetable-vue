<template>
    <div class="login">
        <div style="display: flex">
            <div class="img">
                <img src="../assets/img/404-gif-.gif">
            </div>
            <section class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-md-center h-100">
                        <div class="card-wrapper">
                            <div class="brand">
                            </div>
                            <div class="card" style="width: 300px">
                                <div class="card-body">
                                    <h4 class="card-title">Login</h4>
                                    <form class="my-login-validation" novalidate="">
                                        <div class="form-group">
                                            <label for="name">Your Account</label>
                                            <input id="name" type="name" class="form-control" name="name"
                                                   required autofocus v-model=from.name>
                                        </div>

                                        <div class="form-group">
                                            <label for="password">Password
                                            </label>
                                            <input id="password" type="password" class="form-control" name="password"
                                                   required data-eye v-model=from.passwd>
                                        </div>

                                        <div class="form-group">
                                            <div class="custom-checkbox custom-control">
                                                <div> Go shopping</div>
                                            </div>
                                        </div>

                                        <div class="form-group m-0">
                                            <button class="btn btn-primary btn-block" type="button" @click="submitFrom">
                                                Login
                                            </button>
                                        </div>
                                        <div class="mt-4 text-center">
                                            你还没有账号吗?
                                            <router-link to="/register" style="color: #409EFF">
                                                注册
                                            </router-link>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="footer">
            Copyright &copy; 2020 &mdash; Your Company
        </div>
    </div>
</template>

<script>
    import "../assets/js/my-login.js";
    // import axios from "axios";
    import cookie from 'js-cookie'

    export default {
        name: "Login",
        data() {
            return {
                from: {
                    name: '',
                    passwd: '',
                }
            }
        },
        mounted: function () {

            let ticket = cookie.get("ticket");
            if(null != ticket && ticket !== ''){
                this.$router.push("/home")
            }
        },
        methods: {
            submitFrom: function () {
                if (this.from.name == '' || this.from.passwd == '') {
                    this.open("请输入正确的密码或者账户")
                } else {
                    this.$axios.post("/client/login",this.from
                    ).then((response)=>{
                        if (response.data.content.resultCode === '1') {
                                        this.open("密码或者账户错误")
                                    } else {
                                        cookie.set("ticket", response.data.content.token,1/12)
                                        this.$router.push("/home")
                                    }
                    }).catch(error => {
                        console.log(error);
                        alert('网络错误，不能访问');
                    })

                }
            },
            open(val) {
                this.$message.error(val);
            },
        }
    }
</script>

<style scoped>
    @import "../assets/css/my-login.css";

    .img {
        margin-left: 300px;
        margin-top: 100px;
    }

    .card {
        margin-right: 900px;
        margin-top: 200px;
    }
</style>