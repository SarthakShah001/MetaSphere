import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// Initialize Firebase
// Initialize Realtime Database and get a reference to the service
const firebaseConfig = {
    apiKey: "AIzaSyB2DolgwU6SZWD7cw4dRZpHTG1oX3GCsI0",
    authDomain: "metamigos-6cacf.firebaseapp.com",
    projectId: "metamigos-6cacf",
    storageBucket: "metamigos-6cacf.appspot.com",
    messagingSenderId: "402680775292",
    appId: "1:402680775292:web:114a8f85c1ed4785b97ff9",
    measurementId: "G-PQTL5SMR67",
    // databaseURL: "https://metamigos-6cacf-default-rtdb.firebaseio.com/"
  };
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  //  setDoc(doc(db, "User", "LA"), {
  //   Username:"test2",
  //    Email: "test.gmail.com",
  //    Password: "test123"
  //  });
  // setDoc();
  // function checkIfUserExists(userId) {
  //   var usersRef = new Firebase(USERS_LOCATION);
  //   usersRef.child(userId).once('value', function(snapshot) {
  //     var exists = (snapshot.val() !== null);
  //     userExistsCallback(userId, exists);
  //   });
  // }
 export const db = getFirestore(app);
  

 
//   const analytics = getAnalytics(app);