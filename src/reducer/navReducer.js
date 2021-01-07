import actionType from "../action/actionType"
const defaultState = {
    flag:true,
}
const numReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.CHANGE_Nav:
            return { flag:action.playload }
        default:
    }
    return state;
}
export default numReducer