const container = document.getElementById('container');
const swiperContainer = document.getElementById('swiper-container');
const sliderContainer = document.getElementById('slider-container');



//when we click gallery
document.getElementById('gallery').onclick = function(){
    container.style.opacity = "0";
    container.style.visibility = "hidden";

    sliderContainer.style.opacity = "1";
    sliderContainer.style.visibility = "visible";
    

    swiperContainer.style.opacity = "1";
    swiperContainer.style.visibility = "visible";
   

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


     
   
}





// when we click home
document.getElementById('home').onclick = function (){
    container.style.opacity = "1";
    container.style.visibility = "visible";
    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
    sliderContainer.style.visibility = "hidden";
    
}

