import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        name: "home",
        path: "/",
        component: () => import("../views/home/index.vue")
    },
    {
        name: "server",
        path: "/server",
        component: () => import("../views/server/index.vue")
    },
    {
        name: "term",
        path: "/server/term",
        component: () => import("../views/server/term.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;