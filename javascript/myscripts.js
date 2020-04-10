const container = document.getElementById('container');

document.getElementById('gallery').onclick = function(){
    container.style.opacity = "0";
    container.style.visibility = "hidden";
}

document.getElementById('home').onclick = function (){
    container.style.opacity = "1";
    container.style.visibility = "visible";
}

