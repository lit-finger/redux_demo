import actionType from "./actionType";

const changeNav = (flag)=>{
    return {
        type:actionType.CHANGE_Nav,
        playload:flag
    }
}

export {changeNav}