// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

// Open phone-call
const consultationBtn = document.querySelectorAll('.consultation')
consultationBtn.forEach(button => {
  button.onclick = () => (window.location.href = "tel:+1234567890")
})