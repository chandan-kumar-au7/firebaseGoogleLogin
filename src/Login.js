import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'
import { signInWithGoogle } from './services/firebase';
import { UserContext } from './providers/UserProviders';
export default function Login() {
    let navigate = useNavigate();

    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)

    useEffect(() => {
        if (user) {
            setredirect('/dashboard')
        }
    }, [user])
    if (redirect) {
        navigate(`${redirect}`)
    }
    return (
        <div className="login-buttons">
            <button className="login-provider-button" onClick={signInWithGoogle}>
                <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                <span> Continue with Google</span>
            </button>
        </div>
    );
}