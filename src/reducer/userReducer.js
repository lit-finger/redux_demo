import actionType from "../action/actionType"
let defaultState = {
    list: [
        {
            id: 1,
            username: "leson",
            userpwd: "123456",
        },
        {
            id: 2,
            username: "lulu",
            userpwd: "123456",
        }
    ]
}
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.ADD_User:
            return { list: [...state.list,action.playload] }
        case actionType.DEL_User:
            return { list: state.list.filter(item => item.id*1 !== action.playload*1) }
        default:
    }
    return state;
}
export default userReducer