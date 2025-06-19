

import axios from "axios";

const isAuthenticated = async ()=>{
    try{
        const res = await axios.get("https://zerodha-backend-1-lr1u.onrender.com/api/client/verify",{withCredentials:true});
        console.log("auth - ",res.data);
        return res.data.user
    }catch(err){
        console.log("authErr - ",err);
        return null
    }
}

export default isAuthenticated;
