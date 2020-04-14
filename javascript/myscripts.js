const container = document.getElementById('container');
const swiperContainer = document.getElementById('swiper-container');




//when we click gallery
document.getElementById('gallery').onclick = function(){


  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
  
    // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  
  },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true, 
      
    },
  });

   container.style.opacity = "0";
   container.style.visibility = "hidden";

  
    swiperContainer.style.opacity = "1";
    swiperContainer.style.visibility = "visible";
    
  }

  


 
  



// when we click home
document.getElementById('home').onclick = function (){
    container.style.opacity = "1";
    container.style.visibility = "visible";

    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
   
    
}

