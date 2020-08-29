<template>
    <div class="shop-cart">
        <section class="sub-header shop-detail-1">
            <img class="rellax bg-overlay" src="../assets/images/sub-header/013.jpg" alt="">
            <div class="overlay-call-to-action"></div>
            <h3 class="heading-style-3">Shop Cart</h3>
        </section>
        <section class="boxed-sm">
            <div class="container">
                <div class="woocommerce">
                    <form class="woocommerce-cart-form">
                        <table class="woocommerce-cart-table" id="cart">
                            <thead >
                            <tr>
                                <th class="product-thumbnail" >Product</th>
                                <th class="product-name"></th>
                                <th class="product-weight">Weight</th>
                                <th class="product-quantity">Quantity</th>
                                <th class="product-price">Price</th>
                                <th class="product-subtotal">Total</th>
                                <th class="product-remove"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(cart,index) in cartList" v-bind:key="cart.id">
                                <td class="product-thumbnail">
                                    <img :src=cart.pSrc alt="product-thumbnail" width="75" height="75">
                                </td>
                                <td class="product-name" data-title="Product">
                                    <a class="product-name" href="#">{{cart.pName}}</a>
                                </td>
                                <td class="product-weight" data-title="Weight">0.5 kg</td>
                                <td class="product-quantity" data-title="Quantity">
                                    <input class="qty" step="1" min="1" max="99" name="product-name" v-model=cart.quantity title="Qty"
                                           size="4" pattern="[0-9]*" inputmode="numeric" type="text" maxlength="2" style="outline: none" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
                                </td>
                                <td class="product-price" data-title="Price">${{cart.pPrice}}</td>
                                <td class="product-subtotal" data-title="Total">${{cart.pTotal = cart.quantity * cart.pPrice| formatNum}}</td>
                                <td class="product-remove">
                                    <a class="remove" href="javascript:void(0);" aria-label="Remove this item"
                                       @click="subCart(cart,index)">×</a>
                                </td>
                            </tr>
                            </tbody>


                                <td colspan="7">
                                    <div class="form-coupon organic-form" style="margin-left: 963px;margin-top: 20px;">
                                        <div class="form-group update-cart">
                                            <a class="btn btn-brand-ghost pill" href="javascript:void(0);" type="button" data-toggle="modal"
                                               data-target="#quick-view-product" @click="OpenOrderPage">
                                                accounts
                                            </a>
                                        </div>
                                        <div class="form-group update-cart">
                                            <b>ni de total is :<span id="div_id"> {{total| formatNum}} </span></b>
                                        </div>
                                    </div>
                                   Let`s go to settle accounts
                                </td>
                        </table>
                    </form>
                </div>
            </div>
        </section>
        <OrderPage @closePage="closePage" v-show="dialogVisible" ></OrderPage>
    </div>
</template>

<script>
    import OrderPage from "./mainpage/OrderPage";
    import {formatNum} from "../js/number.js"

    export default {
        filters: {
            formatNum(val) {
                return formatNum(val);
            }
        },
        name: "ShopCart",
        components: {OrderPage},
        data(){
            return{
                cartList :[],
                total: 0,
                dialogVisible: false
            }
        },
        created() {
            this.init()
        },
        watch: {
            cartList:{
                handler:function(){
                    this.total = 0
                    this.cartList.map((item) => {this.total += item.pTotal})
                },
                deep: true
            }
        },
        methods: {
            init: function () {
                this.$axios.post("/client/showCartList", {} ).then((response)=>{
                            this.cartList = response.data.content.pageInfo.list;
                            response.data.content.pageInfo.list.map((item) => {this.total += item.pTotal});
                             this.$store.commit('SetCartList',this.cartList)
                             this.$store.commit('SetTotal',this.total)
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })

            },
            subCart: function (value,index) {
                this.$axios.post("/client/subCart", { cart : value} ).then((response)=>{
                    if("0" === response.data.content.resultCode){
                                    this.open("删除成功")
                                    this.cartList.splice(index,1);
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
            OpenOrderPage: function () {
                this.$store.commit('SetCartList',this.cartList)
                this.$store.commit('SetTotal',this.total)
                this.dialogVisible = true;
            },
            closePage: function (data) {
                this.dialogVisible = data;
                this.init()
            },
        }
    }
</script>

<style scoped>
    th{
        text-align: center
    }
</style>