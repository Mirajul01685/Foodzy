import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';
export const AuthContext =createContext();
const googleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user ,setUser] = useState({})
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const SignInWithGithub=()=>{
        return signInWithPopup(auth, GithubProvider)
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
        user, 
        createUser,
        signInWithGoogle,
        SignInWithGithub
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;