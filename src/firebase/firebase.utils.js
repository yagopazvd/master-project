import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCU84_shODdVnxz-AXm4oGA-ujqfosTBO0",
    authDomain: "master-project-d780e.firebaseapp.com",
    databaseURL: "https://master-project-d780e.firebaseio.com",
    projectId: "master-project-d780e",
    storageBucket: "",
    messagingSenderId: "1032797607574",
    appId: "1:1032797607574:web:5624d81a06305090"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email} = userAuth
      const createdAt = new Date();


      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error){
          console.log('erros creating user', error.message)
      }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
