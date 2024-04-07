<template>
    <section class="home-banner container" id="home">
        <div class="home-banner__content">
            <h1 class="home-banner__content__title">Let Your Home Be Unique</h1>
            <div class="home-banner__content__subtitle text">
                <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            </div>
            <div class="home-banner__btn">
                <a href="#">Get Started<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"     stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="home-banner__bg-img">
            <img src='@/assets/HomeImg/homeBanner.png' alt="background cover" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeBannerComponent'
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.home-banner {
    position: relative;
    min-height: 758px;
    margin-top: 10px;
    padding-top: 180px;
    padding-bottom: 180px;
    &__content {
        max-width: 435px;
        margin-left: 52px;
        &__title {
            font-family: DM Serif Display;
            font-size: 65px;
            font-weight: 400;
            line-height: 125%;
            color: $darkText;
            margin-bottom: 18px;
        }
        &__subtitle {
            margin-bottom: 18px;
        }
    }
    &__btn {
        display: inline-block;
        background-color: $darkText;
        padding: 20px 48px;
        border-radius: 15px;
        font-family: Jost;
        font-size: 18px;
        font-weight: 600;
        line-height: 125%;
        transition: all 0.3s ease;
        & a {
            color: #fff;
        }
        & svg {
            width: 15px;
            height: 13px;
            padding-left: 5px;
        }
        &:hover {
            background-color: $lightText;
        }
    }
    &__bg-img {
        position: absolute;
        top: 0;
        z-index: -1;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>