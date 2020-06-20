import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import fenye from '@/components/fenye'
import login from '@/components/login'
import register from '@/components/register'
import vuex_jian from '@/components/vuex_jian'
import store from '@/store'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
        // 定义全局样式
        linkActiveClass: "nn",
        mode: 'history',
        routes: [{
                path: '/',
                //刷新默认路径
                redirect: '/fenye'
            },
            {
                path: '/demo',
                name: 'demo',
                component: demo
            },
            {
                path: '/fenye',
                name: 'fenye',
                component: fenye
            },
            {
                path: '/login',
                name: '/login',
                component: login
            },
            {
                path: '/register',
                name: '/register',
                component: register
            },
            {
                path: '/vuex_jian',
                name: '/vuex_jian',
                component: vuex_jian
            }
        ]
    })
    // 使用router.beforeEach注册一个全局前置守卫，判断用户是否登录
    // router.beforeEach((to, from, next) => {
    //   if (to.path === '/login') {
    //       next();
    //   } else {
    //       // let _token = store.state.Authorization;
    //       // console.log(token)
    //       let _token = localStorage.getItem('Authorization');
    //       if (_token === 'null' || _token === '') {
    //           next('/login');
    //       } else {
    //           next();
    //       }
    //   }
    // });
export default router