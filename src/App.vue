<template>
  <HeaderComponent />
  <RouterView />
</template>

<script>
import Home from './pages/Home.vue';
import BlogDetails from './pages/BlogDetails.vue';
import Blog from './pages/Blog.vue';
import Project from './pages/Project.vue';
import ProjectDetails from './pages/ProjectDetails.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    Home,
    BlogDetails,
    Blog,
    Project,
    ProjectDetails,
    HeaderComponent,
  }
}
</script>

<style>
</style>

