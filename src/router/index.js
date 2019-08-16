import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    // mode:"history",
    routes:[
        {
            path:"/",
            name:"index",
            component:()=>import('@/views/Index')
        },
        {
            path:"/tab",
            name:"tab",
            component:()=>import('@/views/Tab')
        },
        {
            path:"/button",
            name:"button",
            component:()=>import('@/views/Button')
        },
        {
            path:"/alert",
            name:"alert",
            component:()=>import('@/views/Alert')
        },
        {
            path:"/message",
            name:"message",
            component:()=>import('@/views/Message')
        },
        {
            path:"/message_box",
            name:"message_box",
            component:()=>import('@/views/MessageBox')
        },
        {
            path:"/step",
            name:"step",
            component:()=>import('@/views/Step')
        },
        {
            path:"/toast",
            name:"toast",
            component:()=>import('@/views/Toast')
        }
    ]
})

export default router
