import actionType from "./actionType"

const  add=(num)=>{
    return{
        type:actionType.ADD_Num,
        playload:num
    }
}
const reduce=(num)=>{
    return  {
        type :actionType.REDUCE_Num,
        playload:num
    }
}
export {add,reduce}