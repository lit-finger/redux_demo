import {get,post,del} from "./index"

let userModel = {
    query:(info)=>{
        return get("/api/userinfo",info)
    },
    add:(info)=>{
        return post("/api/userinfo",info)
    },
    del:(id)=>{
        return del("/api/userinfo/"+id)
    }
}

export default userModel;