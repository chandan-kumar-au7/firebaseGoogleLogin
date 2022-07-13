import "./Dashboard.css";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "./providers/UserProviders";
import { useNavigate } from "react-router-dom";
import { logOut } from "./services/firebase";
export default function Dashboard() {
    let navigate = useNavigate();
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState(null);

    useEffect(() => {
        if (!user) {
            setredirect("/");
        }
    }, [user]);
    if (redirect) {
        navigate(`${redirect}`)
    }
    return (
        <div className="dashboard">
            <h1 className="dashboard-text">Welcome Home</h1>
            <button className="logout-button" onClick={logOut}>
                <img
                    src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                    alt="google icon"
                />
                <span> logout</span>
            </button>
        </div>
    );
}