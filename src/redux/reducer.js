import { GET_DOLARS } from "./actions-type"

export const initialState = {
    dolars: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DOLARS:
            return{
                ...state,
                dolars : action.payload
            }

        default:
            return{
                ...state,
            }
    }
}

export default rootReducer