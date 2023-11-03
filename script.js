// declare variables 
let header = document.querySelector(".header");
let closeBox = document.querySelector(".closeBox");
let navbar = document.querySelector(".navbar");
let menuBox = document.querySelector(".menuBox");
let goUp = document.querySelector(".goUp");

window.onscroll = () =>{
  navbar.classList.remove("active");

    if (window.scrollY > 120){
        header.classList.add("active");
        goUp.classList.add("active");
    }else{
        header.classList.remove("active");
        goUp.classList.remove("active");
    }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
  }
});

// show navbar onclick 
menuBox.onclick = () =>{
    navbar.classList.add("active");
  }
  // hide navbar onclick 
closeBox.onclick = () =>{
    navbar.classList.remove("active");
  }