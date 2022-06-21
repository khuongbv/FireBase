import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHCxzIZJcr-3kktj91Okk6p3mHW26VkU8",
  authDomain: "fir-sample-cd61f.firebaseapp.com",
  projectId: "fir-sample-cd61f",
  storageBucket: "fir-sample-cd61f.appspot.com",
  messagingSenderId: "1050406396185",
  appId: "1:1050406396185:web:2347e9075521f40b6aa588"
};

firebase.initializeApp(firebaseConfig);
