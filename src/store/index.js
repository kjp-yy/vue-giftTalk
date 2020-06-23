import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        // 定义变量判断是否显示登录
        isLogin:false,
        // 定义Authorization
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        userinfo: {},
        gouwuche:{}
    },
        // 计算state里面的属性
    getters: {
        getUserinfo: state => state.userinfo,
        getIslogin: state => state.isLogin,
        getgouwuche: state =>state.gouwuche
    },
    // 提交更新的数据
    mutations: {
        usertatus(state, user) {
            if (user) {
                state.userinfo = user;
                this.state.isLogin=!this.state.isLogin
            }
        },
        usertat(state, use) {
            state.gouwuche = use;
        },
        // 接收传过来token值并给状态管理里的Authorzation赋值
        changelogin(state, user) {
            state.Authorization == user
                // 存储到本地
            localStorage.setItem('Authorization', user)
        }
    },
    actions: {

    }
});
export default store