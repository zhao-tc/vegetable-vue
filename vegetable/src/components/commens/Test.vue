<template>
    <div class="Test">
        <div id="modal" class="modal-dialog modal-lg modal-quickview woocommerce" role="document" >
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="closePage">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6" vertical-align="middle">
                            <div class="woocommerce-product-gallery">
                                <div>
                                    <p>com.alibaba.druid.pool.DruidDataSource 2019-09-18 07:29:03 ERROR DruidDataSource
                                        : testWhileIdle is true, validationQuery not set 795
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                    </p>
                                    <p>
                                        <br/>
                                    </p>
                                </div>
                                <div class="main-carousel-product-quick-view">
                                    <div>
                                        <img class="img-responsive" :src=shop.src
                                             alt="product thumbnail"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="summary">
                                <div class="desc">
                                    <div class="header-desc">
                                        <h2 class="product-title">{{shop.name}}</h2>
                                        <p class="price">${{shop.price}}</p>
                                    </div>
                                    <div class="body-desc">
                                        <div class="woocommerce-product-details-short-description">
                                            <p id="testDiv" style="height: 125px;">{{shop.des}}</p>
                                        </div>
                                    </div>
                                    <div class="footer-desc">
                                        <form class="cart">
                                            <div class="quantity buttons-added" style="margin-left:77px">
                                                <input class="minus" value="-" type="button" @click="subNum"/>
                                                <input class="input-text qty text" step="1" min="1" max="99"
                                                       name="quantity" value="1" title="Qty" size="4" pattern="[0-9]*"
                                                       maxlength="2"
                                                       inputmode="numeric" type="text"  v-model="Num"
                                                       oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                                />
                                                <input class="plus" value="+" type="button" @click="addNum"/>
                                            </div>
                                            <div class="group-btn-control-wrapper">
                                                <a href="javascript:void(0)" class="btn btn-brand no-radius" @click="addToCart(shop)">ADD TO CART</a>
                                                <a href="javascript:void(0)" class="btn btn-wishlist btn-brand-ghost no-radius" @click="addToWish(shop)">
                                                    <i class="el-icon-star-on" ></i>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="product-meta">
                                    <p class="posted-in">Categories:
                                        <span class='cl'>Food</span>
                                    </p>
                                    <p class="tagged-as">Tags:
                                        <span class="cl">Natural</span>,
                                        <span class="cl">Organic</span>,
                                        <span class="cl">Health</span>,
                                        <span class="cl">Green</span>,
                                        <span class="cl">Vegetable</span>
                                    </p>
                                    <p class="id">ID:
                                        <span class='cl'>A203</span>
                                    </p>
                                </div>
                                <div class="widget-social align-left">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        props:['shop'],
        data() {
            return {
                Num : 1,
            }
        },
        methods: {
            closePage: function () {
                   this.$emit("closePage",false)
            },
            subNum: function () {
                if(this.Num >= 2){
                    this.Num -=1;
                }
            },
            addNum: function () {
                if(this.Num <= 99){
                    this.Num = Number(this.Num) +1;
                }
            },
            addToCart: function (value) {
                this.$axios.post("/client/addToCart", {
                            shopList : value,
                            Num : this.Num
                    }
                ).then(()=>{
                            this.$emit("addCartOrWish","添加到购物车成功")
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            addToWish: function (value) {
                this.$axios.post("/client/addToWish", {
                    shopList : value
                    }
                ).then(()=>{
                    this.$emit("addCartOrWish","添加到心愿表成功")
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })

            },

        }
    }
</script>

<style scoped>
    .modal-content {
        position: fixed;
        *position: absolute;
        width: 900px;
        height: 635px;
        top: 10%;
        left: 25%;
        margin: -50px 0 0 -50px;
    }
    #testDiv{  width: 100%;
        height: auto;
        word-wrap:break-word;
        word-break:break-all;
        overflow: hidden;
        font-size: 16px;
    }
</style>