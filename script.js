const rect = document.querySelector('.center');
 rect.addEventListener('mousemove', (details) =>{
 let rectangleLocation = rect.getBoundingClientRect()
  rectangleVal = details.clientX - rectangleLocation.left;
 
  if(rectangleVal < rectangleLocation.width * (1/3)){
   var redColor = gsap.utils.mapRange(0, rectangleLocation.width/3, 255, 0, rectangleVal);
  gsap.to(rect,{
   background: `rgb(${redColor}, 0, 0)`,
   ease: Power4,
  })
  }else if(rectangleVal < rectangleLocation.width * (2/3)){
   var redColor = gsap.utils.mapRange(rectangleLocation.width * (1/3), rectangleLocation.width * (2/3), 0, 255, rectangleVal);
   gsap.to(rect,{
    background: `rgb(0, ${redColor}, 0)`,
    ease: Power4,
   })
  }else{
   var blueColor = gsap.utils.mapRange(rectangleLocation.width * (2/3), rectangleLocation.width, 0, 255, rectangleVal);
   gsap.to(rect,{
    background: `rgb(0, 0, ${blueColor})`,
    ease: Power4,
   })
  }
});

rect.addEventListener('mouseleave', ()=>{
   gsap.to(rect,{
      background: "white"
   })
})


 