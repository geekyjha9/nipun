import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//     apiKey: "AIzaSyCfqzj_VWlYWJfOxrOWI5rrmUiEcTe4J0Y",
//     authDomain: "drive-mct5.firebaseapp.com",
//     projectId: "drive-mct5",
//     storageBucket: "drive-mct5.appspot.com",
//     messagingSenderId: "149649227631",
//     appId: "1:149649227631:web:0992498e695010d6f6b29a"
//   };
  
//   const firebaseConfig = {
//     apiKey: "AIzaSyC94tpM2CdXr_llXBINt_rc09mjtQ39QOo",
//     authDomain: "g-t-drive.firebaseapp.com",
//     projectId: "g-t-drive",
//     storageBucket: "g-t-drive.appspot.com",
//     messagingSenderId: "1068820411271",
//     appId: "1:1068820411271:web:7cbc2eb65fd7aba51cd922"
//   };
// const firebaseConfig = {
//     apiKey: "AIzaSyC94tpM2CdXr_llXBINt_rc09mjtQ39QOo",
//     authDomain: "g-t-drive.firebaseapp.com",
//     projectId: "g-t-drive",
//     storageBucket: "g-t-drive.appspot.com",
//     messagingSenderId: "1068820411271",
//     appId: "1:1068820411271:web:1b5191e28018a9a61cd922"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBn9K1tcB8DFHn5J7d8zJ4z-dt5Qh1ydQY",
  authDomain: "drive-nipun.firebaseapp.com",
  projectId: "drive-nipun",
  storageBucket: "drive-nipun.appspot.com",
  messagingSenderId: "253792551810",
  appId: "1:253792551810:web:6aa0b9f8ad1cc88f72859b"
};
  

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const storage = firebase.storage();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, storage, auth, provider }


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
