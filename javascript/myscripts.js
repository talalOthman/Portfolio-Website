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
let message = document.getElementById('message');
let settings = document.getElementById('settings');
let form = document.getElementById("form");
let mq = window.matchMedia( "(max-width: 375px)" );

// To make the transition smooth for all these elements
background.style.transition = "0.5s";
footer.style.transition = "0.5s";
navbar.style.transition = "0.5s";
sGallery.style.transition = "0.5s";
sHome.style.transition = "0.5s";
grid.style.transition = "0.5s";
project.style.transition = "0.5s";
resume.style.transition = "0.5s";

//to make the form disapper by default
form.style.opacity = "0";
form.style.pointerEvents = "none";



// TO make the 'Home' font bolder than 'Gallery' font
sHome.style.fontWeight = "1000";
sGallery.style.fontWeight = "1000";

// To make "home" option white when entering the site
sHome.style.color = "white";



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
gallery.addEventListener('click', function (e) {

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

  

  //To make the color of "Gallery" option white
  sGallery.style.color = "white";
  sHome.style.color = "#193441";


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

  // to change the color of the 'message' icon
  message.style.color = "#193441";
  settings.style.color = "#193441";

  //to make the form disapper by default
  form.style.opacity = "0";
  form.style.pointerEvents = "none";

});









// when we click home
home.addEventListener('click', function (e) {

  //To change the color to the home theme
  footer.style.backgroundColor = "#3E606F";
  navbar.style.backgroundColor = "#3E606F";
  background.style.backgroundColor = "#304f5c";


  e.preventDefault();

 

  //To make the color of "Home" option white
  sHome.style.color = "white";
  sGallery.style.color = "#193441";


  //To make the footer and containers appear smoothly 
  container.style.opacity = "1";
  container.style.pointerEvents = "all";

  footer.style.opacity = "1";
  footer.style.pointerEvents = "all";

  message.style.color = "#193441";
  settings.style.color = "#193441";

  if (footer.style.animationPlayState === "running") {
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

  //to make the form disapper by default
  form.style.opacity = "0";
  form.style.pointerEvents = "none";


});


//When you press 'Resume' option
resume.addEventListener('click', function (e) {

  e.preventDefault();

  // To activate the animation when you choose 'resume' option
  if(mq.matches){
    //nothing will happen
  }
  else{
  project.style.opacity = "1";
  project.style.animationDelay = "0s";
  project.style.animationName = "disapperAnimation";


  resume.style.opacity = "1";
  resume.style.animationDelay = "0s";
  resume.style.animationName = "notDisapper";
  }

  

  if (this.href) {
    let target = this.href;
    setTimeout(function () {
      window.location = target;
    }, 900);
  };

})



//When you press 'Projects' option
project.addEventListener('click', function (e) {

  e.preventDefault();

  // To activate the animation when 'project' option is pressed
  if(mq.matches){
    //nothing will happen
  }
  else{
  project.style.opacity = "1";
  project.style.animationDelay = "0s";
  project.style.animationName = "notDisapperReverse";


  resume.style.opacity = "1";
  resume.style.animationDelay = "0s";
  resume.style.animationName = "disapperAnimation";
  }

  // To delay the transition to allow the animation to play
  if (this.href) {
    let target = this.href;
    setTimeout(function () {
      window.location = target;
    }, 700);
  };


  //to make the form disapper by default
  form.style.opacity = "0";
  form.style.pointerEvents = "none";
})


message.addEventListener('click', function (e) {
  e.preventDefault();

  container.style.opacity = "0";
  container.style.pointerEvents = "none";

  


  message.style.color = "white";



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


  footer.style.animationPlayState = "running";
  //To make the footer and container dissappear smoothly
  footer.style.pointerEvents = "none";
  footer.style.animationName = "footerAnimation";

  //To make all unchosen icons go to the original color
  settings.style.color = "#193441";
  sGallery.style.color = "#193441";
  sHome.style.color = "#193441";

  //display the form
  form.style.opacity = "1";
  form.style.pointerEvents = "all";



})


settings.addEventListener('click', function(e){
  e.preventDefault();


  container.style.opacity = "0";
  container.style.pointerEvents = "none";

  


  settings.style.color = "white";



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


  footer.style.animationPlayState = "running";
  //To make the footer and container dissappear smoothly
  footer.style.pointerEvents = "none";
  footer.style.animationName = "footerAnimation";

  //To make all unchosen icons go to the original color
  message.style.color = "#193441";
  sGallery.style.color = "#193441";
  sHome.style.color = "#193441";

  //to make the form disapper by default
  form.style.opacity = "0";
  form.style.pointerEvents = "none";


})