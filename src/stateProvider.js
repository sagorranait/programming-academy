import React, { createContext, useEffect, useState } from 'react';
import { 
   createUserWithEmailAndPassword, 
   onAuthStateChanged, 
   signInWithEmailAndPassword, 
   signInWithPopup, 
   signOut, 
   updateProfile 
} from 'firebase/auth';

import { auth } from './firebase.config';


export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [darkMord, setdarkMord] = useState('');

    const providerSignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setStudent(currentUser);            
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = { 
        student,
        setStudent,
        loading, 
        setLoading,
        darkMord,
        setdarkMord,
        signUp, 
        signIn,
        signOutUser, 
        providerSignin, 
        updateUserProfile,
    };

    return (
        <StateContext.Provider value={authInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;