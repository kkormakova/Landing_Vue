<template>
    <section class="counter container">
        <div class="counter__block">
            <div class="counter__block__item">
                <p class="count">12</p>
                <p class="text">Years Of Experiance</p>
            </div>
            <div class="counter__block__item">
                <p class="count">85</p>
                <p class="text">Success Project</p>
            </div>
            <div class="counter__block__item">
                <p class="count">15</p>
                <p class="text">Active Project</p>
            </div>
            <div class="counter__block__item">
                <p class="count">95</p>
                <p class="text">Happy CUstomers</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeCounterComponent'
}
</script>
<style lang="scss">
@import "@/assets/variables.scss";
.counter {
    background-color: $backgroundColor;
    &__block {
        padding: 150px 0;
        display: flex;
        &__item {
            width: 300px;
            text-align: center;
            &:not(:last-child) {
                border-right: $beigeText 1px solid;
            }
            & .count {
                font-family: DM Serif Display;
                font-size: 65px;
                font-weight: 400;
                line-height: 125%;
                color: $beigeText;
                &:hover {
                    -webkit-text-stroke: 2px $darkText;
                }
            }
        }
    }
}
</style>