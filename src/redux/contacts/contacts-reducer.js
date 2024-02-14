import { ADD_CONTACT, REMOVE_CONTACT } from "./contacts-constants";

const initialState = [];

const contactsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_CONTACT:
            return [...state, payload];
            
        case REMOVE_CONTACT:
            return state.filter(item => item.id !== payload);

        default:
            return state;
    }
}

export default contactsReducer;