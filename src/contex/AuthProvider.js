import React, { useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, getAuth,signOut} from 'firebase/auth'
import { createContext } from 'react';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

       const [user,setUser] = useState(null)
       const [loding,setLoding] = useState(true)


       const createUserWithEmailAndPass = (email,password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const logInWithEmailAndPassword = (email,password) =>{
        setLoding(true);
                return signInWithEmailAndPassword(auth,email,password)
       }
       const userLogOut =()=>{
        localStorage.clear();
        return signOut(auth);
       }

       useEffect(()=>{
           const unSubscribes = onAuthStateChanged(auth,  currentUser=>{
            setLoding(currentUser);
        
           },)
           return()=>{
                 unSubscribes();
           }
       },[])
   const authInfo ={
    loding,
    setUser,
    user,
    logInWithEmailAndPassword,
    createUserWithEmailAndPass,
    userLogOut,

   }

    return (
        <div>
            	
                <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;