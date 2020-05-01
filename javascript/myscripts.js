
// Declaration for all the used elements
let background = document.getElementById('background');
let navbar = document.getElementById('navbar');
let footer = document.getElementById('footer');
let footerIcons = document.getElementsByClassName('fab');
let container = document.getElementById('container');
let gallery = document.getElementById('gallery');
let sGallery = document.getElementById('sGallery');
let home = document.getElementById('home');
let sHome = document.getElementById('sHome');
let grid = document.getElementById('grid');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let image4 = document.getElementById('image4');
let resume = document.getElementById('Resume');
let project = document.getElementById('Projects'); 

// To make the transition smooth for all these elements
background.style.transition = "0.5s";
footer.style.transition = "0.5s";
navbar.style.transition = "0.5s";
sGallery.style.transition = "0.5s";
sHome.style.transition = "0.5s";
grid.style.transition = "0.5s";
project.style.transition = "0.5s";
resume.style.transition = "0.5s";


sHome.style.fontWeight = "1000";
sGallery.style.fontWeight = "10";


//To pause the animation
image1.style.animationPlayState = "paused";
image2.style.animationPlayState = "paused";
image3.style.animationPlayState = "paused";
image4.style.animationPlayState = "paused"; 
image5.style.animationPlayState = "paused"; 
image6.style.animationPlayState = "paused"; 
image7.style.animationPlayState = "paused"; 
image8.style.animationPlayState = "paused"; 

footer.style.animationPlayState = "paused";

  //when we click gallery
  gallery.addEventListener('click', function(e){
    
    //To start the animation
    image1.style.animationPlayState = "running";
    image2.style.animationPlayState = "running";
    image3.style.animationPlayState = "running";
    image4.style.animationPlayState = "running"; 
    image5.style.animationPlayState = "running";
    image6.style.animationPlayState = "running"; 
    image7.style.animationPlayState = "running"; 
    image8.style.animationPlayState = "running";  

    footer.style.animationPlayState = "running";

  //To make the "Gallery" option bolder
  sGallery.style.fontWeight = "1000";
  sHome.style.fontWeight = "10";


  //FUTURE UPDATE
  /*To change the color of the site when the gallery choice is chosen
  background.style.backgroundColor = "#0373fb";
  footer.style.backgroundColor = "#037AFB";
  navbar.style.backgroundColor= "#037AFB";
  */


  //To prevent default behaviors
  e.preventDefault();


  //To make the footer and container dissappear smoothly
  footer.style.pointerEvents = "none";
  footer.style.animationName = "footerAnimation";
  
  

  container.style.opacity = "0";
  container.style.pointerEvents = "none";


  //To make the grid appear
  grid.style.opacity = "1";
  grid.style.pointerEvents = "all";
  grid.style.display = "grid";
    
  });

  


 
  



  // when we click home
  home.addEventListener('click' , function (e){

  //To change the color to the home theme
  footer.style.backgroundColor = "#3E606F";
  navbar.style.backgroundColor = "#3E606F";
  background.style.backgroundColor = "#304f5c";


  e.preventDefault();

  //To make the "Home" option bolder
  sHome.style.fontWeight = "1000";
  sGallery.style.fontWeight = "10";


  //To make the footer and containers appear smoothly 
  container.style.opacity = "1";
  container.style.pointerEvents = "all";
    
  footer.style.opacity = "1";
  footer.style.pointerEvents = "all";

  if(footer.style.animationPlayState === "running"){
    footer.style.animationName = "reverse";
  }

  
  

  //To make the grid disappear
  grid.style.opacity = "0";
  grid.style.pointerEvents = "none";
  /*grid.style.display = "none";*/

  //To pause the animation
image1.style.animationPlayState = "paused";
image2.style.animationPlayState = "paused";
image3.style.animationPlayState = "paused";
image4.style.animationPlayState = "paused"; 
image5.style.animationPlayState = "paused"; 
image6.style.animationPlayState = "paused"; 
image7.style.animationPlayState = "paused"; 
image8.style.animationPlayState = "paused"; 


});

resume.addEventListener('click', function(e){

  e.preventDefault();

  project.style.opacity = "1";
  project.style.animationDelay = "0s";
  project.style.animationName = "disapperAnimation";
  

  resume.style.opacity = "1";
  resume.style.animationDelay = "0s";
  resume.style.animationName = "notDisapper";
})



