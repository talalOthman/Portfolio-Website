/* HTML ELEMENTS PRACTICE

let nav = document.createElement('nav');
let ul = document.createElement('ul');
let liHome = document.createElement('li');
let liGallery = document.createElement('li');
let aHome = document.createElement('a');
let aGallery = document.createElement('a');





const swiperContainer = document.getElementById('swiper-container');


aHome.innerText = "Home";
aGallery.innerText = "Gallery";
aHome.style.color = "#193441";
aGallery.style.color = "#193441";


nav.appendChild(ul);

ul.appendChild(liHome);
ul.appendChild(liGallery);

liHome.appendChild(aHome);
liGallery.appendChild(aGallery);

aHome.classList.add('home');
aGallery.classList.add('gallery');

aHome.href = "#";
aGallery.href = "#";

aGallery.onclick = function(e){
  e.preventDefault();
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

   div.style.opacity = "0";
   div.style.visibility = "hidden";

  
    swiperContainer.style.opacity = "1";
    swiperContainer.style.visibility = "visible";
    
  }


  aHome.onclick = function (e){
    e.preventDefault();
    div.style.opacity = "1";
    div.style.visibility = "visible";

    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
   
}



document.body.appendChild(nav);


let div = document.createElement('div');
div.classList.add('container');


let aProject = document.createElement('a');
aProject.href = "https://github.com/talalOthman?tab=repositories";
let pProject = document.createElement('p');
pProject.innerText = "PROJECTS";

let aResume = document.createElement('a');
aResume.href = "Resume.pdf";
let pResume = document.createElement('p');
pResume.innerText = "RESUME";

div.appendChild(aProject);
div.appendChild(aResume);

aProject.appendChild(pProject);
aResume.appendChild(pResume);


document.body.appendChild(div);

*/










const swiperContainer = document.getElementById('swiper-container');
const container = document.getElementById('container');

//when we click gallery
let gallery = document.getElementById('gallery');
let sGallery = document.getElementById('sGallery');
sGallery.style.transition = "0.5s";
gallery.addEventListener('click', function(e){

  sGallery.style.fontWeight = "1000";
  sHome.style.fontWeight = "10";
  
  e.preventDefault();

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
    
  });

  


 
  



// when we click home
let home = document.getElementById('home');
let sHome = document.getElementById('sHome');
sHome.style.transition = "0.6s";
home.addEventListener('click' , function (e){


  e.preventDefault();
    container.style.opacity = "1";
    container.style.visibility = "visible";

    swiperContainer.style.opacity = "0";
    swiperContainer.style.visibility = "hidden";
   
    sHome.style.fontWeight = "1000";
    sGallery.style.fontWeight = "10";
});





