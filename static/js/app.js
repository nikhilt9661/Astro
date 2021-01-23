const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const submitLogin =  document.querySelector(".btn-login");

var baseURL = 'localhost:5000';
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

submitLogin.addEventListener("click", () =>{
    window.location.href = baseURL +"/home";
})
function homeCall(){
    window.location.href = baseURL +"/home";
}

// $(document).ready(function(){
//     $(".btn-login").click(function(){
//     //   alert("The paragraph was clicked.");
//     // window.location.replace("/home");
//     console.log("click btn");
//     //  window.location.href = baseURL +"/home";
//     });
//   });