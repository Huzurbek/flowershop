import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import MainPage from "@/views/MainPage.vue";
import Demo from "@/views/Demo.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/mainpage",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/demo",
        name: "Demo",
        component: Demo,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;