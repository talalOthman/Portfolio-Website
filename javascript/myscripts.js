let background = document.getElementById('background');
let navbar = document.getElementById('navbar');
let footer = document.getElementById('footer');
let footerIcons = document.getElementsByClassName('fab');
let swiperContainer = document.getElementById('swiper-container');
let container = document.getElementById('container');




background.style.transition = "0.5s";
footer.style.transition = "0.5s";
navbar.style.transition = "0.5s";
//when we click gallery
let gallery = document.getElementById('gallery');
let sGallery = document.getElementById('sGallery');
sGallery.style.transition = "0.5s";

gallery.addEventListener('click', function(e){

  


  sGallery.style.fontWeight = "1000";
  sHome.style.fontWeight = "10";
  background.style.backgroundColor = "#0373fb";
  e.preventDefault();

  footer.style.backgroundColor = "#037AFB";
  navbar.style.backgroundColor= "#037AFB";

  footer.style.opacity = "0";
  footer.style.visibility = "hidden";

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
  container.style.pointerEvents = "none";

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
    container.style.pointerEvents = "all";
    
    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
   
    sHome.style.fontWeight = "1000";
    sGallery.style.fontWeight = "10";

    footer.style.opacity = "1";
    footer.style.visibility = "visible";
});





