<template>
    <footer class="footer container">
        <div class="footer__about">
            <router-link to="/">
                <img class="logo-img" src="@/assets/Logo (1).png" alt="logo" />
            </router-link>
            <p class="footer__about__text text">It is a long established fact that a reader will be distracted lookings.</p>
            <nav class="footer__about__media">
                <a href="#"><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                    fill="#292F36"/>
                    </svg>
                </a>
                <a href="#"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.14062 16H0.871094V5.48828H4.14062V16ZM2.48828 4.08203C1.46875 4.08203 0.625 3.20312 0.625 2.14844C0.625 1.12891 1.46875 0.285156 2.48828 0.285156C3.54297 0.285156 4.38672 1.12891 4.38672 2.14844C4.38672 3.20312 3.54297 4.08203 2.48828 4.08203ZM16.3398 16H13.1055V10.9023C13.1055 9.67188 13.0703 8.125 11.3828 8.125C9.69531 8.125 9.44922 9.42578 9.44922 10.7969V16H6.17969V5.48828H9.30859V6.92969H9.34375C9.80078 6.12109 10.8555 5.24219 12.4375 5.24219C15.7422 5.24219 16.375 7.42188 16.375 10.2344V16H16.3398Z"
                    fill="#292F36"/>
                    </svg>
                </a>
            </nav>
        </div>
        <div class="footer__pages-nav">
            <h3 class="footer__pages-nav__title title">Pages</h3>
            <router-link class="text" v-for="link in links" :key="link.name" :to="link.url">{{ link.name }}</router-link>
        </div>
        <div class="footer__contact">
            <h3 class="footer__contact__title title">Contact</h3>
            <p class="text" v-for="contact in contacts" :key="contact.name">{{ contact.data }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
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
            ],
            contacts: [
                {
                    name: 'adress',
                    data: '55 East Birchwood Ave. Brooklyn, New York 11201'
                },
                {
                    name: 'email',
                    data: 'contact@interno.com'
                },
                {
                    name: 'phone',
                    data: '(123) 456 - 7890'
                }
            ],
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/variables.scss';

.footer {
    padding-bottom: 130px;
    display: flex;
    justify-content: space-between;
    &__about {
        max-width: 390px;
        &__text {
            padding-top: 20px;
            padding-bottom: 30px;
        }
        &__media a {
            margin-right: 50px;
            &:hover svg {
                transform: scale(1.3);
            }
        }
    }
    &__pages-nav {
        width: 258px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        & a:hover {
            font-weight: 700;
        }
    }
    &__contact {
        max-width: 258px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}
</style>