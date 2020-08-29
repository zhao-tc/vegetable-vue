<template>
    <div class="orderFrom">
        <section class="boxed-sm">
            <div class="container" style="width: 833px;">
                <div class="woocommerce">
                    <div class="woocommerce-checkout-review-order">
                        <h4 style="margin-top: -78px"><b>Your order</b></h4>
                        <div style="font-size: 1px">--------------------------------------------------</div>
                        <div style="height: 400px; overflow-y:scroll">
                            <table class="woocommerce-checkout-review-order-table">
                                <thead>
                                <tr>
                                    <th class="product-name">Product</th>
                                    <th class="product-total">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="cart in cartList" v-bind:key="cart.id" class="cart_item">
                                    <td class="product-name">{{cart.pName}}
                                        <span class="product-quantity">× {{cart.quantity}}</span>
                                    </td>
                                    <td class="product-total">
                          <span class="woocommerce-Price-amount amount">
                            <span class="woocommerce-Price-currencySymbol">$</span>{{cart.pTotal| formatNum}}</span>
                                    </td>
                                </tr>

                                </tbody>
                                <tfoot>
                                <tr class="order-total">
                                    <th>Total</th>
                                    <td>
                                        <strong>
                            <span class="woocommerce-Price-amount amount">
                              <span class="woocommerce-Price-currencySymbol">$</span>{{total| formatNum}}</span>
                                        </strong>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="woocommerce-checkout-payment">
                        <div class="payment_method_cheque">
                            <div class="payment_method_paypal">
                                <div class="radio">
                                    <label style="margin-top: 40px;">
                                        <input class="input-radio" id="payment_method_paypal"
                                               name="payment_method" value="paypal" type="radio"> PayPal
                                        <a @click="weChat"> <img :src="weChatUrl" alt="paypal" style="width: 30px;"></a>
                                        <a @click="alipay"> <img :src="alipayUrl" alt="paypal" style="width: 30px;"></a>
                                        <span>What is Paypal? </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {formatNum} from "../../js/number.js"
    export default {
        filters: {
            formatNum(val) {
                return formatNum(val);
            }
        },
        name: "OrderFrom",
        data(){
            return{
                cartList: this.$store.getters.getCartList,
                total: this.$store.getters.getTotal,
                weChatUrl: require("../../assets/img/icons/微信支付.svg"),
                alipayUrl: require("../../assets/img/icons/支付宝.svg"),
            }
        },
        methods:{
            weChat: function () {
                this.$axios.post("/client/toOrder", {
                    carts : this.cartList,
                    price : this.total
                } ).then(()=>{
                        this.$emit("weyplay", "1")
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })

            },
            alipay: function () {
                this.$axios.post("/client/toOrder", {
                    carts : this.cartList,
                    price : this.total
                } ).then(()=>{
                    this.$emit("weyplay", "2")
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })

            }
        },
        computed:{
            getCartChange() {
                 return  this.$store.getters.getCartList;
            },
            getTotalChange() {
                return  this.$store.getters.getTotal;
            }
        },
        watch:{
            getCartChange :function () {
                this.cartList= this.$store.getters.getCartList;
            },
            getTotalChange: function () {
                this.total=this.$store.getters.getTotal
            }
        }
    }
</script>

<style scoped>
    a:hover img{
        -webkit-transform:scale(1.3);-o-transform:scale(1.3);
    }

</style>