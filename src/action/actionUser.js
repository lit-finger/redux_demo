import actionType from "./actionType"
import userModel from "../model/userModel"

const add=(info)=>{
    return{
        type:actionType.ADD_User,
        playload:info
    }
}
const asyncAdd=(info)=>{
    return(dispatch)=>{
        userModel.add(info).then(()=>{
            dispatch(add(info))
        })
    }
}
const query = (info)=>{
    return {
        type:actionType.QUERY_User,
        playload:info
    }
}
const asyncQuery = ()=>{
    return (dispatch)=>{
        userModel.query().then(res=>{
            dispatch(query(res.data))
        })
    }
}
const del=(id)=>{
    return  {
        type :actionType.DEL_User,
        playload:id
    }
}
const asyncDel=(id)=>{
    return (dispatch)=>{
        userModel.del(id).then(()=>{
            dispatch(del(id))
        })
    }
}

export {add,del,query,asyncAdd,asyncQuery,asyncDel}