import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import Blog from "@/pages/Blog.vue";
import Project from "@/pages/Project.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog,
    },
    {
        path: '/blog-details',
        name: 'blog-details',
        component: BlogDetails,
    },
    {
        path: '/project',
        name: 'project',
        component: Project,
    },
    {
        path: '/project-details',
        name: 'project-details',
        component: ProjectDetails,
    },
    {
        path: "/:catchAll(.*)",
        name: 'not-found',
        component: NotFound,
    },
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
        }
    }
})

export default router