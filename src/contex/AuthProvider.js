import React, { useEffect, useState } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from '../firebase/Firebase.config/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({childrebn}) => {

       const [user,setUser] = useState(null)
       const [loding,setLoding] = useState(null)


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
            setLoding(false);
           },)
           return()=>{
                 unSubscribes();
           }
       },[])
   const authInfo ={
    loding,
    user,
    logInWithEmailAndPassword,
    createUserWithEmailAndPass,
    userLogOut,

   }

    return (
        <div>
            	{loading && (
				<div className=" w-full z-50 absolute top-1/2 items-center">
					<div className="flex justify-center items-center">
						<div
							className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
							role="status"></div>
					</div>
				</div>
			)}
            <AuthContext.Provider value={authInfo}>{childrebn}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;