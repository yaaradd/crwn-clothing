import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAWZuQ0gF9X4eAzPHa0XTWCkSPmtkJNssI",
    authDomain: "crwn-clothing-db-c6b3a.firebaseapp.com",
    projectId: "crwn-clothing-db-c6b3a",
    storageBucket: "crwn-clothing-db-c6b3a.appspot.com",
    messagingSenderId: "968278050561",
    appId: "1:968278050561:web:d868ef56be6a335f093d00"
  };
  
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
    ) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);

    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }   catch (error) {
            console.log('error creating the user', error.message)

        }
    };

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if (!email || !password) return;

    await createUserWithEmailAndPassword(auth, email, password)
};
