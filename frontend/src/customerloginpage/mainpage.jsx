import { useState } from "react";
import { useLocation } from "react-router-dom";

function Mainpage() {
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function Userdata(){

        setUserdata(location.state);
        console.log(userdata)
    }
    return ( 
        <p>
            <h1> main page </h1>
      
        <button onClick={Userdata}>button</button>
          </p>
     );
}

export default Mainpage;