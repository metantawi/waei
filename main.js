// Toggle Menu

let toggle = document.querySelector(".toggle")
let links = document.querySelector(".links")

toggle.onclick = function () {
  links.classList.toggle("open")
  dark.classList.toggle ("open") // Dark 
}


// Dark Body
let body = document.querySelector("body")
let dark = document.querySelector(".dark")

dark.onclick = function () {
  body.classList.toggle ("dark")
}