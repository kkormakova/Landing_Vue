import { createStore } from "vuex";
import projectDetails from "./modules/projectDetails";
import project from "./modules/project";
import blogDetails from "./modules/blogDetails";
import blog from "./modules/blog";

export default createStore ({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        projectDetails,
        project,
        blogDetails,
        blog,
    }
})