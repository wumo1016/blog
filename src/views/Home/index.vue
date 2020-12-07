<template>
  <div class="Home" :style="Background">
    <div class="Home_box">
      <div class="Home_Con">
        <div class="icon">
          <i class="iconfont iconhuaban"></i>
        </div>
        <div class="middleline"></div>
        <div class="sweet">
          <div v-if="sweetNote">
            {{ sweetNote }}
          </div>
          <div v-else class="loader">
            <div>l</div>
            <div>o</div>
            <div>a</div>
            <div>d</div>
            <div>i</div>
            <div>n</div>
            <div>g</div>
          </div>
        </div>
      </div>
      <div class="Home_footer">
        <div class="contact">
          <a href="https://www.toutiao.com/c/user/6479536010/#mid=1622002594754574" target="_black">
            <i class="iconfont icontoutiao"></i>
          </a>
          <a href="https://github.com/wumo1016" target="_black">
            <i class="iconfont icongithub"></i>
          </a>
          <a href="https://juejin.im/user/5bfcf0656fb9a049fe34d586" target="_black">
            <i class="iconfont iconjuejin"></i>
          </a>
          <a href="https://www.zhihu.com/people/wu-yi-bo-85-17/activities" target="_black">
            <i class="iconfont iconzhihu"></i>
          </a>
          <el-popover placement="top" trigger="click">
            <img src="@/assets/weixin.jpg" alt="">
            <div class="align_right">
              微信号：wyb760478279
            </div>
            <div slot="reference">
              <i class="iconfont iconweixin1"></i>
            </div>
          </el-popover>
          <el-popover placement="top" trigger="click">
            <div>
              <label class="emailLabel">QQ邮箱</label>：760478279@qq.com<br>
              <label class="emailLabel">Google邮箱</label>：760478279wyb@gmail.com<br>
            </div>
            <div slot="reference">
              <i class="iconfont iconyouxiang"></i>
            </div>
          </el-popover>
          <el-popover placement="top" trigger="click">
            <div class="gongzhonghao">
              <img src="@/assets/gongzhonghao.png" alt="">
            </div>
            <div slot="reference">
              <i class="iconfont icongongzhonghao"></i>
            </div>
          </el-popover>
          <el-popover placement="top" trigger="click">
            <img src="@/assets/xiaochengxu.jpg" alt="">
            <div class="align_right">
              微信小程序体验版
            </div>
            <div slot="reference">
              <i class="iconfont iconxiaochengxu"></i>
            </div>
          </el-popover>
        </div>
        <div class="copyright">
          ©2020 BY 舞1
          <a class="beian" rel="nofollow" href="http://www.beian.miit.gov.cn" target="_blank">豫ICP备19047103号-1</a>
        </div>
      </div>
      <div class="wangzhi">
        <img src="@/assets/store.png" alt="">
        <div>扫码GET更多</div>
      </div>
      <div v-if="!isPC" ref="refresh" class="Home_reload" :class="{'Home_reload_animate':!sweetNote}" @click="refresh">
        <i class="iconfont iconshuaxin"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { isPC } from '@p/tools'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      sweetNote: '',
      isPC: isPC(),
    }
  },
  computed: {
    /* Background() {
      const num = Math.ceil(Math.random() * 100)
      const urls = window.screen.width > 600 ? 'https://api.ixiaowai.cn/gqapi/gqapi.php'
        : `http://47.100.139.95:1003/hx/${num}.jpg`
      return `
      background: url('${urls}?${new Date().getTime()}') no-repeat;
      background-position: center center;
      background-size: cover;
      `
    } */
    Background() {
      return `
      background: url('${window.screen.width > 600 ? 'https://api.ixiaowai.cn/gqapi/gqapi.php'
    : 'http://api.btstu.cn/sjbz/zsy.php'}?${new Date().getTime()}') no-repeat;
      background-position: center center;
      background-size: cover;
      `
    }
  },
  mounted() {
    this.$axios.get('/sweet/api/SweetNothings').then(res => {
      this.sweetNote = res.data
    })
  },
  methods: {
    refresh() {
      location.reload()
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
.Home {
  height: 100%;
  color: white;
  .Home_box {
    height: 100%;
    background: rgba(0, 0, 0, 0.308);
    position: relative;
  }
  .Home_Con {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-80%);
    .iconhuaban {
      font-size: 80px;
      border: 1px solid white;
      border-radius: 50%;
      padding: 15px;
    }
    .middleline {
      height: 50px;
      width: 1px;
      background: white;
      margin: auto;
      margin-top: 12px;
    }
    .sweet {
      position: relative;
      margin: auto;
      width: 60%;
      padding: 30px 10%;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      font-size: 22px;
      line-height: 30px;
      letter-spacing: 2px;
      font-family: FangSong;
    }
    @media screen and (max-width: 600px) {
      .sweet {
        width: 90%;
        font-size: 14px;
        padding: 20px 10px;
        line-height: 18px;
        font-family: "微软雅黑";
      }
    }
  }
  .Home_footer {
    position: absolute;
    // bottom: 160px;
    bottom: 50px;
    width: 100%;
    animation: footer 0.5s 1 linear;
    .contact {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .iconfont {
        font-size: 20px;
        cursor: pointer;
        padding: 0 5px;
      }
    }
    .copyright {
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        content: "";
        display: inline-block;
        width: 40px;
        border-top: 1px solid white;
        margin-right: 10px;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 40px;
        border-top: 1px solid white;
        margin-left: 10px;
      }
      .beian {
        margin-left: 10px;
        &:hover {
          color: rgb(73, 73, 247);
          text-decoration: underline;
        }
      }
    }
  }
  @keyframes footer {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .wangzhi {
    display: none;
    position: absolute;
    img {
      width: 100px;
      height: auto;
    }
    bottom: 160px;
    left: 30%;
  }
  .Home_reload {
    position: absolute;
    top: 20px;
    right: 20px;
    .iconfont {
      font-size: 22px;
    }
  }
  .Home_reload_animate {
    animation: refresh 2s infinite linear;
    -webkit-animation: refresh 2s infinite linear;
    -moz-animation: refresh 2s infinite linear;
    -mos-animation: refresh 2s infinite linear;
    -o-animation: refresh 2s infinite linear;
  }
  @keyframes refresh {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.el-popover {
  img {
    width: 200px;
    height: auto;
  }
  .gongzhonghao {
    width: 300px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
@media screen and (max-width: 600px) {
  .Home {
    background-position: center center;
    background-size: cover;
  }
  .el-popover {
    img {
      width: 150px;
      height: auto;
    }
    .gongzhonghao {
      width: 250px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .Home_footer {
    bottom: 20px !important;
  }
}

.emailLabel {
  display: inline-block;
  width: 78px;
  text-align: justify;
  text-align-last: justify;
}
</style>
