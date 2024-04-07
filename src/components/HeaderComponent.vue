<template>
    <header class="header">
        <div class="header__row container">
            <div class="header__logo">
                <router-link to="/">
                    <img class="logo-img" src="@/assets/Logo (1).png" alt="logo" />
                </router-link>
            </div>
            <nav class="header__nav">
                <router-link class="header__nav-link" v-for="link in links" :key="link.name" :to="link.url">{{ link.name }}</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                links: [
                    {
                        name: 'Home',
                        url: '/'
                    },
                    {
                        name: 'Project',
                        url: '/project'
                    },
                    {
                        name: 'Blog',
                        url: '/blog'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/style.scss";
.header {
    padding: 45px 0;
    &__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__nav {
        display: flex;
        gap: 40px;
        &-link {
        font-size: 20px;
        color: $darkText;
        transition: all 0.2s ease;
        &:hover {
            transform: scale(1.2);
        }
        }
    }
    
}
</style>