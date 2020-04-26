const background = document.getElementById('background');
const navbar = document.getElementById('navbar');
const footer = document.getElementById('footer');
const footerIcons = document.getElementsByClassName('fab');
const swiperContainer = document.getElementById('swiper-container');
const container = document.getElementById('container');


footer.style.webkitAnimationName = "footerAnimation";
footer.style.webkitAnimationTimingFunction = "linear";
footer.style.webkitAnimationFillMode = "forwards";
footer.style.webkitAnimationDuration = "0.5s";
footer.style.webkitAnimationPlayState = "paused";

background.style.transition = "0.5s";
footer.style.transition = "0.5s";
navbar.style.transition = "0.5s";
//when we click gallery
let gallery = document.getElementById('gallery');
let sGallery = document.getElementById('sGallery');
sGallery.style.transition = "0.5s";

gallery.addEventListener('click', function(e){

  
  footer.style.webkitAnimationPlayState = "running";

  sGallery.style.fontWeight = "1000";
  sHome.style.fontWeight = "10";
  background.style.backgroundColor = "#0373fb";
  e.preventDefault();

  footer.style.backgroundColor = "#037AFB";
  navbar.style.backgroundColor= "#037AFB";

  


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
    

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  });
  
   container.style.opacity = "0";
   container.style.visibility = "hidden";

    swiperContainer.style.opacity = "1";
    swiperContainer.style.visibility = "visible";
    
  });

  


 
  



// when we click home
let home = document.getElementById('home');
let sHome = document.getElementById('sHome');
sHome.style.transition = "0.6s";
home.addEventListener('click' , function (e){



  



  footer.style.backgroundColor = "#3E606F";
  navbar.style.backgroundColor = "#3E606F";
  background.style.backgroundColor = "#304f5c";

  e.preventDefault();
    container.style.opacity = "1";
    container.style.visibility = "visible";
    
    
    
    footer.style.animationName = "footerAnimationBackward";
    
    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
   
    sHome.style.fontWeight = "1000";
    sGallery.style.fontWeight = "10";
});





