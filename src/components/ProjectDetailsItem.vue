<template>
    <section class="container">
        <div class="text-content">
            <h2 class="heading">{{ GET_NAME }}</h2>
            <p class="description text">{{ GET_DESCRIPTION }}</p>
        </div>
        <ProjectDetailsSwiperComponent />
    </section>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';
import ProjectDetailsSwiperComponent from './ProjectDetailsSwiperComponent.vue';

export default {
    name: 'ProjectDetailsItem',
    components: {
        ProjectDetailsSwiperComponent,
    },
    computed: {
        ...mapState(['projectItem']),
        ...mapGetters(['GET_NAME', 'GET_DESCRIPTION', 'GET_IMAGES'])
    },    
}
</script>

<style scoped lang="scss">
.text-content {
    padding-right: 270px;
    padding-left: 270px;
    margin-bottom: 100px;
}
.heading {
    margin-bottom: 15px;
}
.description {
    white-space: pre-line;
}
</style>