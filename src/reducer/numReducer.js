import actionType from "../action/actionType"
const defaultState = {
    num: 10,
}
const numReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.ADD_Num:
            return { num: state.num + action.playload }
        case actionType.REDUCE_Num:
            return { num: state.num - action.playload }
        default:
    }
    return state;
}
export default numReducer