<template>
    <div class="shop">
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
                            <p class="woocommerce-result-count">Showing 1 - 12 of 30 results</p>
                            <form class="woocommerce-ordering select-custom-wrapper" method="get">
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="boxed-sm">
            <div class="container">
                <div class="row main">
                    <div class="row product-grid-equal-height-wrapper product-equal-height-4-columns flex multi-row">

                        <figure class="item">
                                <div class="product product-style-1">
                                    <div class="img-wrapper">
                                        <img class="img-responsive" src="" alt="productthumbnail" />
                                        <div class="product-control-wrapper bottom-right">
                                            <div class="wrapper-control-item">
                                                <a class="js-quick-view" href="#" type="button" data-toggle="modal" data-target="#quick-view-product" >
                                                    <i class="el-icon-view"></i>
                                                </a>
                                            </div>
                                            <div class="wrapper-control-item item-wish-list">
                                                <a class="js-wish-list js-notify-add-wish-list" href="#">
                                                    <i class="el-icon-view"></i>
                                                </a>
                                            </div>
                                            <div class="wrapper-control-item item-add-cart js-action-add-cart">
                                                <a class="animate-icon-cart" href="#">
                                                    <i class="el-icon-view"></i>
                                                </a>
                                                <svg x="0px" y="0px" width="36px" height="32px" viewbox="0 0 36 32">
                                                    <path stroke-dasharray="19.79 19.79" fill="none" ,="," stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <figcaption class="desc text-center">
                                        <h3>
                                            <a class="product-name" href="#">${page.name}</a>
                                        </h3>
                                        <span class="price">￥${page.price}</span>
                                    </figcaption>
                                </div>
                            </figure>
                    </div>
                </div>

                <div class="block">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[10]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                    </el-pagination>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    export default {
        name: "Shop",
        data(){
            return{
                total: 0,
                currentPage: 0,
            }
        },
        methods: {
            handleSizeChange: function (val) {

            },
            handleCurrentChange(val) {
                this.initGoods(val);
            },
            initGoods(pageNum) {
                this.$axios.post("/good/showAllGoods", { pageNum: pageNum} ).then((response)=>{
                            this.tableData = response.data.content.pageInfo.list;
                            this.total = response.data.content.pageInfo.total;
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            }
        }
    }
</script>

<style scoped>
    @import "../assets/revolution/css/settings.css";
    @import "../assets/revolution/css/layers.css";
    @import "../assets/revolution/css/navigation.css";
    @import "../assets/css/main.css";
</style>