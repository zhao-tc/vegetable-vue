<template>
    <div class="Order">
        <div>
        </div>
        <section class="boxed-sm">
            <div class="container">
                <div class="woocommerce">
                    <div class="woocommerce-checkout-review-order">
                        <hr>
                        <div v-for="orderinfo in orderList" v-bind:key="orderinfo.id">
                            <el-row :gutter="12" style="width: 1000px;margin: 0px auto;margin-left: 150px;">
                            <el-col :span="20">
                                <el-card shadow="always">
                                    <button class="close" type="button" style="margin-left: -385px; font-size: 20px" data-dismiss="modal" aria-label="Close" @click.stop="subOrder(orderinfo.carts[0].orderid)">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <span >
                                          <el-popover
                                                  title="订单"
                                                  width="600"
                                                  trigger="hover"
                                                  placement="bottom"
                                                  content="">
                                          <slot>
                                              <div>订单号： {{orderinfo.carts[0].orderid}}</div>
                                              <div>姓名：{{orderinfo.name}}</div>
                                              <div>电话：{{orderinfo.phone}}</div>
                                              <div>收货地址：{{orderinfo.adress}}</div>
                                          </slot>
                                        <a slot="reference">订单</a>
                                         </el-popover>
                                    </span>
                                    <div class="woocommerce">
                                        <form class="woocommerce-cart-form">
                                            <table class="table" style="border: none" id="cart">
                                                <thead>
                                                </thead>
                                                <tbody>
                                                <tr v-for="cart in orderinfo.carts" v-bind:key="cart.id">
                                                    <td>
                                                    <td class="product-thumbnail">
                                                        <img :src=cart.pSrc
                                                             alt="product-thumbnail" width="35" height="35">
                                                    </td>
                                                    <td class="product-subtotal" data-title="Total">{{cart.pName}}</td>
                                                    <td class="product-subtotal" data-title="Total">x{{cart.quantity}}</td>
                                                    <td class="product-subtotal" data-title="Total">${{cart.pTotal}}</td>
                                                    <td class="product-remove">
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </form>
                                    </div>
                                    付款时间：{{orderinfo.carts[0].createdDate | formatDate}}
                                </el-card>
                            </el-col>
                        </el-row>
                        <hr>
                        <hr>
                        </div>

                        <hr>
                        <hr>
                        <hr>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    import {formatDate} from "../js/date"

    export default {
        filters: {
            // 时间格式自定义
            formatDate(val) {
                return formatDate(val);
            }
        },
        name: "Order",
        data(){
            return{
                orderList: [],
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init : function () {
                this.$axios.get("/client/qryOrder"
                ).then((response)=>{
                    this.orderList = response.data.content.orderInfo;
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            },
            subOrder: function (orderId) {
                this.$axios.post("/client/subOrder", {
                        orderId:orderId
                    }
                ).then((response)=>{
                    if(response.data.content.resultCode === '0'){
                                    this.init()
                                }
                }).catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
            }
        }
    }
</script>

<style scoped>
    .table {
        border: 0px solid
    }

</style>