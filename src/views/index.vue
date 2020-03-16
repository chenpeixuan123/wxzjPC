<template>
    <div>
        <!-- 页头部分 -->
        <div class="max_title">
            <div class="max_content">
                <div>
                    欢迎访问住宅维修资金管理系统！ {{currentTime }}
                </div>
                <div>
                    <span style="margin-right: 5px;" @click="toIndex($event)">设为首页</span> | <span style="margin-left: 5px;" @click="addFavorite">加入收藏</span>
                </div>
            </div>
        </div>

        <div class="content"  style="margin-bottom: 20px;">
            <!-- logo部分 -->
            <el-row class='logo' type='flex' align='middle'>
                <el-col :span="3">
                    <div class="logo_img">
                        <img src="@/assets/images/LOGO.png">
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="main_title">
                        <h3>住宅维修资金管理系统</h3>
                        <p>Housing Maintenance Fund management system</p>
                    </div>
                </el-col>
                <el-col :span="5" v-show="false">
                    <div class="main_head">
                        <span style="cursor: pointer;" id="upPwd">修改密码</span>
                        <img src="@/assets/images/geren.png">
                        <el-dropdown @command="handleCommand">
                            <b class="el-dropdown-link" style="cursor: pointer">
                                <b id="nickName"></b>
                                <i class="layui-icon layui-icon-down"></i>
                            </b>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                <el-dropdown-item command="qy">企业信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
            <!-- 蓝色背景部分 -->
            <div class='blue_bg' v-show="false">
                <div v-for="(item,index) in head_list" :key="index">
                    <div :class="index==0?'tab_active':''">
                        <p>{{item.name}}</p>
                        <ul class="second_tab">
                            <li v-for="(item1,index1) in item.child" :key="index1" :class="index1==0?'active_second':''">
                                {{item1.name}}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

<!--    内容部分-->
        <router-view/>


<!--        底部导航-->
        <div class="foot">
            <p>版权所有甘肃环讯信息科技有限公司</p>
            <p>备案编号：0000000 技术支持：甘肃环讯信息科技有限公司</p>
            <img src="@/assets/images/LOGO.png">
        </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                currentTime: new Date().getFullYear() + '年' + (new Date().getMonth() + 1) + '月' + new Date().getDate() + '日 ' +
                    new Date().getHours() + ":" + new Date().getMinutes(), // 获取当前时间
                head_list: [],
                conf: ''
            };
        },
        created() {
            var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
            this.timer = setInterval(function() {
                _this.currentTime = //修改数据date
                    new Date().getFullYear() +
                    "年" +
                    (new Date().getMonth() + 1) +
                    "月" +
                    new Date().getDate() +
                    "日 " +
                    new Date().getHours() +
                    ":" +
                    new Date().getMinutes()
            }, 1000);
        },
        beforeDestroy() {
            if(this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        },
        mounted() {
            const json_data = {
                "title": "开发商管理菜单",
                "menus": [{
                    "name": "小区管理",
                    "url": "www.baidu.com",
                    "child": [{
                        "name": "小区管理2",
                        "url": "www.baidu.com"
                    },
                        {
                            "name": "小区管理3",
                            "url": "www.baidu.com"
                        }
                    ]
                },
                    {
                        "name": "资金管理",
                        "url": "wwww.sina.com"
                    },
                    {
                        "name": "房管局申请",
                        "url": "www.baidu.com"
                    }
                ]
            }
            this.head_list = json_data.menus;
        },
        methods: {
            toIndex(element) {
                let obj = element.currentTarget;
                console.log(obj.style)
                let vrl = window.location;
                try {
                    obj.style.behavior = 'url(#default#homepage)';
                    obj.setHomePage(vrl);
                } catch(e) {
                    if(window.netscape) {
                        try {
                            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        } catch(e) {
                            alert(
                                `此操作被浏览器拒绝！请按照下面步骤操作：1，打开浏览器选项。2，在搜索栏中搜索主页。3，将${vrl}填写即可`
                            );
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage', vrl);
                    } else {
                        alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.启动时选择打开特定网页或一组网页。3.输入：" + vrl + "点击确定。");
                    }
                }
            },
            addFavorite() {
                var url = window.location;
                var title = document.title;
                var ua = navigator.userAgent.toLowerCase();
                if(ua.indexOf("360se") > -1) {
                    alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
                } else if(ua.indexOf("msie 8") > -1) {
                    window.external.AddToFavoritesBar(url, title); //IE8
                } else if(document.all) { //IE类浏览器
                    try {
                        window.external.addFavorite(url, title);
                    } catch(e) {
                        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
                    }
                } else if(window.sidebar) { //firfox等浏览器；
                    if(window.sidebar.addPanel) {
                        window.sidebar.addPanel(title, url, "");
                    } else {
                        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
                    }

                } else {
                    alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
                }
            },
            handleCommand(command) {
                // var _this = this;
                //
                // if(command == "logout") {
                //     layer.confirm('确定退出登录？', function() {
                //         $.post(_this.conf.base_server + "api-auth/oauth/remove/token?access_token=" + _this.conf.getToken().access_token, {}, function(data) {
                //             _this.conf.removeToken();
                //             location.replace("../../index.html");
                //         });
                //     });
                // }
                // if(command == "info") {
                //     //个人信息
                //     window.location.href = "../comm/dpInfo.html";
                // }
                // if(command == "qy") {
                //     //企业信息维护
                //     window.location.href = "../comm/qyInfo.html";
                // }
            },
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/css/common.css";
</style>