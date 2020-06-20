<template>
  <div>
    <top></top>
    <div class="wrap">
      <!-- <child :list="kk"></child> -->
      <!-- <child @send="look($event)"></child> -->
      <!-- {{kk}} -->
      <div style="width:100%;margin:10px auto;margin-top:100px">
        <el-table :data="datalist">
          <el-table-column prop="unixtime" label="时间戳" width="180"></el-table-column>
          <el-table-column label="更新日期" width="180">
            <template slot-scope="scope">
              <div>
                <h3 class="title">{{scope.row.updatetime}}</h3>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="content" label="内容"></el-table-column>
        </el-table>
        <div class="block" style="margin: 10px auto;">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="now_page"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="200"
          ></el-pagination>
          <!-- current-page 当前页数 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import top from "./header";
// import child from "./child_cz";
export default {
  components: {
    top
    // child
  },
  data() {
    return {
      kk: "",
      datalist: [],
      now_page: 0
    };
  },
  mounted() {
    this.getdata();
    // let loca = localStorage.getItem("Authorization");

    // if (loca == "" || loca == null) {
    //   this.$router.push("/login");
    // }
    //  this.$axios.get("/swagger/home/recommendSubject/list",{
    //         params:{
    //             subjectName:this.getTopVal,
    //             recommendStatus:'',
    //             pageSize:10,
    //             pageNum:1
    //         }
    //     }).then(res=>{
    //         console.log(res);
    //         // if (res.data.code==401) {
    //         //     this.$router.push("/")
    //         // }else{
    //         //     this.subjectlist=res.data.data.list;
    //         // }
        
    //     })
  },
  methods: {
  //  获取聚合里面的笑话大全的数据
    getdata() {
      this.$axios
        .get("/juhe/joke/content/list.php", {
          params: {
            key: "7004ec338dd21e2cd9bd5e9598623744",
            time: "1418745237",
            sort: "asc",
            page: this.now_page
          }
        })
        .then(res => {
          this.datalist = res.data.result.data;
        });
    },

    handleCurrentChange(val) {
      this.now_page = val;
      this.getdata();
    }
  }
};
</script>>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
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
</style>