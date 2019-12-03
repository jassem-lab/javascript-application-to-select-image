
var myImages = Array.from(document.querySelectorAll(".item img"));
var lightboxContainer = document.querySelector(".lightbox-container");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

var currentImageIndex = 0;


for (var i = 0; i < myImages.length; i++) {
    myImages[i].addEventListener("click", showLightBox)
}


function showLightBox(e) {

    lightboxContainer.style.transform = "scale(1,1)";
    lightboxContainer.firstElementChild.style.transform="scale(1,1)";
    var imgSrc = e.target.src;

    currentImageIndex = myImages.indexOf(e.target)
    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
}
function hideLightBox() {
    lightboxContainer.style.display = "none";

}

close.addEventListener("click", hideLightBox)
next.addEventListener("click" , goNext)
prev.addEventListener("click" , goPrev)

function goNext()
{
    currentImageIndex++;//1

    if(currentImageIndex == myImages.length)
    {
        currentImageIndex = 0;
    }

    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + myImages[currentImageIndex].src + ")";

}

function goPrev()
{
    currentImageIndex--;
    if(currentImageIndex < 0)
    {
        currentImageIndex = myImages.length - 1;
    }

    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + myImages[currentImageIndex].src + ")";

}


document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)// at2kd eno das sahm ymeen
    {
        goNext();
    }
    else if(e.keyCode == 37)
    {
        goPrev();
    }
    else if(e.keyCode == 27)
    {
        hideLightBox();
    }
})


