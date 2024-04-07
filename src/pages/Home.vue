<template>
    <HomeBannerComponent />
    <HomeProjectComponent />
    <HomeCounterComponent />
    <HomeBlogComponent />
    <FooterComponent />
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import HomeBannerComponent from '../components/HomeBannerComponent.vue';
import HomeProjectComponent from '@/components/HomeProjectComponent.vue';
import HomeCounterComponent from '@/components/HomeCounterComponent.vue';
import HomeBlogComponent from '@/components/HomeBlogComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
    export default {
        name: 'Home',
        components: {
            HeaderComponent,
            HomeBannerComponent,
            HomeProjectComponent,
            HomeCounterComponent,
            HomeBlogComponent,
            FooterComponent,
        },
    }
</script>

<style lang="scss" scoped>
</style>