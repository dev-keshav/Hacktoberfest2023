import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthState = (props) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("userId");
        
        if (storedUsername) {
            setUserInfo({
                userInfo: storedUsername,
            });
        }else{
            setUserInfo({userInfo: null});
        }
    }, []);

    return (
        <AuthContext.Provider value={userInfo}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
