<template>
  <div class="login">
    <div class="logo">
      <img
        src="https://image.zhihuishu.com/zhs/ablecommons/demo/201812/e67093aa50fa477d842b98fe8b04d645.png"
      />
    </div>
    <div class="nav">
      <div class="inner">
        <router-link to class="reg phone">手机号</router-link>
        <router-link to class="reg">学号</router-link>
        <router-link to="/Reg" class="reg reg2">注册</router-link>
        <span class="line"></span>
      </div>
    </div>
    <div class="tel">
      <div class="mgimg">
        <i class="tel_i">
          <img
            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
            alt
          />
        </i>
      </div>
      <input type="text" class="myinp" placeholder="请输入手机号" name="username" />
    </div>
    <div class="tel">
      <div class="mgimg">
        <i class="tel_i">
          <img class="img2"
            src="https://image.zhihuishu.com/zhs/ablecommons/demo/201907/c61567392dac4b5281c8ba0ac13ffe3f.png"
            alt
          />
        </i>
      </div>
      <input type="text" class="myinp" placeholder="请输入密码" name="username" />
    </div>
    <div class="login-btn">
登&nbsp;&nbsp;录
    </div>
    <div class="rem"></div>
  </div>
</template>
<style>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -315px;
  margin-left: -200px;
  width: 400px;
  height: 630px;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 33, 79, 0.11);
  border-radius: 6px;
}
.logo {
  width: 400px;
  height: 70px;
  position: relative;
}
.logo img {
  width: 152px;
  height: 40px;
  position: absolute;
  left: 124px;
  bottom: 0;
}
.nav {
  margin-top: 46px;
  width: 400px;
  height: 46px;
  border-bottom: 1px solid #ededed;
}
.nav .inner {
  width: 355px;
  height: 40px;
  margin: 0 auto;
  position: relative;
}
.reg {
  display: inline-block;
  width: 60px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  color: #777;
  transition: all ease-in 0.2s;
  margin-right: 20px;
  margin-left: 5px;
  text-align: center;
}
.phone {
  font-weight: bold;
  font-size: 18px;
  color: #2a2a2a;
}
.line {
  display: inline-block;
  width: 43px;
  height: 4px;
  background-color: #3D84FF;
  position: absolute;
  left: 11px;
  /* left: 6px; 109  284*/
  bottom: 0;
}
.reg2 {
  float: right;
}
.tel {
  width: 340px;
  height: 40px;
  margin: 25px auto;
  position: relative;
  background: #f6f6f6;
  border: 1px solid #ededed;
}
.mgimg {
  display: inline-block;
  width: 40px;
  height: 20px;
  position: absolute;
  text-align: center;
  border-right: 1px solid #ededed;
  top: 10px;
  overflow: hidden;
}
.tel_i {
  display: inline-block;
  width: 18px;
  height: 20px;
  position: relative;
}
.myinp::-webkit-input-placeholder{
  color:#cbcbcb;
  font-size: 18px;
}
.myinp {
  border: none;
  background: #f6f6f6;
  width: 340px;
  padding-left: 55px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #3d4059;
  box-sizing: border-box;
}
.img2{
  position: absolute;
  top: 0;
  left: -89px;
}
.login-btn{
     margin: 42px auto 0;
    width: 340px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background: #3D84FF;

}
.rem{
      width: 340px;
    height: 20px;
    margin: 13px auto 0;
    position: relative;
    background-color: #cbcbcb;
}
</style>