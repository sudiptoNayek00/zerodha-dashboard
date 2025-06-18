

import axios from "axios";

const isAuthenticated = async ()=>{
    try{
        const res = await axios.get("http://localhost:5000/api/client/verify",{withCredentials:true});
        console.log("auth - ",res.data);
        return res.data.user
    }catch(err){
        console.log("authErr - ",err);
        return null
    }
}

export default isAuthenticated;
