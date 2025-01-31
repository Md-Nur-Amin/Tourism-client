import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        } )
        return ()=>{
            unsubscribe()
        }
    }, [] )



    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }



    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;