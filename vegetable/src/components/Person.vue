<template>

    <div class="peron" style="display: flex">
        <div style="height: 500px">
            <ul class="slides">
                <li style="; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;"
                    data-thumb-alt="" class="flex-active-slide">
                    <div class="overlay"></div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp"
                                 style="height: 500px;">
                                <div class="slider-text-inner">
                                    <div class="desc" style="    margin-top: 150px;
    margin-left: 500px;
    width: 600px;">

                                        <el-card class="box-card" v-if=flag>
                                            <div class="text item">
                                                姓名：{{preson.username}}
                                            </div>
                                            <div class="text item">
                                                电话：{{preson.phone}}
                                            </div>
                                            <div class="text item">
                                                地址：{{preson.adress}}
                                            </div>
                                            <div class="text item">
                                                <el-button style="float: right; padding: 3px 0" type="text" @click="flag = false">编辑
                                                </el-button>
                                            </div>
                                        </el-card>

                                        <el-card class="box-card" v-else>
                                            <el-form ref="form" :model="form" label-width="80px">
                                                <el-form-item label="姓名">
                                                    <el-input v-model="preson.username"></el-input>
                                                </el-form-item>
                                                <el-form-item label="电话">
                                                    <el-input type="phone" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" v-model="preson.phone"></el-input>
                                                </el-form-item>
                                                <el-form-item label="地址">
                                                    <el-input type="textarea" v-model="preson.adress"></el-input>
                                                </el-form-item>
                                            </el-form>
                                            <div class="text item">
                                                <el-button style="float: left; padding: 3px 0" type="text" @click="flag = true">取消
                                                </el-button>
                                                <span></span>
                                                <el-button style="float: right; padding: 3px 0" type="text" @click="submit">确定
                                                </el-button>
                                            </div>
                                        </el-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div><img src="../assets/img/signup-image.jpg" style="margin-top: 120px;"></div>
    </div>


</template>

<script>
    export default {
        name: "Person",
        data() {
            return {
                preson: {},
                flag:true
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init: function () {
                this.$axios.post("/client/userinfo",{},).then((res)=>{
                    this.preson = res.data.content.user
                }).catch(error => {
                                console.log(error);
                                alert('网络错误，不能访问');
                })
            },

            submit: function () {
                this.$axios.post("/client/userinfo",   this.preson,).then((response)=>{
                    if(response.data){
                        this.open("修改成功！");
                        this.flag = true;
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

    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }
</style>