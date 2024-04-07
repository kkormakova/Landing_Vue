<template>
    <section class="latest-post container">
        <h1 class="heading">Latest Post</h1>
        <div class="latest-post__card">
            <img :src= img alt="post image" />
            <div class="latest-post__card__content">
                <h3 class="title">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                </p>
                <p class="text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <p class="latest-post__card__content__date text">26 December,2022</p>
                <router-link to="/blog-details" class="blog__item__link">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LatestPost',
    data() {
        return {
            img: require('@/assets/BlogImg/latestPost.jpg'),
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';
.latest-post {
    &__card {        
        margin-top: 30px;
        margin-bottom: 150px;
        border: 2px solid $backgroundColor;
        border-radius: 60px;
        display: flex;
        gap: 65px;
        padding: 22px;
        &__content {
            position: relative;
            padding: 51px 60px 0 0;
            display: flex;
            flex-direction: column;
            gap: 40px;
            &__date {
                margin-top: 10px;
            }
        }
    }
}
.blog__item__link {
    position: absolute;
    bottom: 27px;
    right: 20px;
    height: 52px;
    width: 52px;
    background-color:$backgroundColor;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
}        
</style>