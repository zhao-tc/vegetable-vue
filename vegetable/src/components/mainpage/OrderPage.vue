<template>
    <div class="orderPage">
        <div id="modal" class="modal-dialog modal-lg modal-quickview woocommerce" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close" @click="closePage">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body" style="width: 900px; height: 635px;">

                    <div v-if="flg === '1'">
                        <WeChat></WeChat>
                    </div>
                    <div v-else-if="flg === '2'">
                        <Alipay></Alipay>
                    </div>
                    <div v-else>
                        <OrderFrom @weyplay="weyplay"></OrderFrom>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import OrderFrom from "./OrderFrom";
    import WeChat from "./WeChat";
    import Alipay from "./Alipay";
    export default {
        components: {Alipay, WeChat, OrderFrom},
        data() {
            return {
                flg: '0',// * 代表首页 ， ‘1’代表微信 ； ‘2’代表支付宝
                name: "OrderPage",
            }
        },
        methods: {
            closePage: function () {
                this.flg = '0';
                this.$emit("closePage", false)
            },
            weyplay: function (data) {
                this.flg = data;
            }
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

    #testDiv {
        width: 100%;
        height: auto;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        font-size: 16px;
    }
</style>