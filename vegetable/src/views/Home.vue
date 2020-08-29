<template>
    <div class="home">
        <div class="header-style-1">
            <div class="container">
                <div class="row">
                    <div class="header-1-inner">
                        <a class="brand-logo animsition-link" href="#">
                            <img class="img-responsive" src="../assets/images/logo.png" alt=""/>
                        </a>
                        <nav>
                            <ul class="menu hidden-xs" style="    margin-left: -250px;">
                                <li>
                                    <router-link to="/home/mainPage">主页</router-link>
                                </li>
                                <li>
                                    <router-link to="/home/about" @click.native="flushCom">商品列表</router-link>
                                </li>

                                <li>
                                    <router-link to="/home/wish">愿望清单</router-link>
                                </li>
                                <li>
                                    <router-link to="/home/shopCart">购物车</router-link>
                                </li>
                                <li>
                                    <router-link to="/home/order">历史订单</router-link>
                                </li>
                                <li>
                                    <el-input v-model="input" placeholder="请输入内容" style="margin-left: 10px;"
                                              @keyup.enter.native="submit"
                                              @blur.native.capture="onChange" v-show="!sourch"></el-input>
                                </li>

                            </ul>
                        </nav>
                        <aside class="right">
                            <div class="widget widget-control-header">
                                <div class="select-custom-wrapper">
                                </div>
                            </div>

                            <div class="widget widget-control-header widget-search-header" style="display: flex">
                                <a class="control btn-open-search-form js-open-search-form-header" href="#"
                                   @click="sourch = !sourch" v-show="sourch">
                                    <img src="../assets/img/icons/search.svg" alt=""
                                         style="width: 20px;margin-top: 5px;    margin-left: -379px;"
                                         title="Bootstrap"/>
                                </a>

                                <el-dropdown>
  <span class="el-dropdown-link">
     <img src="../assets/img/icons/个人中心.png" style="width: 32px"/>
  </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>
                                            <el-link :underline="false" @click="out">退出登录</el-link>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <router-link to="/home/person">用户信息</router-link>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>

                                <div class="form-outer">
                                    <form>
                                        <input placeholder="Search"/>
                                        <button>
                                            <img src="../assets/img/icons/search.svg" alt="" width="32" height="32"
                                                 title="Bootstrap"/>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="widget widget-control-header hidden-lg hidden-md hidden-sm">
                                <a class="navbar-toggle js-offcanvas-has-events" type="button" href="#menu">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <div>
                <router-view></router-view>
            </div>
            <footer class="footer-style-1">
                <div class="container">
                    <div class="row">
                        <div class="footer-style-1-inner">
                            <div class="widget-footer widget-text col-first col-small">
                                <p class="">
                                    “小瓷碗盛了滑滑的老豆腐，被切成细丁的胡萝卜懒懒的趴在上面荡漾，薄薄的手抓饼裹泡满满着汤汁被味蕾抓住，嫩嫩的香菜就在舌尖炸开了花，早上好啊”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copy-right style-1">
                    <div class="container">
                        <div class="row">
                            <div class="copy-right-inner">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import cookie from 'js-cookie'

    export default {
        name: 'Home',
        data() {
            return {
                sourch: true,
                input: ''
            }
        },
        methods: {
            onChange: function () {
                this.sourch = true
            },
            submit: function () {
                if (this.$route.path !== '/home/about') {
                    this.$router.push({
                        path: '/home/about',
                        query: {
                            name: this.input
                        }
                    })
                }
                if (this.$route.path === '/home/about') {
                    this.$store.commit('SetInput', this.input)
                }
                this.sourch = true;
            },
            out: function () {
                cookie.remove("ticket");
                alert("退出成功");
                this.$router.push({
                    path: '/',
                })
            },
            flushCom: function () {
                this.$router.go(0);
            }
        },
        components: {}
    }
</script>

<style scoped>
    @import "../assets/revolution/css/settings.css";
    @import "../assets/revolution/css/layers.css";
    @import "../assets/revolution/css/navigation.css";
    @import "../assets/css/main.css";

    home {
        display: flex
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 150px;
    }
</style>
