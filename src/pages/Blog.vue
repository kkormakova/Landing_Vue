<template>
    <BannerComponent heading='Articles & News' pageName='Blog' :class="'blog-banner-bgImg'" :isBreadCrumbs='true'/>
    <LatestPostComponent />
    <BlogArticlesComponent />
    <FooterComponent />
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue'; 
    import BannerComponent from '../components/BannerComponent.vue';
    import LatestPostComponent from '@/components/LatestPostComponent.vue';
    import BlogArticlesComponent from '@/components/BlogArticlesComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';


export default {
    name: 'Blog',
    components: {
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        LatestPostComponent,
        BlogArticlesComponent
    }    
}
</script>

<style scoped lang="scss">
    .blog-banner-bgImg {
        background-image: url('@/assets/BlogImg/blogBanner.jpg');
    }
</style>