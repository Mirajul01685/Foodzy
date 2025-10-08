import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';
export const AuthContext =createContext();
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState({})
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user);
        }
        else{
            console.log(" user is loged Out");
            
        }
    })
    return ()=> unSubscribe()
    },[])

    const value ={
        user, createUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;