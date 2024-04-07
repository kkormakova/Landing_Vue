<template>
    <section class="blog container" id="blog">
        <div class="blog__heading">
            <h1 class="heading">Articles & News</h1>
            <h3 class="blog__subtitle text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
            </h3>
        </div>
        <div class="blog__flex">
            <div v-for="item in items" class="blog__item">
                <img class="blog__item__img" :src="item.image" alt="#" />
                <div class="blog__item__teg">{{item.tag}}</div>
                <div class="blog__item__content">
                    <h3 class="blog__item__content__title title">{{item.title}}</h3>
                    <p class="blog__item__content__date">{{item.date}}</p>
                </div>
                <div class="blog__item__link">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeBlogComponent',
    data() {
        return {
            items: [
                {
                    id: 1,
                    image: require("@/assets/BlogImg/blogCard1.jpg"),
                    tag: "Kitchan Design",
                    title: "Let's Get Solution For Building Construction Work",
                    date: "26 December,2022",
                },
                {
                    id: 2,
                    image: require("@/assets/BlogImg/blogCard2.jpg"),
                    tag: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing \n Ideas",
                    date: "22 December,2022 ",
                },
                {
                    id: 3,
                    image: require("@/assets/BlogImg/blogCard3.jpg"),
                    tag: "Interior Design",
                    title: "Best For Any Office & Business Interior Solution",
                    date: "25 December,2022 ",
                }
            ]
        }
    },
}

</script>
<style lang="scss" scoped>
    @import "@/assets/variables.scss";
    .blog {
    padding-top: 96px;
    padding-bottom: 96px;
    &__heading {
        text-align: center;
        padding: 0 195px 52px;
    }
}
</style>