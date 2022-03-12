document.addEventListener('DOMContentLoaded',init);

var myInterval= "";

function init() {
  
  //create shortcut vars
  
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  const caption = document.querySelector(".caption");
  const controls = document.querySelector(".controls");
  

  //Create short cuts for thumbnail images;
  const al = document.querySelector(".al");
  const althumb = al.querySelectorAll("img");
  const ha = document.querySelector(".ha");
 const hathumb = ha.querySelectorAll("img");
  const ys = document.querySelector(".ys");
 const ysthumb = ys.querySelectorAll("img");
   
  
  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.remove("visible","abs-pos");
    slide.classList.add("hide","abs-pos");
  });

  //with JS active, hide all images
  althumb.forEach((thumbnail) =>{
    thumbnail.classList.add("hide","abs-pos")});

  hathumb.forEach((thumbnail) => { 
    thumbnail.classList.add("hide","abs-pos");
  });
  ysthumb.forEach((thumbnail) =>{
    thumbnail.classList.add("hide","abs-pos");
  });

  
  // show the first slide
  slides[0].classList.remove("hide");
  althumb[0].classList.remove("hide");
  hathumb[0].classList.remove("hide");
  ysthumb[0].classList.remove("hide");
  
//make controls work
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);

   //get Caption dynamically
   caption.innerHTML = frame.firstElementChild.alt;

   //Show the controls
 controls.style.display ="block";

 myInterval =setInterval(changeSlide, 2000);

}
// Autoplay

 /*const frame = document.querySelector(".frame");
 const slideshow =frame.querySelectorAll("img");
 const caption = document.querySelector(".caption");

 var count = 0;

 if (count <= slideshow.length ){
   setInterval (function(timer){
    slideshow[0].src =slideshow[count].src;
    caption.innerHTML = slideshow[count].alt;
     count++;
    
     if(count == slideshow.length ){
       count = 0;
     }
     caption.innerHTML = slideshow[count-1].alt;
   }, 2000);
  
 }*/
 const plcontainer = document.querySelector(".placecontainer");
 const heading = document.querySelectorAll(".headtitle");
 plcontainer.style.border="none";
 plcontainer.style.marginLeft = "-70px";
 //heading.classList.add("hide");
 
 
function changeSlide(e) {
    // stop link from trying to reload page
    if(e){
      e.preventDefault();
      clearInterval(myInterval);
     
    }
    
    //shortcut vars for changeSlide fuctions
    const frame = document.querySelector(".frame");
   const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    const caption = document.querySelector(".caption");
    let nextUp = "";

    if(!e || e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    } else {
nextUp = showing.previousElementSibling;
    }
  
    //if(e.target.className == 'back-btn') {
     //nextUp = showing.previousElementSibling;
    
    
    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    // change caption text

    caption.innerHTML = nextUp.alt;
   
  }
  
 // const showImageBtn= document.querySelector(".showinmagebtn");

//showImageBtn.addEventListenerer("click",alshowImage);


   
//function alshowImage(){
  
      //const back_btn = document.querySelector(".back-btn");
      //const next_btn = document.querySelector(".next-btn");

 //showcase.classList.remove('hide');
 //var imageArr =["al1.png","al2.png","al3.png","al4.png","al5.png"];
 //var i=0;
 //next_btn.addEventListener("click",changeImage);
 //back_btn.addEventListener("click", changeImage);
 //caption.innerHTML = frame.firstElementChild.alt;

 //function changeImage(){
  
////const imagebtn = document.getElementById('showimagebtn');

//imagebtn.addEventListener('click',e =>{
//  alchangeSlide(e);
//});

function althumbShow(e){
  //if(e){
   // e.preventDefault();
   // clearInterval(myInterval);
   
  
  const frame = document.querySelector(".frame");
  const firstImage = frame.querySelector("#alaska");
  const imageShow = firstImage.getElementById("al1");
  console.log(e);

  //const slides = document.querySelector("#alaska");
  // let showing = slides.querySelector(".current");
  // console.log("showing");
  // const caption = document.querySelector(".caption");
  // const myImages = e.target.querySelectorAll("IMG");
   //const slides = myImages.querySelectorAll("IMG");
 //frame.src = myImages.getAttribute("src");
 //  
 //  let nextUp = "";
};


function alchangeSlide(e){
  if(e){
    e.preventDefault();
    clearInterval(myInterval);
  }
  //shortcut vars
  const frame = document.querySelector(".frame");
  const myImages = e.target.querySelectorAll("img");



  
  }
//const myImageSrc= document.getElementById("al1").src
 // myImages.addEventListener("click",function(){
    //frame.src = myImages.getAttribute("src");

   //const al = document.querySelector(".al");
  // const althumb = al.querySelectorAll("img");
  //const myImages = frame.querySelector("#alaska");
  // let showing = slides.querySelectorAll("img");
   



  // const caption = document.querySelector(".caption")
 
  // const frame = document.querySelector(".frame");
  //frame.src=images.getAttribute.src; 
 //const  myImage = document.getElementById("almainimage"); 
 //myImage.addEventListener("click",function(){
  // frame.src = myImage.src;


 //const holder = document.createDocumentFragment();

 //images.forEach((item)=> {
  // holder.appendChild(item);
  // console.log(holder);
 //});
  //frame.innerHTML = images;
  //console.log('change albumn');
 // frame.appendChild(holder);


  
  //const image = slides.getAttribute.src("img");
   /*let showing = slides.querySelector(".current");
   const caption = slides.querySelector(".caption");
   let nextUp = "";

   if(!e || e.target.className == 'next-btn') {
     nextUp = showing.nextElementSibling;
   } else {
    nextUp = showing.previousElementSibling;
   }

   // deactivate current image
   showing.classList.toggle("hide");
   showing.classList.toggle("current");
   
   //make sure next image is there
   if (!nextUp) {
     nextUp = slides[slides.length - 1];
   }
 
   if (nextUp.nodeName !== "IMG") {
     nextUp = slides[0];
   }
 
   // activate next image
   nextUp.classList.toggle("hide");
   nextUp.classList.toggle("current");

   // change caption text

   caption.innerHTML = nextUp.alt;
  
 }
 

 /* const frame = document.querySelector(".frame");
 const alaskaslide = frame.querySelector("#alaska");
const alaskaslideshow = alaskaslide.querySelectorAll("img");
  let nextUp = "";
  
  if(e.target.className == 'next-btn') {
    nextUp = showing.nextElementSibling;
  }

  if(e.target.className == 'back-btn') {
    nextUp = showing.previousElementSibling;
  }
  
  // deactivate current image
  showing.classList.toggle("hide");
  showing.classList.toggle("current");
  
  //make sure next image is there
  if (!nextUp) {
    nextUp = alaskaslideshow[alaskaslide.length - 1];
  }

  if (nextUp.nodeName !== "IMG") {
    nextUp = slides[0];
  }

  // activate next image
  nextUp.classList.toggle("hide");
  nextUp.classList.toggle("current");

}



//alslideshow.style.visibility="visible";

//next_btn.addEventListener("click",changeSlide);
//back_btn.addEventListener("click", changeSlide);
//caption.innerHTML = frame.firstElementChild.alt;

     
    // const alaska = document.querySelectorAll("#alaska");
     //const displaybtn = alaska.querySelectorAll("showimage");

   */  
     
       
     
     

   