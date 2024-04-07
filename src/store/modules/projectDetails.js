const state = {
    projectItem: {
        name: 'Minimal Look Bedrooms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.\n \nIn nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
        images: [
            require('@/assets/ProjectDetailsImg/itemImg1.jpg'), 
            require('@/assets/ProjectDetailsImg/itemImg2.jpg'), 
            require('@/assets/ProjectDetailsImg/itemImg3.jpg')
        ]
    }
};
const getters = {
    GET_NAME(state) {
        return state.projectItem.name;
    },
    GET_DESCRIPTION(state) {
        return state.projectItem.description;
    },
    GET_IMAGES(state) {
        return state.projectItem.images;
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