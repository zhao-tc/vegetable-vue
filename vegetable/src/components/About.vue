<template>
    <div class="about">
        <div class="mainTable" @click="modal = false">
            <section class="sub-header shop-layout-1">
                <img class="rellax bg-overlay" src="../assets/images/sub-header/01.jpg" alt="">
                <div class="overlay-call-to-action"></div>
                <h3 class="heading-style-3">Shop</h3>
            </section>
            <div class="woocommerce-top-control wrapper">
                <section class="boxed-xs">
                    <div class="container">
                        <div class="row">
                            <div class="woocommerce-top-control">
                                <p class="woocommerce-result-count" style="margin-left: 171px">
                                    <img src="../assets/img/icons/理智购物.gif" style="width: 119px;">
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="box-sm">
                <div class="container">
                    <div class="row main">
                        <div class="row product-grid-equal-height-wrapper product-equal-height-4-columns flex multi-row">
                            <figure class="item" v-for="shop in shopList " v-bind:key="shop.id">
                                <div class="product product-style-1">
                                    <div class="img-wrapper">
                                        <a href="javascript:void(0);" @click.stop="openModal(shop)">
                                            <img class="img-responsive" :src=shop.src
                                                 alt="product thumbnail" style="height: 205.79px;"/>
                                        </a>
                                        <div class="product-control-wrapper bottom-right">
                                            <div class="wrapper-control-item">
                                                <a class="js-quick-view" href="javascript:void(0);" type="button" data-toggle="modal"
                                                   @click.stop="openModal(shop)"
                                                   data-target="#quick-view-product">
                                                    <i class="el-icon-view"></i>
                                                </a>
                                            </div>
                                            <div class="wrapper-control-item item-wish-list">
                                                <a class="js-wish-list js-notify-add-wish-list"
                                                   href="javascript:void(0);" @click="addWish(shop)">
                                                    <i class="el-icon-star-off"></i>
                                                </a>
                                            </div>
                                            <div class="wrapper-control-item item-add-cart js-action-add-cart">
                                                <a class="animate-icon-cart" href="javascript:void(0);"
                                                   @click="addCart(shop)">
                                                    <i class="el-icon-s-goods"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <figcaption class="desc text-center">
                                        <h3>
                                            <a class="product-name" href="#">{{shop.name}}</a>
                                        </h3>
                                        <span class="price">${{shop.price}}</span>
                                    </figcaption>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <div class="block" >
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5,10,15,20,30]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div>
        </div>
        <Test v-bind:shop="shop" @closePage="closePage"  @addCartOrWish="addCartOrWish" v-show="modal"> </Test>
    </div>
</template>
<script>
    import Test from "./commens/Test";
    export default {
        name: "About",
        data() {
            return {
                modal: false,
                shopList: [],
                name:'',
                flg: '',
                currentPage: 1,
                total:0,
                pageSize:0,
                shop:{}
            }
        },
        created() {
            this.name = this.$route.query.name;
            this.flg = this.$route.query.flg;
            this.init(0,0)
        },
        watch: {
            getInputChange: function () {
                this.name = this.$store.getters.getIput;
                if (null !==  this.name) {
                    this.init();
                    this.$store.commit('SetInput',null)
                }
            }
            },
        computed:{
            getInputChange: function () {
                return this.$store.getters.getIput;
            }
        },
        methods: {
            init: function (pageSize , pageNum) {
                this.$axios.post("/client/showShipList", {
                        pageSize: pageSize,
                        pageNum: pageNum,
                        name: this.name,
                        flg: this.flg
                    }
                ).then((response)=>{
                            this.shopList = response.data.content.pageInfo.list;
                            this.total = response.data.content.pageInfo.total;
                            this.currentPage = response.data.content.pageInfo.pageNum;
                            this.pageSize = response.data.content.pageInfo.pageSize;
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })



            },
            handleCurrentChange: function(pageNum){
                this.init(this.pageSize,pageNum);

            },
            handleSizeChange: function(pageSize){
                this.init(pageSize,this.currentPage);
            },
            closePage: function (data) {
                this.modal = data;
            },
            openModal: function (obj) {
                this.modal = true;
                this.shop = obj;
            },
            addCartOrWish: function (data) {
                this.open(data)

            },
            // eslint-disable-next-line no-unused-vars
            addCart: function (value) {
                this.$axios.post("/client/addToCart", {
                        shopList : value,
                        Num : 1
                    }
                ).then(()=>{
                            this.open("添加购物车成功");
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            // eslint-disable-next-line no-unused-vars
            addWish: function (value) {
                this.$axios.post("/client/addToWish", {
                    shopList : value,
                    }
                ).then(()=>{
                    this.open("添加心愿表成功");
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            // eslint-disable-next-line no-unused-vars
            open: function (value) {
                this.$notify({
                    title: '成功',
                    message: value,
                    type: 'success'
                });
            },
        },
        components: {
            Test
        }
    }
</script>

<style scoped>
    @import "../assets/revolution/css/settings.css";
    @import "../assets/revolution/css/layers.css";
    @import "../assets/revolution/css/navigation.css";
    @import "../assets/css/main.css";

    #modal {
        position: fixed;
        *position: absolute;
        top: 10%;
        left: 25%;
        margin: -50px 0 0 -50px;
    }

    .mainTable {
        padding: 0;
        margin: 0;
    }

</style>