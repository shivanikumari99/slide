const slides=document.querySelectorAll(".Slide")
var counter=0;
slides.forEach((slide,index)=>{
slide.style.top=`${index*100}%`
}
)
const goprev=()=>{
  counter--;
  slideimg();
  }
const  gonext=()=>{ 
  counter++;
  slideimg();
  if(counter>=3)
  {
    counter--;
  }
}

const slideimg=()=>{
  slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter * 100}%)`
  })
}


