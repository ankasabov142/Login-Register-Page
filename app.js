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
$(function () {
  function RippleStyle(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }

  $(".registerButtonSubmit").click(function (e) {
    let rippleEl = $(`<span class="btn-ripple"></span>`).appendTo(this);
    let pos = $(this).offset();
    var width = 100;
    var height = 100;

    var posX = e.pageX - 510;
    var posY = e.pageY - 220;

    var rippleStyle = new RippleStyle(width, height, posX, posY);

    rippleEl.css(rippleStyle);
  });

  $(".registerButtonSubmit").on(
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
  }, 2000);
  setTimeout(() => {
    loginDiv.classList.remove("slideLeft");
    loginDiv.classList.remove("slideRight");
    registerDiv.classList.remove("slideLeft");

    registerDiv.classList.remove("slideRight");
  }, 4000);
 
});
