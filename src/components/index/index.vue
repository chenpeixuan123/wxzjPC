<template>
    <div>

        <div class="content">

            <!-- 轮播部分 -->
            <el-row class='login'>
                <el-col :span="3">
                    <div class="login_left">
                        <div :class="index==1?'active':''" @click="tab(1)">
                            <div v-if="index==1">
                                <img src="@/assets/images/kaifashang.png" alt="">
                            </div>
                            <p>开发商登录</p>
                        </div>
                        <div @click="tab(2)" :class="index==2?'active':''">
                            <div v-if="index==2">
                                <img src="@/assets/images/home.png" alt="">
                            </div>
                            <p>物业登录</p>
                        </div>
                        <div @click="tab(3)" :class="index==3?'active':''">
                            <div v-if="index==3">
                                <img src="@/assets/images/self_home.png" alt="">
                            </div>
                            <p style="margin-top: 1px;">业主委员会<br/>登录</p>
                        </div>
                        <div @click="tab(4)" :class="index==4?'active':''">
                            <div v-if="index==4">
                                <img src="@/assets/images/self.png" alt="">
                            </div>
                            <p>业主登录</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12" v-show='showRegister==false'>
                    <div class="login_center">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <p>2020业主委员会投票结果公示</p>
                                </div>
                                <div class="swiper-slide">
                                    <p>2020业主委员会投票结果公示</p>
                                </div>
                                <div class="swiper-slide">
                                    <p>2020业主委员会投票结果公示</p>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="9" v-show='showRegister==false'>
                    <div class="login_right" v-show="ifShowPasswordLogin">
                        <h5><span :class="mima_login_tab1==1?'dengLuClass_active':''"
                                  @click="mima_login_tab(1)">密码登录</span>
                            <span @click="mima_login_tab(2)"
                                  :class="mima_login_tab1==2?'dengLuClass_active':''">短信登录</span>
                        </h5>
                        <div v-show="mima_login_tab1==1">
                            <div>
                                <img src="@/assets/images/wo.png">
                            </div>
                            <div>
                                <input id="username" type="text" placeholder="用户名"/>
                            </div>
                        </div>
                        <div v-show="mima_login_tab1==1">
                            <div>
                                <img src="@/assets/images/suo.png">
                            </div>
                            <div>
                                <input id="password" type="password" placeholder="密码"/>
                            </div>
                        </div>

                        <div style="width: 177px;" v-show="mima_login_tab1==1">
                            <div>
                                <img src="@/assets/images/anquan.png">
                            </div>
                            <div>
                                <input id="validCode" type="text" placeholder="验证码" style="width: 120px;"
                                       class="layui-input"/>
                            </div>
                        </div>
                        <el-tooltip v-show="mima_login_tab1==1" class="item" effect="dark" content="看不清，换一张"
                                    placement="top">
                            <img src="@/assets/images/yanzhengma.png" class="yzm">
                        </el-tooltip>

                        <div v-show="mima_login_tab1==2">
                            <div>
                                <img src="@/assets/images/foogetPassword/dianhua.png">
                            </div>
                            <div>
                                <input type="text" placeholder="手机号"/>
                            </div>
                        </div>

                        <div style="width: 200px;" v-show="mima_login_tab1==2">
                            <div>
                                <img src="@/assets/images/anquan.png">
                            </div>
                            <div>
                                <input type="text" placeholder="短信验证码" style="width: 120px;"/>
                            </div>
                        </div>

                        <button class="yzm djhq" v-show="mima_login_tab1==2">点击获取</button>

                        <p class="wjmm"><span @click="showFogetPassword">忘记密码？</span></p>

                        <button class="btn" :style="mima_login_tab1==2?{marginTop:'80px'}:{}" id="login">登录</button>
                    </div>
                    <!-- 忘记密码 -->
                    <div class="login_right" v-show="!ifShowPasswordLogin">
                        <h5 style="padding-left:129px;margin: 33px 0 16px;">忘记密码</h5>
                        <div class="login_tab">
                            <div :class="wjmmIndex==1?'active_login_tab':''" @click="wjmm_tab(1)">
                                <span>1</span>
                                <span>基本信息</span>
                            </div>
                            <div @click="wjmm_tab(2)" :class="wjmmIndex==2?'active_login_tab':''">
                                <span>2</span>
                                <span>短信验证</span>
                            </div>
                            <div @click="wjmm_tab(3)" :class="wjmmIndex==3?'active_login_tab':''">
                                <span>3</span>
                                <span>设置成功</span>
                            </div>
                        </div>
                        <!-- 基本信息 -->
                        <template>
                            <div v-show="wjmmIndex==1" style="margin-bottom: 18px;height: 36px;">
                                <div style="background:rgba(150,194,236,0.27);border-right: 1px solid rgba(150,194,236,0.27);">
                                    <img src="@/assets/images/foogetPassword/tongyong.png" style="width: 14px;">
                                </div>
                                <div>
                                    <input type="text" placeholder="用户名" style="padding-left: 15px;width: 262px;"/>
                                </div>
                            </div>
                            <div v-show="wjmmIndex==1" style="margin-bottom: 18px;height: 36px;">
                                <div style="background:rgba(150,194,236,0.27);border-right: 1px solid rgba(150,194,236,0.27);">
                                    <img src="@/assets/images/foogetPassword/mima.png" style="width: 14px;">
                                </div>
                                <div>
                                    <input type="password" placeholder="新登录密码"
                                           style="padding-left: 15px;width: 262px;"/>
                                </div>
                            </div>

                            <div v-show="wjmmIndex==1" style="margin-bottom: 18px;height: 36px;">
                                <div style="background:rgba(150,194,236,0.27);border-right: 1px solid rgba(150,194,236,0.27);">
                                    <img src="@/assets/images/foogetPassword/mima-2.png" style="width: 14px;">
                                </div>
                                <div>
                                    <input type="text" placeholder="确认登录密码" style="padding-left: 15px;width: 262px;"/>
                                </div>
                            </div>
                        </template>
                        <!-- 短信验证 -->
                        <template>
                            <div v-show="wjmmIndex==2" style="margin-bottom: 18px;height: 36px;">
                                <div style="background:rgba(150,194,236,0.27);border-right: 1px solid rgba(150,194,236,0.27);">
                                    <img src="@/assets/images/foogetPassword/dianhua.png" style="width: 14px;">
                                </div>
                                <div>
                                    <input type="text" placeholder="手机号" style="padding-left: 15px;width: 262px;"/>
                                </div>
                            </div>

                            <div v-show="wjmmIndex==2" style="width: 220px;height: 36px;">
                                <div style="background:rgba(150,194,236,0.27);border-right: 1px solid rgba(150,194,236,0.27);">
                                    <img src="@/assets/images/anquan.png">
                                </div>
                                <div>
                                    <input type="text" placeholder="短信验证码" style="width: 100px;padding-left: 15px;"/>
                                </div>
                            </div>
                            <div v-show="wjmmIndex==2"
                                 style="width: 90px;height: 36px;background: #3F82E7;color: #fff;line-height: 36px;justify-content: center;position: absolute;right: 56px;top: 189px;">
                                点击获取
                            </div>

                        </template>
                        <template>
                            <img v-show="wjmmIndex==3" src="@/assets/images/foogetPassword/miamasuo.png" alt=""
                                 style="margin: 39px 0 24px 65px;display: block;">
                            <p @click="showFogetPassword" v-show="wjmmIndex==3"
                               style="text-align: center;padding-right: 56px;">设置完成，去<span
                                    style="color: #3F82E7;cursor: pointer;">登录</span></p>
                        </template>
                        <p class="wjmm" v-show="wjmmIndex!=3" :style="wjmmIndex==2?{marginBottom:'88px'}:{}"
                           @click="showFogetPassword"><span>已有账号，马上登录</span></p>

                        <button class="btn" v-show="wjmmIndex!=3">{{showRegister==true?'登录':'下一步'}}</button>
                    </div>
                </el-col>
                <!--显示注册-->
                <el-col :span='21' v-show='showRegister'>
<!--                    注册组件-->
                        <register @showRegisterMethods="showLogin"></register>
                </el-col>
            </el-row>

            <!-- 展示图片 -->
            <div>
                <img src="@/assets/images/banner.png">
            </div>
            <!-- 网上办事 -->
            <div class="wsbs">
                <div class="wsbs_title">
                    网上办事
                </div>
                <el-row class='wsbs_content' type='flex' justify='space-between'>
                    <el-col :span="3">
                        <div class="wsbs_left wsbs_style">
                            <img src="@/assets/images/denglu.png">
                            <p>一网通办</p>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class="wsbs_center1">
                            <p @click="toRegister">
                                <img src="@/assets/images/diannao.png">
                                <span>网上注册</span>
                            </p>
                            <p>
                                <img src="@/assets/images/fangdajing.png">
                                <span>状态查询</span>
                            </p>
                            <p>
                                <img src="@/assets/images/zhishi.png">
                                <span>办事指南</span>
                            </p>
                            <p>
                                <img src="@/assets/images/fangdajing.png">
                                <span>状态反馈</span>
                            </p>
                        </div>
                    </el-col>
                    <el-col :span="13">
                        <div class="wsbs_center2">
                            <p>业主维修资金查询 <span>（立即查询）</span></p>
                            <p>《住宅专项维修资金管理办法》 <span>下载</span></p>
                            <p>业主维修资金查询 <span>（立即查询）</span></p>
                            <p>《住宅专项维修资金管理办法》 <span>下载</span></p>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div class="wsbs_left" style="margin-left: 10px;">
                            <img src="@/assets/images/item353.png">
                            <p>住宅服务</p>
                        </div>
                    </el-col>
                </el-row>
            </div>


        </div>

    </div>
</template>

<script>
    import Swiper from "swiper"
    import register from "./register";
    export default {
        name: "index",
        components:{
            register
        },
        data() {
            return {
                showRegister: true, //控制显示隐藏
                index: 1,
                mima_login_tab1: 1,
                registerShow: 1, //注册步骤
                timer: "", //定义一个定时器的变量
                wjmmIndex: 1, //控制忘记密码
                ifShowPasswordLogin: true
            }
        },
        created() {
            //监听enter事件
            document.onkeydown = function (e) {
                var key = window.event.keyCode;
                if (key == 13) {
                    _this.submit();
                }
            }
        },
        mounted() {
            //轮播组件
            const mySwiper = new Swiper('.swiper-container', {
                autoplay: 3000,
                loop: true,
                paginationClickable: true,
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction: false,
            })
        },
        methods: {
            submit() {
                alert(24)
            },
            mima_login_tab(index) {
                this.mima_login_tab1 = index;
            },
            showFogetPassword() {
                this.ifShowPasswordLogin = !this.ifShowPasswordLogin;
            },
            wjmm_tab(index) { //忘记密码tab
                this.wjmmIndex = index;
            },

            showLogin(state){
                this.showRegister = state
            },
            tab(index) {
                this.showRegister = false;
                this.index = index;
            },
            toRegister() {
                this.registerShow = 1;
                this.showRegister = true;
            }

        }
    }
</script>

<style scoped lang="scss">
    @import "../../../node_modules/swiper/dist/css/swiper.css";
    @import "../../assets/css/index/index.css";
</style>