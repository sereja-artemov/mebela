$(document).ready(function(){

    var btn = document.querySelector(".main-nav__mobile-menu");
    var nav = document.querySelector(".main-nav__list");
    
    btn.addEventListener("click", function(event) {
      event.preventDefault();
      nav.classList.toggle("active");
      btn.classList.toggle("active-menu-btn");
    })

    //submenu

    var link = document.querySelector(".down");
    var menu = document.querySelector(".main-nav__submenu");
    
    link.addEventListener("click", function(event) {
      event.preventDefault();
      menu.classList.toggle("active-menu");
    })

    //форма
    var modal_close = document.querySelector(".modal__close-btn");
    var modal = document.querySelector(".modal-wrapper");
    var mail_link = document.querySelector(".main-header__email-link");

    mail_link.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.toggle("modal-show");
      })
      modal_close.addEventListener("click", function(event) {
        event.preventDefault();
        modal.classList.toggle("modal-show");
      })  
      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (modal.classList.contains("modal-show")) {
            modal.classList.remove("modal-show");
          }
        }
      });

          //выбор города
    
          var city_link = document.querySelector(".main-header__region-link");
          var region_modal = document.querySelector(".main-header__region-modal");
          
          city_link.addEventListener("click", function(event) {
            event.preventDefault();
            region_modal.classList.toggle("active-menu");
          })
      

  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 40,
    autoWidth: true,
    responsiveClass:true,
    nav: false,
    navText: false,
    dots: false,
    smartSpeed: 600,
    responsive: {
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            
        }
    }
})
    //Свои кнопки управления
    $(".slider__control-next").click(function(){
        $('.owl-carousel').trigger("next.owl.carousel");
    });
    $(".slider__control-prev").click(function(){
        $('.owl-carousel').trigger("prev.owl.carousel");
});
    $(".fancybox").fancybox();
});