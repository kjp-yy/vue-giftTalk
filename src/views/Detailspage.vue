<template>

  <div>
    <div class="main">
      <div class="left_main">
        <div class="left_image" >
          <img src="../assets/logo.png" alt />
          <div class="left_main_1"  ></div>
        </div>

        <ul class="ul_imges">
          <li>
            <img src="../assets/logo.png" alt />
          </li>
          <li>
            <img src="../assets/logo.png" alt />
          </li>
          <li>
            <img src="../assets/logo.png" alt />
          </li>
          <li>
            <img src="../assets/logo.png" alt />
          </li>
          <li>
            <img src="../assets/logo.png" alt />
          </li>
        </ul>
        <div class="left_main_2">
          <img src alt />
        </div>
      </div>
      <div class="right_main" >
        <div class="gvname">
          <router-link to>
            <img src="../assets/xin.png" alt />
          </router-link>
          <router-link to>1280</router-link>
        </div>

        <router-link class="rou-2" to>
          <p>{{listll.brandName}}</p>
        </router-link>
        <div class="gdName">{{listll.note}}</div>
        <div class="infoItem">
          价格：
          <span>￥{{listll.price}}</span>
        </div>
        <div class="shipNote">
          <div class="shipNote-1">
            <p>免运费</p>
          </div>
          <div class="shipNote-2">
            <p>正版授权</p>
          </div>
        </div>
        <div class="infoItem_sizeCon">
          组合：
          <div class="itemCon">
            <a href>{{listll.name}}</a>
            <a href>{{listll.productCategoryName}}</a>
          </div>
        </div>
        <div class="infoItem_amountCon">
          数量：
          <input type="button" value="-" @click="jian()" />
          <input class="input2" type="text" v-model="num" readonly />
          <input type="button" value="+" @click="jia()" />
        </div>
        <div class="infoItem_buyAll">
          <a href>立即购买</a>
        </div>
        <div class="infoItem_amount">
          <div class="jian">
            <a href>
              <span>加入购物车</span>
            </a>
          </div>
          <div class="jia">
            <a href>
              <span>分享</span>
            </a>
          </div>
        </div>
      </div>
      <div class="banner">
       
        <el-link :underline="false">猜你喜欢</el-link>
         <div class="banner-1" style="height:292px">
        <a href>
          <div class="banner_one">
            <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" alt />
          </div>
        </a>
        <a href>
          <div class="div_name">野性mini便携式蓝牙音箱</div>
          <div class="div_brand">猫王</div>
          <div class="div_price">
            <div style="height:24px;color:#3193F3;font-size: 14px;display: inline;">￥399</div>
            <div style="display: inline;margin-top:4px;height:20px;color: rgb(153, 153, 153); text-decoration: line-through;font-size: 12px;">￥499</div>
          </div>
        </a>
      </div>
       </div>
    </div>
    <div class="demo-image__lazy">
      <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
  </div>
</template>
<script>
export default {
 
  data() {
    return {
      num: 1,
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ],
     a:'',
     listll:{},
    //  gouwu:{}
    };
  },
  mounted(){
  
    this.a=this.$route.params.detail_id;
      this.xiangqing();
      // this.gwu()
  },
  methods: {
    jian() {
      if(this.num==1){
        this.num-=0;
      }else{
        this.num-=1;
      }
    },
    jia() {
      this.num += 1;
    },
    xiangqing() {
      // let datalist = new FormData();
      // datalist.append= ('id',this.id)
       this.$axios.get('/swag/product/detail/'+this.a,
       ).then(res=>{
         console.log(res);
         this.listll=res.data.data.product
       })
    },
    // gwu() {
    //    this.$axios.post('/swag/cart/add').then(res=> {
    //     console.log(res)
    //   })
    // }
  }
};
</script>

<style lang="scss">
.main {
  width: 1000px;
  display: flex;

  margin: 0 auto;
  // border: 1px solid yellowgreen;
  .left_main {
    width: 400px;
    position: relative;
    .left_main_1 {
      width: 50px;
      height: 50px;
      background: cyan;
      position: absolute;
      top: 0px;
      left: 25px;
    }
    .left_image {
      width: 350px;
      height: 350px;
      // border: 1px solid black;
      margin: 0 auto;
      img {
        width: 350px;
        height: 350px;
      }
    }
    .ul_imges {
      display: flex;
      list-style: none;
      width: 350px;
      padding-inline-start: 0px;
      margin: 0 auto;
      margin-top: 20px;
      li {
        width: 63px;
        height: 63px;
        margin: 0px 0px 0px 5px;
        border: 1px solid yellowgreen;
        img {
          width: 63px;
          height: 63px;
        }
      }
    }
    .left_main_2 {
      width: 350px;
      height: 350px;
      position: absolute;
      top: 0px;
      left: 380px;
      border: 1px solid red;
      overflow: hidden;
      display: none;
      .left_main_2 img {
        width: 600px;
        height: 600px;
        display: block;
      }
    }
  }
  .right_main {
    width: 350px;
    margin-left: 30px;
    .gvname {
      display: flex;
      img {
        width: 20px;
        height: 20px;
        color: brown;
      }
      a {
        display: block;
        text-decoration: none;
        color: black;
      }
    }
  }
  .rou-2 {
    font-size: 24px;
    margin-top: 20px;
    text-decoration: none;
    color: #878787;
    line-height: 46px;
    p {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
  }
  .gdName {
    font-size: 20px;
    width: 350px;
    color: #333;
    line-height: 20px;
  }
  .infoItem {
    line-height: 50px;
    font-size: 12px;
    span {
      color: rgb(16, 131, 255);
      font-size: 18px;
    }
  }
  .shipNote {
    display: flex;
    margin-left: 80px;
    .shipNote-1 {
      width: 70px;
      background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24690.png)
        no-repeat left center;
      margin-left: 0px;
      background-size: 14px 14px;
      padding-left: 17px;
      color: rgb(153, 153, 153);
    }
    .shipNote-2 {
      width: 70px;
      background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24689.png)
        no-repeat left center;
      background-size: 12px 14px;
      padding-left: 17px;
      color: rgb(153, 153, 153);
    }
  }
  .infoItem_sizeCon {
    font-size: 10px;
    a {
      padding: 2px 10px;
      height: 20px;
      display: inline-block;
      line-height: 20px;
      color: #999;
      font-size: 13px;
     display: block;
      background: #dcdcdc;
      margin-top: 5px;
    }
  }
  .infoItem_amountCon {
    margin-top: 30px;
    font-size: 10px;
    .input2 {
      margin: 0px 7px;
      width: 52px;
      height: 24px;
      display: inline-block;
      line-height: 24px;
      vertical-align: middle;
      color: #666;
      font-size: 13px;
      border: none;
      background: white;
      text-align: center;
      border: 1px solid rgb(238, 238, 238);
      resize: none;
      outline: none;
    }
  }
  .infoItem_buyAll {
    width: 350px;
    background-color: black;
    text-align: center;
    margin-top: 10px;
    a {
      line-height: 50px;
      text-decoration: none;
      color: white;
      display: block;
    }
  }
  .infoItem_amount {
    width: 350px;
    display: flex;
    margin-top: 10px;
  }
  .jian {
    a {
      display: inline-block;
      width: 160px;
      height: 32px;
      border: none;
      color: black;
      line-height: 32px;
      text-decoration: none;
      font-size: 13px;
      border: 1px solid black;
      background-color: #fff;
      background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24749.png)
        #fff no-repeat;
      background-size: 15px;
      background-position: 38px 8px;
      span {
        margin-left: 56px;
      }
    }
  }
  .jia {
    a {
      display: inline-block;
      width: 160px;
      height: 32px;
      margin-left: 22px;
      border: none;
      color: black;
      line-height: 32px;
      text-decoration: none;
      font-size: 13px;
      border: 1px solid black;
      background-color: #fff;
      background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24746.png)
        #fff no-repeat;
      background-size: 15px;
      background-position: 38px 8px;
      span {
        margin-left: 60px;
      }
    }
  }
}
.banner {
  margin-left: 50px;
  width: 200px;

  a {
    display: block;
    .banner_one {
      width: 200px;
      height: 180px;
      margin-top: 10px;
      border: 1px solid yellowgreen;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  a {
    text-decoration: none;
    color: black;
    .div_name {
      font-size: 12px;
      margin-top: 10px;
    }
    .div_brand {
      font-size: 12px;
      margin-top: 10px;
      color: rgb(153, 153, 153);
    }
   
  }
  .div_price{
    height: 48px;
    margin-top: 10px;
  }
}
.demo-image__lazy {
  width: 800px;
  margin: 0px 0px 0px 220px;
  display: inline-block;
  margin-top: 30px;
}
.el-link.el-link--default:hover {
  color: black;
}
.el-link.el-link--default {
  color: black;
}
.el-link {
  font-weight: 800;
  font-size: 18px;
}
</style>