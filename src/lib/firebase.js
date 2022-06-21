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

const db = firebase.firestore();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};