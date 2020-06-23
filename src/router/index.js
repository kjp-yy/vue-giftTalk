import Vue from 'vue'
import Router from 'vue-router'
import fenye from '@/views/fenye'
import login from '@/components/login'
import register from '@/components/register'
import modify_pwd from '@/components/modify_pwd'
import store from '@/store'
import Detailspage from '@/views/Detailspage'
<<<<<<< HEAD
import ll from '@/views/ll'
import shoppingCart from '@/components/shoppingCart'
=======
>>>>>>> 94a74d7a5d8407d3d6c7d823177e8cfc7db290d1
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
                path: '/fenye',
                name: 'fenye',
                component: fenye
            },
            {
                path: '/shoppingCart',
                name: 'shoppingCart',
                component: shoppingCart
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
                path: '/modify_pwd',
                name: '/modify_pwd',
                component: modify_pwd
            },
            {
                path: '/Detailspage',
                name: '/Detailspage',
                component: Detailspage
            },
        
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