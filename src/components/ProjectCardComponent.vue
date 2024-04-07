<template>
    <div class="card">
        <img :src="card.img">
        <div class="card__content">    
            <div>
                <p class="title">{{ card.name }}</p>
                <p class="text">{{ card.path }}</p>
            </div>
            <router-link to="/project-details" class="blog__item__link">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        card: Object,
    }
}
</script>

<style scoped lang="scss">
.card {
    width: 585px;
    margin-bottom: 35px;
    page-break-inside: avoid;
    break-inside: avoid;
    &__content {
        margin-top: 25px;
        position: relative;
        display: flex;
    }
    & img {
        width: 100%;
        object-fit: cover;
    }
}
.blog__item__link {
    right: 0;
    bottom: 0;
    height: 70px;
    width: 70px;
}
</style>