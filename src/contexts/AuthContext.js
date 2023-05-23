import React,{useEffect,useState} from 'react';
import { createContext,useContext } from 'react';

import { auth } from '../firebase';

import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,sendPasswordResetEmail} from "firebase/auth";


const UserContext=createContext();

export const AuthContextProvider=({children})=>{

    const [user,setUser]=useState({});

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password);

    };

    const logout=()=>{
        return signOut(auth);

    };

    const forgetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);

    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }

    },[]);



    return(
        <UserContext.Provider value={{createUser,user,logout,signIn,forgetPassword}}>
            {children}
        </UserContext.Provider>
    );
}
export const UserAuth=()=>{
    return useContext(UserContext);
}























































// import React,{ useContext, useState, useEffect } from 'react';

// import { auth } from '../firebase';


// const AuthContext=React.createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }

// const AuthProvider=({ children })=>{

//     const [currentUser,setCurrentUser]=useState('');

//     function signup(email,password){
//         return auth.createUserWithEmailAndPassword(email,password);
//     }

//     useEffect(()=>{
//         const unsubscribe= auth.onAuthStateChanged(user=>{
//             setCurrentUser(user);
//         })
//         return unsubscribe;

//     },[])

//     const value={

//         currentUser,
//         signup
//     }
//     return(
//         <AuthContext.Provider value={value}>
//             { children }

//         </AuthContext.Provider>

//     );
// }

// export default AuthProvider;