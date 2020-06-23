<template>
  <div class="body">
    <!-- 头部 -->
    <top></top>
    <!-- 轮播图 -->
    <div class="wrap_slider">
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
    </div>
    <!-- main_list -->
    <div class="wrap">
      <div class="main_list">
        <ul class="mian_first">
          <li
            v-for="(item,index) in main_list"
            :key="index"
            :class="step==index?class2:class1"
            @click="change(index)"
          >{{item.name}}</li>
        </ul>
        <ul class="main_list_all">
          <li v-for="(it,index) in childrenitem" :key="index"  @click='jump_detail(it.id)'>
            <h3>{{it.name}}</h3>
          </li>
        </ul>
      </div>
    </div>
    <!--今日精选 -->
    <!-- <div class="wrap">
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
    </div>-->
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
      // main_list 获取数据
      main_list: [],
      main_list_all: [],
      step: 0,
      class1: "tablist",
      class2: "tablist active",
      childrenitem: []
    };
  },
  mounted() {
    this.$axios.get("/swag/product/categoryTreeList").then(res => {
      this.main_list = res.data.data;
    this.change(0)
    });
  },
  methods: {
    // 跳转到详情页
    jump_detail(x){
    //跳转到详情页并且传id 
    //  this.$router.push({name: '/test', params: {detail_id: x}})
    },
    // 改变商品分类
    change(n) {
      this.step = n;
      this.childrenitem = this.main_list[n].children;
    }
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
  margin-top: 20px;
  .mian_first {
    display: flex;
    justify-content: space-around;
    li {
      list-style-type: none;
      cursor: pointer;
    }
  }
  .main_list_all {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
    flex-direction: row;
    li {
      list-style-type: none;
    }
    h3 {
      font-size: 16px;
      text-align: center;
      width: 100px;
      height: 50px;
      background: #F0F0F0;
      border-radius: 50px;
      line-height: 50px;
      cursor: pointer;
    }
  }
}
.tablist {
  width: 25%;
  height: 40px;
  margin: 0 10px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  background-color: rgba(87, 79, 79, 0.5);
  color: white;
  font-weight: bold;
  float: left;
}
.active {
  background-color: gold;
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