

  
  new Swiper('.swiper-logo', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 3
      }
    }
  });

    

document.addEventListener("DOMContentLoaded", function () {
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    function updatePrices() {
        const isYearly = billingToggle.checked;
        monthlyPrices.forEach(price => price.classList.toggle('d-none', isYearly));
        annualPrices.forEach(price => price.classList.toggle('d-none', !isYearly));
    }

    billingToggle.addEventListener('change', updatePrices);

    // Set correct display on load
    updatePrices();
});


    
    var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
    
    
    
    
    const playButton = document.getElementById('playButton');
    const videoPlayer = document.getElementById('videoPlayer');

    playButton.addEventListener('click', function() {
        // Hide the play button and show the video
        playButton.style.display = 'none';
        videoPlayer.style.display = 'block';
        videoPlayer.play();
    });






