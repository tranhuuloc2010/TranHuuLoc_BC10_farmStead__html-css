document.getElementById("nightmode").addEventListener("change", function (e) {
  document.body.classList.toggle("nightmode");
});

// function showMenu() {
//     var subMenu = document.getElementById("hiden-submenu");
//     if (subMenu.style.display == "block") {
//     subMenu.style.display = "none";
//     } else{
//         subMenu.style.display = "block";
//     }

//   }

$(window).scroll(function () {
  if ($(document).scrollTop() > 0) {
    $("#header").addClass("header-scroll ");
  } else {
    $("#header").removeClass("header-scroll");
  }

  if ($(document).scrollTop() > 0) {
    $("#navbar__logo").addClass("navbar__logo-color ");
  } else {
    $("#navbar__logo").removeClass("navbar__logo-color");
  }

  if ($(document).scrollTop() > 0) {
    $("#mode__themes").addClass("mode__themes-color ");
  } else {
    $("#mode__themes").removeClass("mode__themes-color");
  }

  if ($(document).scrollTop() > 0) {
    $("#menu__button").addClass("menu__button-color ");
  } else {
    $("#menu__button").removeClass("menu__button-color");
  }
});

// Scroll top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
