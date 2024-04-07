const state = {
    articles: [
        {
            id: 1,
            tag: 'Kitchen',
            title: 'Let’s Get Solution for Building Construction Work',
            img1: require('@/assets/BlogDetailsArticleImg/Kitchen1.jpg'),
            img2: require('@/assets/BlogDetailsArticleImg/Kitchen2.jpg'),
            date: '26 December,2022',
            text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\nEmbarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            subtitle: 'Design sprints are great',
        },
        {
            id: 2,
            tag: 'Bedroom',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            img1: require('@/assets/BlogDetailsArticleImg/Bedroom.jpg'),
            img2: require('@/assets/BlogDetailsArticleImg/Kitchen2.jpg'),
            date: '26 December,2022',
            text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\nEmbarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            subtitle: 'Design sprints are great',
        },
        {
            id: 3,
            tag: 'Living',
            title: 'Best For Any Office & Business Interior Solution',
            img1: require('@/assets/BlogDetailsArticleImg/Living.jpg'),
            img2: require('@/assets/BlogDetailsArticleImg/Kitchen2.jpg'),
            date: '26 December,2022',
            text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\nEmbarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            subtitle: 'Design sprints are great',
        },
        {
            id: 4,
            tag: 'Interior',
            title: 'Low Cost Latest Invented Interior Designing Ideas.',
            img1: require('@/assets/BlogDetailsArticleImg/Interior.jpg'),
            img2: require('@/assets/BlogDetailsArticleImg/Kitchen2.jpg'),
            date: '26 December,2022',
            text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\nEmbarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            subtitle: 'Design sprints are great',
        },

    ],
    tagsList: ['Kitchen', 'Living', 'Bedroom', 'Interior'],
    filterArticles: [
    {
            id: 1,
            tag: 'Kitchen',
            title: 'Let’s Get Solution for Building Construction Work',
            img1: require('@/assets/BlogDetailsArticleImg/Kitchen1.jpg'),
            img2: require('@/assets/BlogDetailsArticleImg/Kitchen2.jpg'),
            date: '26 December,2022',
            text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.\n\nEmbarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            subtitle: 'Design sprints are great',
        },
    ],
};
const getters = {
    GET_TAG_LIST(state) {
        return state.tagsList;
    },
    GET_FILTER_ARTICLES(state) {
        return state.filterArticles;
    }
};
const mutations = {
    filterByTag(state, tagName) {
        state.filterArticles = state.articles.filter(el => tagName === el.tag);
    },
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};