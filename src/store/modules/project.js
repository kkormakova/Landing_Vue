const state = {
    isActive: false,
    btnList: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
    cardList: [
        {
            id: 1,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom1.jpg'),
            name: 'Minimal Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 2,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom2.jpg'),
            name: 'Minimal Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 3,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom3.jpg'),
            name: 'Classic Minimal Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 4,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom4.jpg'),
            name: 'Modern Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 5,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom5.jpg'),
            name: 'Minimal Bedroom table',
            path: 'Decor / Artchitecture'
        },
        {
            id: 6,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom6.jpg'),
            name: 'System Table',
            path: 'Decor / Artchitecture'
        },
        {
            id: 7,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom7.jpg'),
            name: 'Modern Medroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 8,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom8.jpg'),
            name: 'Modern Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 9,
            teg: "Bathroom",
            img: require('@/assets/ProjectImg/bathroom1.jpg'),
            name: 'Minimal Bathroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 10,
            teg: "Bathroom",
            img: require('@/assets/ProjectImg/bathroom2.jpg'),
            name: 'Minimal Bathroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 11,
            teg: "Bathroom",
            img: require('@/assets/ProjectImg/bathroom3.jpg'),
            name: 'Minimal Bathroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 12,
            teg: "Bathroom",
            img: require('@/assets/ProjectImg/bathroom4.jpg'),
            name: 'Minimal Bathroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 13,
            teg: "Bathroom",
            img: require('@/assets/ProjectImg/bathroom5.jpg'),
            name: 'Minimal Bathroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 14,
            teg: "Kitchan",
            img: require('@/assets/ProjectImg/kitchan1.jpg'),
            name: 'Minimal Kitchan',
            path: 'Decor / Artchitecture'
        },
        {
            id: 15,
            teg: "Kitchan",
            img: require('@/assets/ProjectImg/kitchan2.jpg'),
            name: 'Minimal Kitchan',
            path: 'Decor / Artchitecture'
        },
        {
            id: 16,
            teg: "Kitchan",
            img: require('@/assets/ProjectImg/kitchan3.jpg'),
            name: 'Minimal Kitchan',
            path: 'Decor / Artchitecture'
        },
        {
            id: 17,
            teg: "Kitchan",
            img: require('@/assets/ProjectImg/kitchan4.jpg'),
            name: 'Minimal Kitchan',
            path: 'Decor / Artchitecture'
        },
        {
            id: 18,
            teg: "Kitchan",
            img: require('@/assets/ProjectImg/kitchan5.jpg'),
            name: 'Minimal Kitchan',
            path: 'Decor / Artchitecture'
        },
    ],
    filteredCardList: [
        {
            id: 1,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom1.jpg'),
            name: 'Minimal Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 2,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom2.jpg'),
            name: 'Minimal Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 3,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom3.jpg'),
            name: 'Classic Minimal Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 4,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom4.jpg'),
            name: 'Modern Bedroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 5,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom5.jpg'),
            name: 'Minimal Bedroom table',
            path: 'Decor / Artchitecture'
        },
        {
            id: 6,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom6.jpg'),
            name: 'System Table',
            path: 'Decor / Artchitecture'
        },
        {
            id: 7,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom7.jpg'),
            name: 'Modern Medroom',
            path: 'Decor / Artchitecture'
        },
        {
            id: 8,
            teg: "Bed Room",
            img: require('@/assets/ProjectImg/bedroom8.jpg'),
            name: 'Modern Bedroom',
            path: 'Decor / Artchitecture'
        }
    ]            
};
const getters = {
    GET_IS_ACTIVE(state) {
        return state.isActive;
    },
    GET_BTN_LIST(state) {
        return state.btnList;
    },
    GET_CARD_LIST(state) {
        return state.cardList;
    },
    GET_FILTERED_CARD_LIST(state) {
        return state.filteredCardList;
    }
};
const mutations = {
    filterCards(state,card) {
        state.filteredCardList = state.cardList.filter(el => card === el.teg);
        const btns = document.querySelectorAll('.btn');
        btns.forEach(el => el.classList.remove('active'));
        event.currentTarget.classList.add('active');
    },
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions,
};