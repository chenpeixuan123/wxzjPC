<template>
  <div class="login">
    <!-- 头部导航 -->
    <el-row>
      <div class="title">
        <el-col :span="23" :offset="1">
          <h2>住宅维修资金云管理平台<span>用户注册</span></h2>
        </el-col>
      </div>

    </el-row>

    <!-- 步骤一 -->
    <div class="first" v-show='index==1'>
      <div class="content">
        <div class="tabChange">
          <div class="active">选择账户信息</div>
          <div >填写账户信息</div>
          <div >验证账户信息</div>
          <div >注册成功</div>
        </div>
        <el-card class="box-card">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="所属市：" class='hMargin'>
              <el-select v-model="form.city" placeholder="请选择所属市" class='xuanzek' size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属县（区）：" class='hMargin'>
              <el-select v-model="form.county" placeholder="请选择所属县（区）" class='xuanzek' size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户类型：" class='hMargin'>
              <el-select v-model="form.mold" placeholder="请选择用户类型"class='xuanzek' size="mini">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="wai_btn">
            <div class='btn' @click="next">下一步</div>
            <div class="haveLogin">
              .......................... <span>我有账户，现在就<i>登录</i></span> ..........................
            </div>
          </div>

        </el-card>
      </div>
    </div>


    <!-- 步骤二 -->
    <div class="second" v-show='index==2'>
      <div class="content">
        <div class="tabChange">
          <div class="active">选择账户信息</div>
          <div class="active1">填写账户信息</div>
          <div >验证账户信息</div>
          <div >注册成功</div>
        </div>
        <el-card class="box-card">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label=" 用户名：" class='hMargin'>
              <el-input v-model="form.name" placeholder="请输入用户名" class='xuanzek' size="mini"></el-input>
            </el-form-item>
            <el-form-item label="密码：" class='hMargin'>
              <el-input type='password' v-model="form.password" placeholder="请输入密码" class='xuanzek' size="mini"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" class='hMargin'>
              <el-input v-model="form.shurePassword" placeholder="请输入确认密码" class='xuanzek' size="mini"></el-input>
            </el-form-item>
          </el-form>
          <div class="wai_btn">
            <div class="twoButton">
              <div class='btn twoBtn' @click="prev">上一步</div>
              <div class='btn twoBtn' @click="next">下一步</div>
            </div>
            <div class="haveLogin">
              .......................... <span>我有账户，现在就<i>登录</i></span> ..........................
            </div>
          </div>

        </el-card>
      </div>
    </div>


    <!-- 步骤三 -->
    <div class="three" v-show='index==3'>
      <div class="content">
        <div class="tabChange">
          <div class="active">选择账户信息</div>
          <div class="active1">填写账户信息</div>
          <div class="active1">验证账户信息</div>
          <div >注册成功</div>
        </div>
        <el-card class="box-card">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="联系电话：" class='hMargin'>
              <el-input  placeholder="请输入联系电话" class='xuanzek' size="mini"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码：" class='hMargin'>
              <div class="yzm">
                <el-input  placeholder="请输入短信验证码" class='yzmInput' size="mini"></el-input>
                <div class="yzmBtn">获取验证码</div>
              </div>
            </el-form-item>
            <el-form-item label="验证：" class='hMargin'>
              <div class="verify-wrap" id="verify-wrap"></div>
            </el-form-item>
          </el-form>
          <div class="wai_btn">
            <div class="twoButton">
              <div class='btn twoBtn' @click="prev">上一步</div>
              <div class='btn twoBtn' @click="next">下一步</div>
            </div>
            <div class="haveLogin">
              .......................... <span>我有账户，现在就<i>登录</i></span> ..........................
            </div>
          </div>

        </el-card>
      </div>

    </div>



    <!-- 步骤四 -->
    <div class="first" v-show='index==4'>
      <div class="content">
        <div class="tabChange">
          <div class="active">选择账户信息</div>
          <div class="active1">填写账户信息</div>
          <div class="active1">验证账户信息</div>
          <div class="active2">注册成功</div>
        </div>
        <el-card class="box-card successBox">
          <div class="success">
            <img src="../assets/images/login/success_img.png" >
            <p>恭喜您！注册成功</p>
          </div>
          <div class="wai_btn">
            <div class="haveLogin">
              .......................... <span>我有账户，现在就<i>登录</i></span> ..........................
            </div>
          </div>

        </el-card>
      </div>

  </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'login',
  data(){
    return{
      form: {
        city: '',
        county:'',
        mold:''
      },
      index:1,
      password:'',
      shurePassword:'',
    }
  },
  mounted(){

    var SlideVerifyPlug = window.slideVerifyPlug;
    var slideVerify = new SlideVerifyPlug('#verify-wrap',{
      wrapWidth:'286',//设置 容器的宽度 ,不设置的话，会设置成100%，需要自己在外层包层div,设置宽度，这是为了适应方便点；
      initText:'请按住滑块，拖动到最右边',  //设置  初始的 显示文字
      sucessText:'验证通过',//设置 验证通过 显示的文字
      getSuccessState:function(res){
        //当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了
        console.log(res);
        if(slideVerify.slideFinishState){
          $('.value').html(slideVerify.slideFinishState)
          $('#resetBtn').removeClass('prohibit')
        }
      }
    });
    $("#resetBtn").on('click',function(){
      $('.value').html('false')
      $('#resetBtn').addClass('prohibit')
      slideVerify.resetVerify();//可以重置 插件 回到初始状态
    })
    $('#resetBtn').addClass('prohibit')
  },
  methods:{
    next(){
      const that=this;
      const change={
        1(){
          that.index++;
        },
        2(){
          that.index++;
        },
        3(){
          that.index++;
        },
      }
      change[that.index]();
    },
    prev(){
      const that=this;
      const change={
        2(){
          that.index--;
        },
        3(){
          that.index--;
        },
      }
      change[that.index]();
    }
  }
}
</script>
<style scoped >
  @import "../assets/css/index.css";
  .prohibit{
    cursor: no-drop !important;
    background: #b2afaf !important;
  }
</style>
