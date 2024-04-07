<template>
    <swiper :style="{ '--swiper-navigation-color': '#CDA274','--swiper-pagination-color': '#CDA274', }" :zoom="true" :navigation="true" :pagination="{ clickable: true, }" :modules="modules" class="mySwiper container">
        <swiper-slide v-for="item in GET_IMAGES" :key="item">
            <div class="swiper-zoom-container">
                <img :src= "item" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';  
// Import Swiper styles
import 'swiper/css';  
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';    
// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
    name: 'ProjectDetailsSwiper',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
    computed: {
        ...mapState(['projectItem']),
        ...mapGetters(['GET_IMAGES'])
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 800px;
    margin-bottom: 180px;
}
.swiper-slide {
    overflow: hidden;
}
</style>