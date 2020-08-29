<template>
    <div class="wish">
        <section class="sub-header shop-detail-1">
            <img class="rellax bg-overlay" src="../assets/images/sub-header/014.jpg" alt="">
            <div class="overlay-call-to-action"></div>
            <h3 class="heading-style-3">Wishlist</h3>
        </section>
        <section class="boxed-sm">
            <div class="container">
                <div class="woocommerce">
                    <form class="woocommerce-cart-form">
                        <table class="woocommerce-cart-table">
                            <thead>
                            <tr>
                                <th class="product-thumbnail" style="text-align: center">Product</th>
                                <th class="product-name" style="text-align: center"></th>
                                <th class="product-price" style="text-align: center">Price</th>
                                <th class="product-status" style="text-align: center">Stock Status</th>
                                <th class="product-add-to-cart" style="text-align: center"></th>
                                <th class="product-remove" style="text-align: center"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(wish ,index) in wishList" v-bind:key="wish.id">
                                <td class="product-thumbnail"><img :src=wish.src alt="product-thumbnail" style="  width: 102px; height: 86px;">
                                </td>
                                <td class="product-name" data-title="Product">
                                    <a class="product-name" href="#"></a>
                                </td>
                                <td class="product-price" data-title="Weight">{{wish.pPrice}}</td>
                                <td class="product-stock-status" data-title="Stock Status">
                                    <a href="#">In Stock</a>
                                </td>
                                <td class="product-add-to-cart">
                                    <a class="btn btn-brand" href="javascript:void(0);" @click="addToCart(wish,index)">ADD TO CART</a>
                                </td>
                                <td class="product-remove text-right">
                                    <a class="remove" href="javascript:void(0);" aria-label="Remove this item" @click="subWish(wish,index)">x</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Wish",
        data() {
            return {
                wishList: [],
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init: function () {
                this.$axios.post("/client/showWishList", {} ).then((response)=>{
                     this.wishList = response.data.content.pageInfo.list;
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            addToCart: function (value,index) {
                this.$axios.post("/client/wishAddToCart", {  wish : value} ).then((response)=>{
                    if("0" == response.data.content.resultCode){
                        this.open("添加至购物车成功")
                        this.wishList.splice(index,1);
                    }
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            subWish: function (value,index) {
                this.$axios.post("/client/subWish", {  wish : value} ).then((response)=>{
                    if("0" == response.data.content.resultCode){
                        this.open("删除成功")
                        this.wishList.splice(index,1);
                    }
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            open: function (value) {
                this.$notify({
                    title: '成功',
                    message: value,
                    type: 'success'
                });
            },
        }
    }
</script>
<style scoped>
</style>