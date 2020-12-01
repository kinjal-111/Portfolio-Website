$(document).ready(function(){
    $(window).scroll(function(){
        // sticky custnavbar on scroll script
        if(this.scrollY > 20){
            $('.custnavbar').addClass("sticky");
        }else{
            $('.custnavbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.custnavbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/custnavbar script
    $('.menu-btn').click(function(){
        $('.custnavbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


window.onscroll = function() {
    navBarFunction();
}

var custnavbar = document.getElementById("navbarJS");

function navBarFunction() {
    if(window.scrollY >= 20) {
        custnavbar.classList.add("sticky");
    } else {
        custnavbar.classList.remove("sticky");
    }
}

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer",  "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

// When the user clicks on <div>, open the popup
function mygrade1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}


// When the user clicks on <div>, open the popup
function mygrade2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");

}
// When the user clicks on <div>, open the popup
function mygrade3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});