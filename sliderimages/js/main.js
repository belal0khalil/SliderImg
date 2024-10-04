
var modal = document.querySelector(".my-modal");
var AllImgs=  Array.from(document.querySelectorAll(".row img"));
var closeBtn = document.querySelector(".closeBtn");
var nextBtn = document.querySelector(".nextBtn")
var previousBtn = document.querySelector(".previousBtn")
var modalcontent = document.querySelector(".modal-content")
var currentIndex;

function showmodal() {
    modal.classList.remove("d-none");
}

function Hidemodal() {
    modal.classList.add("d-none");
}

function getcurrentimg(e) {
    var currentImg = e.target;
     currentIndex= AllImgs.indexOf(currentImg);
    var currentImgSrc = e.target.getAttribute("src");
     modal.querySelector("img").setAttribute("src" , currentImgSrc);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= AllImgs.length) {
        currentIndex = 0
    }
    var nextSlideSrc = AllImgs[currentIndex].getAttribute("src");
   modal.querySelector("img").setAttribute("src" , nextSlideSrc);
}

function prevSlide() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = AllImgs.length - 1;
    }
    var pervslidaSrc = AllImgs[currentIndex].getAttribute("src");
   modal.querySelector("img").setAttribute("src" , pervslidaSrc)
}

for( let i = 0 ; i<AllImgs.length ; i++) {
    AllImgs[i].addEventListener("click" , function(e) {
        showmodal();
        getcurrentimg(e)
    })
}

modalcontent.addEventListener("click",function(e) {
  e.stopPropagation()
})

document.addEventListener("keydown" , function(e) {
    switch (e.code) {
        case "ArrowRight":
            nextSlide();
            break;
         case "ArrowLeft":
            prevSlide();
            break;
         case "Escape":
            Hidemodal();
            break;      
    }
})

modal.addEventListener("click" , Hidemodal);
nextBtn.addEventListener("click", nextSlide)
previousBtn.addEventListener("click" , prevSlide)
closeBtn.addEventListener("click" , Hidemodal)