import { createRouter,createWebHistory } from "vue-router"
import  Home  from "../views/Home.vue";
import  School  from "../views/School.vue";

const routes =
[
    {
        path:'/',
        redirect:'/school'
    },
    {
        path:'/school',
        component: School,
        name:'school',
        children:
        [
            {
                path:'test1',
                path:'test1',
                name:'test1',
                component:()=>import('../views/Test1.vue')
            },
            {
                path:'test2',
                name:'test2',
                component:()=>import('../views/Test2.vue')
            }
        ]
    },
    {
        path:'/home',
        component: Home,
        name:'home'
    },
    {
        path:'/about',
        component: ()=>import('../views/About.vue'),
        name:'about'
    },
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router