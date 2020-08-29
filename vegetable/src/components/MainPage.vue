<template>
    <div class="mainPage">
        <div @click="modal = false">
        <div>
            <section class="sub-header shop-layout-1">
                <img class="rev-slidebg" src="../assets/images/slider/1.jpg" alt="demo"
                     data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat"
                     data-bgparallax="10" style="margin-left: -150px">
                <div class="overlay-call-to-action"></div>
                <h3 class="heading-style-3">Shop</h3>
            </section>
        </div>
        <section class="boxed-sm">
            <div class="container">
                <div class="row">
                    <div class="product-category-grid-style-1">
                        <div class="row">
                            <div class="col-sm-4">
                                <a href="#" @click="sourchByflag(1)">
                                    <figure class="product-category-item">
                                        <div class="thumbnail">
                                            <img src="../assets/images/category-product/1.jpg" alt=""/>
                                        </div>
                                        <figcaption>
                                            <h3>Vegetable</h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" @click="sourchByflag(2)">
                                    <figure class="product-category-item">
                                        <div class="thumbnail">
                                            <img src="../assets/images/category-product/2.jpg" alt=""/>
                                        </div>
                                        <figcaption>
                                            <h3>Fruit</h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" @click="sourchByflag(3)">
                                    <figure class="product-category-item">
                                        <div class="thumbnail">
                                            <img src="../assets/images/category-product/3.jpg" alt=""/>
                                        </div>
                                        <figcaption>
                                            <h3>Meat</h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="heading-wrapper text-center">
            <h3 class="heading danger" id="times"><img src="../assets/img/icons/28c.gif" style="margin-left: -119px;"><span style="color: red">商品上新 </span>欢迎您的选购 </h3>
        </div>
        <div style="display: flex ; flex-direction: row">
            <section class="boxed-sm" style="width: 50%">
                <div class="container">
                    <div class="row">
                        <div class="row js-product-masonry-layout-1 product-masonry-layout-1" style="border: 0px">
                            <div class="grid-sizer"></div>
                            <figure class="item item-size-2" style="margin-left: 10%;">
                                <div class="product product-style-2" style="border: 0px">
                                    <div class="img-wrapper">
                                        <img class="img-responsive" :src="mainPage[0].src"
                                             alt="product thumbnail" style="border:0"  @click.stop="openModal(mainPage[0])"/>
                                        <div class="product-control-wrapper bottom-right" style="right: 200px">
                                            <div class="wrapper-control-item" style="border: 0px">
                                                <el-button
                                                        style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                        @click.stop="openModal(mainPage[0])">
                                                    <i class="el-icon-view"></i>
                                                </el-button>
                                            </div>
                                            <div class="wrapper-control-item item-wish-list">
                                                <el-button
                                                        style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                        @click="addToWish(mainPage[0])">
                                                    <i class="el-icon-star-off"></i>
                                                </el-button>
                                            </div>
                                            <div class="wrapper-control-item item-wish-list">
                                                <el-button
                                                        style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                        @click="addToCart(mainPage[0])">
                                                    <i class="el-icon-s-goods"></i>
                                                </el-button>
                                            </div>
                                        </div>
                                        <figcaption class="desc">
                                            <h3>
                                                <span>{{mainPage[0].name}}</span>
                                            </h3>
                                            <span class="price">￥{{mainPage[0].price}}&nbsp;</span>
                                        </figcaption>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <div style=" width: 50%; height: 668px; display: flex;  flex-direction: column ">
                <div style=" width: 100%; height: 334px; display: flex;  flex-direction: row ">
                    <figure class="item">
                        <div class="product product-style-2" style="border: 0px;">
                            <div class="img-wrapper">
                                <img class="img-responsive" :src="mainPage[1].src" alt="product thumbnail"
                                     style="border:0;width: 280px; height: 280px"  @click.stop="openModal(mainPage[1])"/>
                                <div class="product-control-wrapper bottom-right" style=" right:-46px">
                                    <div class="wrapper-control-item" style="border: 0px">
                                        <el-button
                                                style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                @click.stop="openModal(mainPage[1])">
                                            <i class="el-icon-view"></i>
                                        </el-button>
                                    </div>
                                    <div class="wrapper-control-item item-wish-list">
                                        <el-button
                                                style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                @click="addToWish(mainPage[1])">
                                            <i class="el-icon-star-off"></i>
                                        </el-button>
                                    </div>
                                    <div class="wrapper-control-item item-wish-list">
                                        <el-button
                                                style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                @click="addToCart(mainPage[1])">
                                            <i class="el-icon-s-goods"></i>
                                        </el-button>
                                    </div>
                                </div>
                                <figcaption class="desc">
                                    <h3>
                                        <span>{{mainPage[1].name}}</span>
                                    </h3>
                                    <span class="price"> ￥{{mainPage[1].price}}</span>
                                </figcaption>
                            </div>
                        </div>
                    </figure>

                    <div style="width: 50px"></div>

                    <div>
                        <figure class="item">
                            <div class="product product-style-2" style="border: 0px;">
                                <div class="img-wrapper">
                                    <img class="img-responsive" :src="mainPage[2].src" alt="product thumbnail"
                                         style="border:0;width: 280px; height: 280px"  @click.stop="openModal(mainPage[2])"/>
                                    <div class="product-control-wrapper bottom-right" style="right:-46px">
                                        <div class="wrapper-control-item" style="border: 0px">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click.stop="openModal(mainPage[2])">
                                                <i class="el-icon-view"></i>
                                            </el-button>
                                        </div>
                                        <div class="wrapper-control-item item-wish-list">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click="addToWish(mainPage[2])">
                                                <i class="el-icon-star-off"></i>
                                            </el-button>
                                        </div>
                                        <div class="wrapper-control-item item-wish-list">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click="addToCart(mainPage[2])">
                                                <i class="el-icon-s-goods"></i>
                                            </el-button>
                                        </div>
                                    </div>
                                    <figcaption class="desc">
                                        <h3>
                                            <span>{{mainPage[2].name}}</span>
                                        </h3>
                                        <span class="price">￥{{mainPage[2].price}} </span>
                                    </figcaption>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>


                <div style=" width: 100%; height: 334px; display: flex;  flex-direction: row ">
                    <div>
                        <figure class="item">
                            <div class="product product-style-2" style="border: 0px;">
                                <div class="img-wrapper">
                                    <img class="img-responsive" :src="mainPage[3].src" alt="product thumbnail"
                                         style="border:0;width: 280px; height: 280px" @click.stop="openModal(mainPage[3])" h/>
                                    <div class="product-control-wrapper bottom-right" style="right:-46px">
                                        <div class="wrapper-control-item" style="border: 0px">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click.stop="openModal(mainPage[3])">
                                                <i class="el-icon-view"></i>
                                            </el-button>
                                        </div>
                                        <div class="wrapper-control-item item-wish-list">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click="addToWish(mainPage[3])">
                                                <i class="el-icon-star-off"></i>
                                            </el-button>
                                        </div>
                                        <div class="wrapper-control-item item-wish-list">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click="addToCart(mainPage[3])">
                                                <i class="el-icon-s-goods"></i>
                                            </el-button>
                                        </div>
                                    </div>
                                    <figcaption class="desc">
                                        <h3>
                                            <span>{{mainPage[3].name}}</span>
                                        </h3>
                                        <span class="price"> ￥{{mainPage[3].price}}</span>
                                    </figcaption>
                                </div>
                            </div>
                        </figure>
                    </div>
                    <div style="width: 50px"></div>
                    <div>
                        <figure class="item">
                            <div class="product product-style-2" style="border: 0px;">
                                <div class="img-wrapper">
                                    <img class="img-responsive" :src="mainPage[4].src" alt="product thumbnail"  style="border:0;width: 280px; height: 280px"
                                         @click.stop="openModal(mainPage[4]) "/>
                                    <div class="product-control-wrapper bottom-right" style="right:-46px">
                                        <div class="wrapper-control-item" style="border: 0px">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px;"
                                                    @click.stop="openModal(mainPage[4])">
                                                <i class="el-icon-view"></i>
                                            </el-button>
                                        </div>
                                        <div class="wrapper-control-item item-wish-list">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px;"
                                                    @click="addToWish(mainPage[4])">
                                                <i class="el-icon-star-off"></i>
                                            </el-button>
                                        </div>
                                        <div class="wrapper-control-item item-wish-list">
                                            <el-button
                                                    style="
                                                                border: none;
                                                                background-color: transparent;
                                                                outline: none;
                                                                 font-size: 20px; "
                                                    @click="addToCart(mainPage[4])">
                                                <i class="el-icon-s-goods"></i>
                                            </el-button>
                                        </div>
                                    </div>
                                    <figcaption class="desc">
                                        <h3>
                                            <span>{{mainPage[4].name}}</span>
                                        </h3>
                                        <span class="price">￥ {{mainPage[4].price}}</span>
                                    </figcaption>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
            <Tips></Tips>
        </div>
        <Test v-bind:shop="shop" @closePage="closePage"  @addCartOrWish="addCartOrWish" v-show="modal"> </Test>
    </div>
</template>

<script>
    import Test from "./commens/Test";
    import Tips from "./mainpage/Tips";

    export default {
        name: "MainPage",
        data() {
            return {
                modal: false,
                mainPage: [],
                model: false,
                shop:{}

            }
        },
        created() {
            this.init()
        },
        methods: {
            open: function (value) {
                this.$notify({
                    title: '成功',
                    message: value,
                    type: 'success'
                });
            },
            init : function () {
                this.$axios.get("/client/showMainPage"
                ).then((response)=>{
                             this.mainPage = response.data.content.pageInfo;
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
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
            addToCart: function (value) {
                this.$axios.post("/client/addToCart", {
                            shopList : value,
                            Num : this.Num
                    }
                ).then(()=>{
                             this.open("添加购物车成功")
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            // eslint-disable-next-line no-unused-vars
            addToWish: function (value) {
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
            sourchByflag: function (val) {
                if (this.$route.path !=='/home/about'){
                    this.$router.push({
                        path: '/home/about',
                        query: {
                            flg: val
                        }
                    })
                }
            }
        },
        components: {
            Tips,
            Test
        }
    }
</script>

<style scoped>
    .product .img-wrapper img {
        width: 70%;
        transition: all 0.3s ease-in-out;
    }
</style>