<template>
    <div>
        <div class="register">
            <h4>[ 网上注册 ]</h4>
            <div class="four_stap">
                <div>
                    <div :class="registerShow>0?'active_bg':''">1</div>
                    <p>选择用户信息</p>
                </div>
                <div>
                    <div :class="registerShow>1?'active_bg':''">2</div>
                    <p>填写账户信息</p>
                </div>
                <div>
                    <div :class="registerShow>2?'active_bg':''">3</div>
                    <p>验证账户信息</p>
                </div>
                <div>
                    <div :class="registerShow>3?'active_bg':''">4</div>
                    <p>注册成功</p>
                </div>
            </div>
            <!-- 第一步 -->
            <div class="stap1_biaodan" v-show="registerShow==1">
                <div>
                    <el-form ref="form" :model="form" label-width="130px">
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属县（区）：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户类型：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="step2_right">
                    <el-form ref="form" :model="form" label-width="130px" style="margin-left: -30px">
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属县（区）：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户类型：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </div>

            <!-- 第二步 -->
            <div class="stap1_biaodan" v-show="registerShow==2">
                <div>
                    <el-form ref="form" :model="form" label-width="130px">
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属县（区）：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户类型：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="step2_right">
                    <el-form ref="form" :model="form" label-width="130px" style="margin-left: -30px">
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属县（区）：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="用户类型：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属市：">
                            <el-select v-model="form.name" placeholder="请选择活动区域" size="mini">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <!-- 第三步 -->
            <div class="stap3_biaodan" v-show="registerShow==3">
                <div>
                    <el-form ref="form" :model="form" label-width="130px" style="margin-left: -30px">
                        <el-form-item label="请输入联系电话:" >
                            <el-input v-model="form.name" size="mini" placeholder="请输入联系电话"></el-input>
                        </el-form-item>
                        <el-form-item label="请输入短信密码:">
                            <el-input v-model="form.name" size="mini" placeholder="请输入短信密码"></el-input>
                        </el-form-item>
                        <el-form-item label="请输入验证码:">
                            <el-input v-model="form.name" size="mini" placeholder="请输入验证码"></el-input>
                        </el-form-item>

                    </el-form>
                </div>

            </div>
            <!-- 第四步 -->
            <div class="stap4_biaodan" v-show="registerShow==4">
                <div class="stap4_content">
                    <img src="@/assets/images/register/wancheng.png">
                    <p>设置完成，立即<span @click="toLogin">登录</span></p>
                </div>
            </div>
            <div class="prvOrNext" v-show="registerShow!=4&&registerShow!=1">
                <button @click="prv">上一步</button>
                <button @click="next">下一步</button>
            </div>
            <button class="next" @click="next" v-show="registerShow==1">下一步</button>
            <p class="alread_name" v-show="registerShow!=4">已有账户，直接<span @click="toLogin"
                                                                         class="toLoginSmall">登录</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{
                registerShow:1,
                form:{
                    name:''
                }
            }
        },
        methods:{
            prv() {
                this.registerShow -= 1;
            },
            next() {
                this.registerShow += 1;
                console.log(this.registerShow)
            },
            toLogin() {
                this.$emit("showRegisterMethods",false)
            }
        }
    }
</script>

<style scoped lang="scss">
    .el-form-item{
        margin-bottom: 5px;
    }
</style>