const state = {
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
        },
        {
            id: 4,
            image: require("@/assets/BlogImg/blogCard4.jpg"),
            tag: "Kitchan Design",
            title: "Let's Get Solution For Building Construction Work",
            date: "26 December,2022",
        },
        {
            id: 5,
            image: require("@/assets/BlogImg/blogCard5.jpg"),
            tag: "Living Design",
            title: "Low Cost Latest Invented Interior Designing \n Ideas",
            date: "22 December,2022 ",
        },
        {
            id: 6,
            image: require("@/assets/BlogImg/blogCard6.jpg"),
            tag: "Interior Design",
            title: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022 ",
        },
    ]
};
const getters = {
    GET_ITEMS(state) {
        return state.items;
    }
};
const mutations = {};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};