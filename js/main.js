window.addEventListener("scroll" , function(){
    let navbar = document.getElementById("basic-nav");
    let logowhite = document.getElementById("navbar-brand");
    let logdark = document.getElementById("navbar-brand-dark");
    if(window.scrollY >= 200){
        navbar.classList.add("navbar-scrolled");
        logowhite.classList.add('hidden');
        logdark.classList.remove('hidden')
        
        

    }else{
        navbar.classList.remove("navbar-scrolled");
        logowhite.classList.remove("hidden");
        logdark.classList.add("hidden")
    
    }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,     
  spaceBetween: 20,
  loop: true,
  rtl: false,                 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3.5 },
    992: { slidesPerView: 2.5 },
    768: { slidesPerView: 1.5 },
    576: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  }
});

      document.querySelectorAll('.qaCard').forEach(function(card) {
      const icon = card.querySelector('.qaicon');
      const answer = card.querySelector('.qaAnswer');
      const eyeOff = card.querySelector('.eyeOff');
      const eyeOn = card.querySelector('.eyeOn');

      function toggleQA(e) {
        if (e && e.target.closest('.qaicon')) return;
        const isAnswerVisible = answer.style.display === 'block';
        if (isAnswerVisible) {
          answer.style.display = 'none';
          eyeOff.style.display = '';
          eyeOn.style.display = 'none';
          icon.title = 'Show Answer';
        } else {
          answer.style.display = 'block';
          eyeOff.style.display = 'none';
          eyeOn.style.display = '';
          icon.title = 'Hide Answer';
        }
      }
      icon.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleQA();
      });
      card.addEventListener('click', toggleQA);
    });