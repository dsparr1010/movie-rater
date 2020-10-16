import React, { useState, useContext } from 'react';
import { API } from '../api-service';
import { TokenContext } from '../index';


function Auth() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [token, setToken] = useContext(TokenContext)

    const loginClicked = () => {
        API.loginUser({username, password})
        .then(res => setToken(res.token))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <label htmlFor='username'>Username</label><br/>
            <input 
                id='username' 
                type='text' 
                placeholder='username' 
                value={username}
                onChange={ evt => setUsername(evt.target.value)}
                ></input><br/>

            <label htmlFor='password'>Password</label><br/>
            <input 
                id='password' 
                type='password' 
                placeholder='password'
                value={password}
                onChange={ evt => setPassword(evt.target.value) }
                ></input><br/>
            <button onClick={ loginClicked }>Login</button>
        </div>
    )
}

export default Auth;