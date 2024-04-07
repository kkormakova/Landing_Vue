<template>
    <section class="articles container">
        <h1 class="articles__heading heading">Articles & News</h1>
        <div class="blog__flex">
            <div v-for="item in GET_ITEMS" :key="item.id" class="blog__item">
                <img class="blog__item__img" :src="item.image" alt="#" />
                <div class="blog__item__teg">{{item.tag}}</div>
                <div class="blog__item__content">
                    <h3 style="white-space: pre-line" class="blog__item__content__title title">{{item.title}}</h3>
                    <p class="blog__item__content__date">{{item.date}}</p>
                </div>
                <router-link to="/blog-details" class="blog__item__link">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </router-link>
            </div>
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
import { mapGetters } from 'vuex';

export default {
    name: 'BlogArticles',
    computed: {
        ...mapGetters(['GET_ITEMS'])
    }
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';
.articles {
    margin-bottom: 200px;
    &__heading {
        margin-bottom: 30px;
    }
    &__pagination {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        gap: 20px;
        &__link {
            height: 52px;
            width: 52px;
            border:1px solid $backgroundColor;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s ease;
            &:hover {
                transform: scale(1.2);
            }
            
        }
    }
}
.current {
    background-color: $backgroundColor;
}
.blog {
    &__flex {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
    &__item {
        font-size: 0;
        position: relative;
        width: 380px;
        height: 520px;
        border: 2px solid $backgroundColor;
        border-radius: 60px;
        padding: 20px;
        &__img {
            border-radius: 50px 50px 0 0;
        }
        &__teg {
            position: absolute;
            top: 250px;
            left: 40px;
            width: 120px;
            height: 40px;
            padding: 8px;
            background-color: #fff;
            border-radius: 10px 10px 10px 0;
            font-family: Jost;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%;
            color: $lightText;
        }
        &__content {
            padding-top: 20px;
            &__title {
                padding-right: 55px;
                margin-bottom: 30px;
                height: 94px;
            }
            &__date {
                font-family: Jost;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;
                color: $lightText;
            }
        }
        &__link {
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
        &:hover {
            background-color: $backgroundColor;
            & .blog__item__link {
                background-color: #fff;
            }
        }
    }
}
</style>