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
   

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })


     
   
}





// when we click home
document.getElementById('home').onclick = function (){
    container.style.opacity = "1";
    container.style.visibility = "visible";
    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
    sliderContainer.style.visibility = "hidden";
    
}

