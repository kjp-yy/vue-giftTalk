<template>
  <div class="body">
    <!-- 头部 -->
    <top></top>
    <!-- 轮播图 -->
    <div class="main_right">
      <div class="banner" id="banner">
        <a href="#" class="d1" style="background:url(../../static/img/1.jpg) center no-repeat;"></a>
        <a href="#" class="d1" style="background:url(../../static/img/2.jpg) center no-repeat;"></a>
        <a href="#" class="d1" style="background:url(../../static/img/3.jpg) center no-repeat;"></a>
        <a href="#" class="d1" style="background:url(../../static/img/4.jpg) center no-repeat;"></a>
        <a href="#" class="d1" style="background:url(../../static/img/5.jpg) center no-repeat;"></a>
        <div class="d2" id="banner_id">
          <ul>
            <li>
              <img src="../../static/img/1.jpg" alt />
            </li>
            <li>
              <img src="../../static/img/2.jpg" alt />
            </li>
            <li>
              <img src="../../static/img/3.jpg" alt />
            </li>
            <li>
              <img src="../../static/img/4.jpg" alt />
            </li>
            <li>
              <img src="../../static/img/5.jpg" alt />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- main_list -->
    <div class="wrap">
      <ul class="main_list">
        <li>
          <a href="#">
            <img src="../../static/img/main_list1.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../static/img/main_list1.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../static/img/main_list1.jpg" alt />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../static/img/main_list1.jpg" alt />
            <div class="kuai">
              <img src="../../static/img/jiantou.png" alt />
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../static/img/main_list1.jpg" alt />
          </a>
        </li>
      </ul>
    </div>
    <!--今日精选 -->
    <div class="wrap">
      <div class="selected_today">
        <div class="s_head">
          <div class="head_left">
            <h1>今日精选</h1>
            <p>
              礼物说已累计帮助
              <span>2000</span>人送出礼物
            </p>
          </div>
          <div class="head_right">
            <div class="zuo">
              <img src="../../static/img/zuo.png" alt />
            </div>
            <div class="you">
              <img src="../../static/img/you.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="shoppingCart"><button>跳转</button></router-link>
  </div>
</template>
<script>
import top from "@/components/header";
import "../../static/lunbo";
export default {
  components: {
    top
    // child
  },
  data() {
    return {
    };

  },
  mounted() {
    this.$axios.get("/");
  },
  methods: {
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.body {
  background: #fafafa;
}
.wrap {
  width: 1200px;
  margin: 0 auto;
}
.title {
  color: red;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
// 轮播图
.main_right {
  width: 100%;
  height: 420px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  margin-top: 110px;
  .banner {
    width: 100%;
    height: 420px;
    // background: pink;
    overflow: hidden;
    position: relative;
    .d1 {
      width: 100%;
      height: 420px;
      display: block;
      position: absolute;
      left: 0px;
      top: 0px;
    }
    .d2 {
      width: 120px;
      clear: both;
      position: absolute;
      z-index: 100;
      top: 12%;
      right: 5%;
      li {
        width: 105px;
        height: 56px;
        overflow: hidden;
        cursor: pointer;
        margin: 6px 3px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
.nuw {
  width: 103px;
  border: 2px solid #fff;
  transition: all 0.3s;
}
// main_list
.main_list {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  li {
    position: relative;
    list-style-type: none;
    a {
      width: 228px;
      height: 168px;
      display: inline-block;
      overflow: hidden;
      border-radius: 5px;
      img {
        width: 228px;
        height: 168px;
        border-radius: 5px;
        transition: all 0.3s linear;
        &:hover {
          transform: scale(1.1);
        }
      }
      &:hover .kuai {
        animation: jianjin 0.3s linear;
        img {
          animation: jianjin1 0.3s linear;
        }
        @keyframes jianjin {
          0% {
            width: 0;
          }
          100% {
            width: 54px;
          }
        }
        @keyframes jianjin1 {
          0% {
            width: 0;
          }
          100% {
            width: 30px;
          }
        }
      }
      .kuai {
        position: absolute;
        bottom: -10px;
        left: 184px;
        width: 0;
        height: 34px;
        background: #d7103b;
        box-shadow: 0 6px 10px 0 rgba(215, 16, 59, 0.16);
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 0;
          height: 20px;
        }
      }
    }
  }
}
// 今日精选
.selected_today {
  width: 100%;
  display: flex;
  background: pink;
  .s_head {
    width: 1200px;
    margin-top: 45px;
    background: olive;
    display: flex;
    justify-content: space-between;
    .head_left {
      display: flex;
      h1 {
        font-weight: 600;
        font-size: 30px;
        line-height: 42px;
      }
      p {
        font-size: 14px;
        color: #7e7e7e;
        display: flex;
        margin-left: 30px;
        span {
          display: block;
          font-weight: bold;
        }
      }
    }
    .head_right {
      display: flex;
      background: orange;
      .zuo,
      .you {
        width: 34px;
        height: 40px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #d6d6d6;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 14px;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>