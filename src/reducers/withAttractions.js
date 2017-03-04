import attractions from '../models/attractions';

const filteredAttractions = attractions.map(attraction => {
    return {
        ...attraction,
        id: attraction.name
    }
})

const INIT_STATE = {
    items: filteredAttractions
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default reducer;
