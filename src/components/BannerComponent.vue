<template>
    <section class="blog__banner">
        <div class="container">
            <div v-if="isBreadCrumbs" class="breadcrumb">
                <h2 class="breadcrumb__name heading">{{ heading }}</h2>
                <p class="breadcrumb__way">
                    <router-link to="/" class="text">Home</router-link>
                    <span class="current-way" href="#">{{ pageName }}</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BannerComponent',
        props: {
            heading: String,
            pageName: String,
            srcImg: String,
            isBreadCrumbs: Boolean,
        },
    }
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.blog__banner {
    height: 356px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 200px;
}
.breadcrumb {
    background-color: #fff;
    padding: 41px 78px;
    max-width: 503px;
    border-radius: 35px 35px 0 0;
    text-align: center;
    &__way a:not(:last-child)::after {
        content: '/';
        color: $darkText;
        margin-right: 2px;
        padding-left: 5px;
    }   
}
.breadcrumb__way a {
    transition: all 0.2s ease;
    &:hover {
        font-weight: 700;
    }
}
.current-way {
    font-family: Jost;
    font-size: 22px;
    line-height: 150%;
    color: #4D5053;
    white-space: pre-line;
    font-weight: 500;
    border-bottom: #4D5053 solid 1px;
}
</style>