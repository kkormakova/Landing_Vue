<template>
    <BannerComponent :isBreadCrumbs="false" :class="'projectDeteils-banner-bgImg'"/>
    <ProjectDetailsItem />
    <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import ProjectDetailsItem from '@/components/ProjectDetailsItem.vue';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            BannerComponent,
            ProjectDetailsItem,
        }
    }
</script>

<style scoped lang="scss">
.projectDeteils-banner-bgImg {
    background-image: url('@/assets/ProjectDetailsImg/projectDetails-banner.jpg');
}
</style>