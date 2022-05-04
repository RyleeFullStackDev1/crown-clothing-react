import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIsJ92bsfinKowiVNy-F_TcVnj8X2ckXI",
    authDomain: "crwn-clothing-db-3ff7e.firebaseapp.com",
    projectId: "crwn-clothing-db-3ff7e",
    storageBucket: "crwn-clothing-db-3ff7e.appspot.com",
    messagingSenderId: "254210699265",
    appId: "1:254210699265:web:3a8bc0feb938ca32ccd000"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}