<template>
    <section class="not-found">
        <div class="content container">
            <h1 class="content-heading">404</h1>
            <h3 class="content-text">We are sorry, but the page you requested was not found</h3>
            <router-link class="link" to="/"> Back To Home 
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>
            </router-link>
        </div>
        <div class="img">
            <img src="@/assets/404.jpg" alt="">
        </div>
    </section>
</template>

<script>
    export default {
        name:'NotFound',
    }
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.not-found {
    display: flex;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    &-heading {
        font-family: DM Serif Display;
        font-size: 250px;
        font-weight: 400;
        line-height: 100%;
        color: #CDA274;
        white-space: pre-line;
    }
    &-text {
        font-family: DM Serif Display;
        font-size: 35px;
        font-weight: 400;
        line-height: 150%;
        color: #292F36;
        white-space: pre-line;
        margin-bottom: 50px;
        max-width: 570px;
    }
}
.link {
    padding: 26px 54px;
    background-color: #292F36;
    max-width: 253px;
    border-radius: 18px;
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    color: white;
    white-space: pre-line;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & svg {
        color: #CDA274;
    }
}
img {
    border-bottom-left-radius: 300px;
}
</style>