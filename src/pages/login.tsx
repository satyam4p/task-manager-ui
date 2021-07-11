import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface targetType{
    username:{value:string},
    password:{value:string}
}

const Login=()=>{   


    const handleSubmit=(event:React.SyntheticEvent)=>{        
        console.log("fomr submitted!");
        event.preventDefault();
        const target = event.target as typeof event.target & targetType;
        const username = target.username.value;
        const password = target.password.value;
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="username" name="username" placeholder="username"></input>
                <label>Password</label>
                <input type="password" name="password" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
        </div>
    );


}

export default Login;

