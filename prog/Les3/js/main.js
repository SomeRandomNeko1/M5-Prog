const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");
const toggle = document.getElementById("toggle");
const header = document.getElementsByClassName("header")[0]
const showCase = document.getElementsByClassName("showCase")[0];
const showCaseInput = document.getElementsByClassName("showCase__input")[0];
const showCaseFont = document.getElementsByClassName("showCase__font");
const showCaseOutput = document.getElementsByClassName("showCase__output");
const hearts = document.getElementsByClassName("heart");

toggle.onclick = function(event){
  if(event.target.checked == true){
    header.style.background = "#2E3440";
    showCase.style.background = "#2E3440";
    showCaseInput.style.borderBottom = "0.2rem solid #ECEFF4";
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].children[0].style.color = "#ECEFF4";
    }
    for (let i = 0; i < showCaseFont.length; i++) {
      showCaseFont[i].style.color = "#ECEFF4";
    }
    for (let i = 0; i < showCaseOutput.length; i++) {
      showCaseOutput[i].style.color = "#ECEFF4";
    }
  }
  else {
    header.style.background = "#ECEFF4";
    showCase.style.background = "#ECEFF4";
    showCaseInput.style.borderBottom = "0.2rem solid #2E3440";
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].children[0].style.color = "#2E3440";
    }
    for (let i = 0; i < showCaseFont.length; i++) {
      showCaseFont[i].style.color = "#2E3440";
    }
    for (let i = 0; i < showCaseOutput.length; i++) {
      showCaseOutput[i].style.color = "#2E3440";
    }
  }
}

input.oninput = function(event){
  dancing.innerText = event.target.value;
  lato.innerText = event.target.value;
  merriweather.innerText = event.target.value;
}

for (let i = 0; i < hearts.length; i++){
  hearts[i].onclick = function(){
    for (let i = 0; i < hearts.length; i++){
      hearts[i].children[0].classList = "fa-regular fa-heart heart__logo"
    }
    hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
  }
}
