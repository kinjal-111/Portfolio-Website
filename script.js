

window.onscroll = function() {
    navBarFunction();
}

var navbar = document.getElementById("navbarJS");

function navBarFunction() {
    if(window.scrollY >= 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
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
