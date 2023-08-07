const firebaseConfig = {
  apiKey: "AIzaSyDhZy4GB1EZua0_Ha2NIwNiHuuauLmrGNE",

  authDomain: "login-register-page-4e082.firebaseapp.com",

  projectId: "login-register-page-4e082",

  storageBucket: "login-register-page-4e082.appspot.com",

  messagingSenderId: "450411434779",

  appId: "1:450411434779:web:4e2212ab2dfd8aeddef9be",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

//initialize vars
const auth = firbase.auth();
const database = firbase.database();

function register() {}

/* 
VALIDATION
if(validateEmail(email)==false|| validatePassword(password)==false){
    alert('EMAIL OR PASS IS NOT OK')
    return
    //DONT CONTINUE RUNNING THE CODE
}

VALIDATE THE INPUTS THE SAME WAY!



*/

function validateEmail(email) {
  const regex = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
  if (regex.test(email) == true) {
    //Email is okay
    return true;
  } else {
    //Email is not okay
    return false;
  }
}

function validatePassword(password) {
  //Pass with lenght greater than 6 characters
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validateField(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
