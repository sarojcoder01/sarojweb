// document.addEventListener("contextmenu", function(e){
//     e.preventDefault()
// },false);

var main= document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px" 
    crsr.style.top = dets.y+"px" 
})

gsap.to("#nav #arw",{
    duration: 2.5,
    rotate: 180,
    scrollTrigger:{
        trigger:'#nav #arw',
        scroller:'body',
        markers: false,
        start:"top 1%",
        end:"top -95%",
        scrub: 1.5,        
    },
})
gsap.to("#moving-txt .con",{
    duration: 1.5,
    x : "-40%",
    scrollTrigger:{
        trigger:'#moving-txt .con',
        scroller:'body',
        markers: false,
        start:"top 95%",
        end:"top -20%",
        scrub: 1.5,        
    },
}) 

gsap.from("#page3 .dev-image img",{
    opacity: 0,
    y:"35%",
    stagger:0.1,
    scrollTrigger:{
        trigger:'#page3 .dev-image',
        scroller:'body',
        markers: false,
        start:"top 100%",
        end:"top 30%",      
        scrub:2,
    },
}) 

gsap.from("#page4 .port-image img",{
    opacity: 0,
    y:"35%",
    stagger:0.1,
    scrollTrigger:{
        trigger:'#page4 .port-image img',
        scroller:'body',
        markers: false,
        start:"top 110%",
        end:"top 20%",  
        scrub:2,    
    },
}) 

gsap.from("#page2 h1",{
    opacity: 0,
    y:"35%",
    duration: 0.1,
    scrollTrigger:{
        trigger:'#page2 h1',
        scroller:'body',
        markers: false,
        start:"top 95%",
        end:"top 80%",    
        scrub:2,    
    },
})

gsap.from("#page2 .btn",{
    opacity: 0,
    y:"75%",
    stagger:0.1,
    scrollTrigger:{
        trigger:'#page2 .btn',
        scroller:'body',
        markers: false,
        start:"top 95%",
        end:"top 80%",  
        scrub:2,    
    },
})