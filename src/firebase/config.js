import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0DuQ7lZkjN8jxOLXWdo9qPcNE0xsZ7Bs",
  authDomain: "my-dev-blog-67505.firebaseapp.com",
  projectId: "my-dev-blog-67505",
  storageBucket: "my-dev-blog-67505.appspot.com",
  messagingSenderId: "287405955040",
  appId: "1:287405955040:web:84718421e18624842b3d85"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore }