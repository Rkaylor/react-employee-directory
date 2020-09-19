import axios from "axios";

export default{ 
    getUsers:function(){    
        //retrieve 100 users from api call 
        return axios.get("https://randomuser.me/api/?results=100&nat=us");
    }
};