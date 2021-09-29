import Center from '@/views/Center.vue'
import Cinemas from '@/views/Cinemas.vue'
import Films from '@/views/Films.vue'
import Search from '@/views/Search.vue'
import Detail from '@/views/Detail.vue'
import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
import NowPlaying from '@/views/films/NowPlaying.vue'
import ComingSoon from '@/views/films/ComingSoon.vue'
import City from '@/views/City.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

//注册路由插件
Vue.use(VueRouter)
const routes=[
    {
        path:'/films',
        component:Films,
        children:[
            {
                path:'/films/nowplaying',
                component:NowPlaying
            },
            {
                path:'/films/comingsoon',
                component:ComingSoon
            },
            {
                path:'/films',
                redirect:'/films/nowplaying'
            }
        ]
    },
    {
        path:'/cinemas',
        component:Cinemas
    },
    {
        path:'/cinemas/search',
        component:Search
    },
    {
        path:'/order',
        component:Order,
        meta:{
            isRequire:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isRequire:false //login 加上守卫会导致跳转到登录时出现重复加载登录页
        }
    },
    {
        path:'/detail/:myid',
        component:Detail
    },
    {
        path:'/center',
        component:Center,
        meta:{
            isRequire:true
        }
    },
    {
        path:'/city',
        component:City
    },
    {
        path:'*',
        redirect:'/films'
    }
]


const router = new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.meta.isRequire){
        if(localStorage.getItem('token')){
            next()
        }else{
            // next('/login')
            console.log('111')
            next({
                path:'/login',
                query:{
                    clyredirect: to.fullPath  //这种跳转回把当前页面的路径记录到to.query里面
                }
            })
        }
    }else{
        next()
    }
})
export default router