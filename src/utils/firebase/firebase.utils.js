import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvXyzLUDrWo0H6UdAIefDWfrTuI42L1BQ",
    authDomain: "crwn-clothing-db-9e0a1.firebaseapp.com",
    projectId: "crwn-clothing-db-9e0a1",
    storageBucket: "crwn-clothing-db-9e0a1.appspot.com",
    messagingSenderId: "822723468172",
    appId: "1:822723468172:web:930f1bf2327a50e0f3d4a9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);