import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref, set,onValue } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLs38kDc-yUygUwnsHe02sOJdwJtJkjZ8",
  authDomain: "makegamesindia-88ebb.firebaseapp.com",
  databaseURL: "https://makegamesindia-88ebb-default-rtdb.firebaseio.com",
  projectId: "makegamesindia-88ebb",
  storageBucket: "makegamesindia-88ebb.appspot.com",
  messagingSenderId: "1039005721516",
  appId: "1:1039005721516:web:644b489ea1eb10df875009",
  measurementId: "G-PLJSNQ64TJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getDatabase();

function writeUserData(userId, name, email, imageUrl) {
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profilePicture: imageUrl
    });
}

/*const userCountRef = ref(db, 'users/' + userId);
onValue(userCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});*/

const auth = getAuth();
var email = "832010seriesworld@gmail.com";
var password = "832010Ravi";
createUserWithEmailAndPassword(email, password)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });


/*const provider = new GoogleAuthProvider();
signInWithPopup(provider);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    writeUserData(user.uid, user.displayName, user.email, user.photoURL)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(errorCode, errorMessage, email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });*/