<template>
    <section class="project-cards container">
        <div class="buttons">
            <button  @click="filterCards(btn)" class="btn text" v-for="btn in GET_BTN_LIST">{{btn}}</button>
        </div>
        <div class="card-grid">
            <ProjectCardComponent v-for="card in GET_FILTERED_CARD_LIST" :key="card.id" :card="card"/>
        </div>
        <div class="articles__pagination">
            <div class="articles__pagination__link current">01</div>
            <div class="articles__pagination__link">02</div>
            <div class="articles__pagination__link">03</div>
            <div class="articles__pagination__link next-page">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCardComponent from './ProjectCardComponent.vue';
import { mapState, mapMutations, mapGetters, mapActions} from 'vuex';

export default {
    name: 'ProjectCardList',
    components: {
        ProjectCardComponent,
    },
    computed: {
        ...mapState(['isActive', 'btnList', 'cardList', 'filteredCardList']),
        ...mapGetters(['GET_IS_ACTIVE', 'GET_BTN_LIST', 'GET_CARD_LIST', 'GET_FILTERED_CARD_LIST'])
    },
    methods: {
        ...mapMutations(['filterCards'])
    }   
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.project-cards {
    text-align: center;
    margin-bottom: 200px;
}
.card-grid {
    column-count: 2;
    gap: 30px;
}
.text {
    font-size: 18px;
    font-weight: 600;
}
.buttons {
    border: 1px solid;
    border-color: #CDA274;
    border-radius: 18px;
    text-align: center;
    display: inline-block;
    margin-bottom: 60px;
}
.btn {
    border-radius: 18px;
    border-style: none;
    padding: 26px 66px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
        background-color: #CDA274;
        color: #fff;
    }
}
.active {
        background-color: #CDA274;
        color: #fff;
    }
.articles__pagination {
    margin-top: 60px;

}
</style>