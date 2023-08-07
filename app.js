$(function () {
  function RippleStyle(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }

  $("#btn").click(function (e) {
    let rippleEl = $(`<span class="btn-ripple"></span>`).appendTo(this);
    let pos = $(this).offset();
    var width = 100;
    var height = 100;

    var posX = e.pageX - 510;
    var posY = e.pageY - 220;

    var rippleStyle = new RippleStyle(width, height, posX, posY);

    rippleEl.css(rippleStyle);
  });

  $("#btn").on(
    "animationed webkitAnimationEnd oanimationend MSAnimationEnd",
    ".btn-ripple",
    function () {
      $(this).remove();
    }
  );
});

const btnReg = document.querySelector("#registerAnchor");
const loginDiv = document.querySelector(".login");
btnReg.addEventListener("click", (e) => {
  loginDiv.classList.toggle("slideLeft");
  // loginDiv.classList.remove("slideRight");
  registerDiv.classList.remove("slideLeft");
  setTimeout(() => {
    registerDiv.classList.toggle("slideRight");
  }, 2000);
  //  registerDiv.classList.toggle("slideRight");
});

const btnLog = document.querySelector("#loginAnchor");
const registerDiv = document.querySelector(".register");
btnLog.addEventListener("click", (e) => {
  registerDiv.classList.remove("slideRight");

  registerDiv.classList.toggle("slideLeft");

  setTimeout(() => {
    loginDiv.classList.toggle("slideRight");

  },2000);
  setTimeout(() => {
    loginDiv.classList.remove("slideLeft");
    loginDiv.classList.remove("slideRight");
    registerDiv.classList.remove("slideLeft");

    registerDiv.classList.remove("slideRight");
  }, 4000);
  // loginDiv.classList.toggle("slideRight");
  //  registerDiv.classList.toggle("slideRight");
});

// const firebaseConfig = {
//   apiKey: "AIzaSyDhZy4GB1EZua0_Ha2NIwNiHuuauLmrGNE",

//   authDomain: "login-register-page-4e082.firebaseapp.com",

//   projectId: "login-register-page-4e082",

//   storageBucket: "login-register-page-4e082.appspot.com",

//   messagingSenderId: "450411434779",

//   appId: "1:450411434779:web:4e2212ab2dfd8aeddef9be",
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);

// //initialize vars
// const auth = firbase.auth();
// const database = firbase.database();

// function register() {}

// /*
// VALIDATION
// if(validateEmail(email)==false|| validatePassword(password)==false){
//     alert('EMAIL OR PASS IS NOT OK')
//     return
//     //DONT CONTINUE RUNNING THE CODE
// }

// VALIDATE THE INPUTS THE SAME WAY!

// */

// function validateEmail(email) {
//   const regex = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
//   if (regex.test(email) == true) {
//     //Email is okay
//     return true;
//   } else {
//     //Email is not okay
//     return false;
//   }
// }

// function validatePassword(password) {
//   //Pass with lenght greater than 6 characters
//   if (password < 6) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validateField(field) {
//   if (field == null) {
//     return false;
//   }

//   if (field.length <= 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
