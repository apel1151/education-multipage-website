var menuBtn = document.querySelector("#menu-btn");

var navBar = document.querySelector(".navbar");


menuBtn.onclick = () =>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("activ");
}

let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");
let registerForm = document.querySelector(".register-form");
let loginForm  = document.querySelector(".login-form");

registerBtn.onclick = () =>{
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");

}
loginBtn.onclick = () =>{
    registerBtn.classList.remove("active");
    loginBtn.classList.add("active");
    registerForm.classList.remove("active");
    loginForm.classList.add("active");

}


var accountBtn = document.querySelector("#account-btn");
var accountForm = document.querySelector(".account-form");
var closeBtn = document.querySelector("#close-form");


accountBtn.onclick = () =>{
    accountForm.classList.add('active');
}
closeBtn.onclick = () =>{
    accountForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    grabcursor:true,
  });

var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabcursor:true,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination"
      },
    
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
   
  });

var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabcursor:true,
    spaceBetween: 20,

    pagination: {
      el: ".swiper-pagination"
    },
    
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
   
  });

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabcursor:true,
    spaceBetween: 20,
    
    breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
   
  });


  /* load more */

  let accor = document.querySelectorAll(".faq .accordion-container .accordion");

  accor.forEach(acco =>{
    acco.onclick = () =>{
      acco.classList.toggle("active");
     
    }
  })
 


 document.querySelector(".load-more .btn").onclick = () =>{
  document.querySelectorAll(".courses .box-container .hide").forEach(show =>{
    show.style.display = "block";
  });
  document.querySelector(".load-more .btn").style.display = "none";
}

