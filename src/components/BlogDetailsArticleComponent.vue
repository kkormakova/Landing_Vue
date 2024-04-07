<template>
    <section class="BlogDetailsArticle container" v-for="article in GET_FILTER_ARTICLES" :key="article.id">
        <div class="article">
            <h1 class="heading">{{ article.title }}</h1>
            <div class="img1">
                <img :src="article.img1" alt="#">
            </div>
            <div class="date-breadcrumbs">
                <p class="date text">{{ article.date }}</p>
                <p class="breadcrumbs">
                    <a href="#" class="text">Interior</a>
                    <a href="#" class="text">Home</a>
                    <a href="#" class="text">Decore</a>
                </p>
            </div>
            <div class="text1 text">{{ article.text1 }}</div>
            <div class="quotes">
                <div class="content">
                    <img src="@/assets/BlogDetailsArticleImg/QuoteImg.png" alt="#">
                    <p class="quote">The details are not the details. They make the design.</p>
                </div>
            </div>
            <h2 class="heading">{{ article.subtitle }}</h2>
            <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ol class="ol text">
                <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            </ol>
            <div class="img2">
                <img :src="article.img2" alt="#">
            </div>
            <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
        <div class="tags">
            <h3 class="title">Tags</h3>
            <button  @click="filterByTag(tag)" class="tags__button text" v-for="tag in GET_TAG_LIST">{{ tag }}</button>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters(['GET_TAG_LIST', 'GET_FILTER_ARTICLES'])
    },
    methods: {
        ...mapMutations(['filterByTag'])
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.BlogDetailsArticle {
    display: flex;
    margin-bottom: 96px;
}
.article {
    width: 67%;
    & .img1 img {
        margin-bottom: 45px;
        border-radius: 50px;
        width: 100%;
        height: 540px;
    }
    & .img2 img {
        margin-bottom: 35px;
        border-radius: 50px;
    }
    & .date-breadcrumbs {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }
    & .breadcrumbs {
        margin-right: 80px;
        & a:not(:last-child)::after {
            content: '/';
            color: $darkText;
            margin-right: 2px;
            padding-left: 5px;
        }
        & a {
            transition: all 0.2s ease;
            &:hover {
                font-weight: 700;
            }
        }
    }
    .text1 {
        margin-bottom: 35px;
    }
    .quotes {
        border-radius: 50px;
        background-color: $backgroundColor;
        padding: 55px 230px;
        text-align: center;
        margin-bottom: 30px;
        & img {
            padding-top: 25px;
        }
        & .quote {
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: italic;
            line-height: 125%;
            color: $beigeText;
        }
    }
    .ol {
        margin: 0 0 0 25px;
        padding: 15px 65px 5px 0;
        list-style-type: none;
        counter-reset: num;
        & li {
            position: relative;
            margin: 0;
            padding: 0 0 25px 0;
            &:before {
                content: counter(num);
                counter-increment: num;
                display: inline-block;
                position: absolute;
                top: 0;
                left: -30px;
                width: 20px;
                color: $beigeText;
                font-family: DM Serif Display;
                text-align: right;
            }
        }
    }
}
.heading {
    margin-bottom: 20px;
}
.tags {
    margin-left: 55px;
    &__button {
        padding: 9px 30px;
        font-size: 18px;
        background-color: $backgroundColor;
        margin-right: 10px;
        margin-bottom: 10px;
        border-style: none;
        border-radius: 10px;
        &:hover {
            transform: scale(1.1);
        }
        &:active {
            background-color: $darkText;
            color: #fff;
        }
    }
}
.title {
    margin-bottom: 24px;
}
</style>