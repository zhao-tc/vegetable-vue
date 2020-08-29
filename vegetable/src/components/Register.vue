<template>
    <div class="register">
        <div style="display: flex">
            <div class="img">
                <img src="../assets/img/signin-image.jpg">
            </div>
            <section class="h-100">
                <div class="container h-100">
                    <div class="row justify-content-md-center h-100">
                        <div class="card-wrapper">
                            <div class="brand">
                            </div>
                            <div class="card" style="width: 300px;margin-left: 50px;">
                                <div class="card-body">
                                    <h4 class="card-title">欢迎加入我们</h4>
                                    <span style="font-weight:lighter; font-size: 1px;color: lightgrey">----------------------------------------------------------------------------------</span>
                                    <form class="my-login-validation" novalidate="">
                                        <div class="form-group">
                                            <input id="name" type="name" class="form-control" name="name"
                                                   required autofocus v-model=from.username placeholder="请输入用户名">
                                        </div>
                                        <div class="form-group">
                                            <input id="phone" type="phone" class="form-control" name="phone"
                                                   v-model="from.phone" placeholder="常用电话">
                                        </div>
                                        <div class="form-group">
                                            <input id="password" type="password" class="form-control" name="password"
                                                   required  v-model=from.password placeholder="密码">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password"
                                                   required  v-model=from.passwd2 placeholder="确认密码">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="adress"
                                                   required data-eye v-model=from.adress placeholder="常用地址">
                                        </div>
                                        <div class="form-group">
                                            <el-radio-group v-model="from.sex">
                                                    <el-radio  :label="1">男</el-radio>
                                                    <el-radio  :label="0">女</el-radio>
                                            </el-radio-group>

                                        </div>

                                        <div class="form-group m-0">
                                            <button class="btn btn-primary btn-block" type="button" @click.stop="submitFrom">
                                                提交
                                            </button>
                                        </div>
                                        <div class="mt-4 text-center">
                                            你已经有账户?
                                            <router-link to="/" style="color: #409EFF">
                                                登录
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

    export default {
        name: "Register",
        data() {
            return {
                from: {
                    username: '',
                    password: '',
                    passwd2: '',
                    adress: '',
                    phone: '',
                    sex:''
                }
            }
        },
        methods: {
            submitFrom: function () {
                if (this.from.username === '' || this.from.password === '' || this.from.phone === '' || this.from.passwd2 === '' || this.from.adress === ''||this.from.sex === '') {
                    this.open("请把表完")
                } else if (this.from.password !== this.from.passwd2) {
                    this.open("两次密码不相同")
                } else {
                    this.$axios.post("/client/register",  this.from ).then((response)=>{
                        if (response.data.content.resultCode === '1') {
                            this.open(response.data.content.resultMessage);
                        } else {
                            this.open2("注册成功,去登录吧")
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
            open2(val) {
                this.$message.success(val);
            },
        }
    }
</script>

<style scoped>
    @import "../assets/css/my-login.css";

    .img {
        margin-left: 300px;
        margin-top: 200px;
    }

    .card {
        margin-right: 1200px;
        margin-top: 150px;
    }
</style>