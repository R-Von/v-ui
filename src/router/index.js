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

    ]
})

export default router
