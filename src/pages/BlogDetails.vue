<template>
    <BannerComponent :class="'blogDetails-banner-bgImg'" :isBreadCrumbs='false'/>
    <BlogDetailsArticleComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import BannerComponent from '../components/BannerComponent.vue';
import BlogDetailsArticleComponent from '../components/BlogDetailsArticleComponent.vue';

export default {
    name: 'BlogDetails',
    components: {
        HeaderComponent, 
        FooterComponent, 
        BannerComponent,
        BlogDetailsArticleComponent,
    }
}
</script>

<style lang="scss">
    .blogDetails-banner-bgImg {
        background-image: url('@/assets/BlogDetailsArticleImg/blogDetailsBanner.jpg');
    }
</style>