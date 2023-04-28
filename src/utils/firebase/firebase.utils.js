import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBDfFwILlKYFgP056iigl4WQmo7UXgVgX8',
  authDomain: 'clothing-app-aa05f.firebaseapp.com',
  projectId: 'clothing-app-aa05f',
  storageBucket: 'clothing-app-aa05f.appspot.com',
  messagingSenderId: '259408694507',
  appId: '1:259408694507:web:84e87fd1d441e3f18582ae',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists());

  // if user data doesn't exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('erroe creating the user', error.message);
    }
  }
  // if user data exists
  return userDocRef;
};
