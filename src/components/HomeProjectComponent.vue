<template>
    <section class="project container" id="project">
        <div class="project__heading">
            <h1 class="project__title">Follow Our Projects</h1>
            <h3 class="project__subtitle text">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
            </h3>
        </div>
        <div class="project__grid">
            <div class="project__item">
                <img class="project__item__img radius-tr" src="@/assets/HomeImg/project1.jpg" alt="photo project"/>
                <div class="project__item__content">
                    <div>
                        <h3 class="project__item__content__title title">Modern Kitchan</h3>
                        <h5 class="project__item__content__subtitle text">Decor / Artchitecture</h5>
                    </div>
                    <router-link to="/project-details" class="project__item__content__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="project__item">
                <img class="project__item__img radius-tl" src="@/assets/HomeImg/project2.jpg" alt="photo project"/>
                <div class="project__item__content">
                    <div>
                        <h3 class="project__item__content__title title">Modern Kitchan</h3>
                        <h5 class="project__item__content__subtitle text">Decor / Artchitecture</h5>
                    </div>
                    <router-link to="/project-details" class="project__item__content__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="project__item">
                <img class="project__item__img radius-br" src="@/assets/HomeImg/project3.jpg" alt="photo project"/>
                <div class="project__item__content">
                    <div>
                        <h3 class="project__item__content__title title">Modern Kitchan</h3>
                        <h5 class="project__item__content__subtitle text">Decor / Artchitecture</h5>
                    </div>
                    <router-link to="/project-details" class="project__item__content__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
            <div class="project__item">
                <img class="project__item__img radius-bl" src="@/assets/HomeImg/project4.jpg" alt="photo project"/>
                <div class="project__item__content">
                    <div>
                        <h3 class="project__item__content__title title">Modern Kitchan</h3>
                        <h5 class="project__item__content__subtitle text">Decor / Artchitecture</h5>
                    </div>
                    <router-link to="/project-details" class="project__item__content__link">
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'HomeProjectComponent'
}
</script>


<style lang="scss">
    @import '@/assets/variables.scss';
    .project {
    padding-top: 96px;
    padding-bottom: 96px;
    &__heading {
        text-align: center;
        padding: 0 230px 90px;
    }
    &__title {
        font-family: DM Serif Display;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        color: $darkText;
    }
    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 547px);
        gap: 55px 105px;
    }
    &__item {
        width: 548px;
        height: 619px;
        & .radius-tl {
            border-radius: 85px 0 0 0;
        }
        & .radius-tr {
            border-radius: 0 85px 0 0;
        }
        & .radius-br {
            border-radius: 0 0 85px 0;
        }
        & .radius-bl {
            border-radius: 0 0 0 85px;
        }
        &__content {
            padding-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &__link {
                height: 70px;
                width: 70px;
                background-color: $backgroundColor;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: all 0.3s ease;
                &:hover {
                    background-color: $beigeText;
                }
            }
        }
    }
}
</style>