import actionType from "./actionType"

const  add=(info)=>{
    return{
        type:actionType.ADD_User,
        playload:info
    }
}
const del=(id)=>{
    return  {
        type :actionType.DEL_User,
        playload:id
    }
}
export {add,del}