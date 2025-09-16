document.addEventListener("DOMContentLoaded", function () {
    // Éxécuté lorsque le DOM est prêt
  
    let swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination"
      },
      keyboard: true
    });
  });