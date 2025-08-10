gsap.from("#page1 #box",{
    scale:0,
    delay:0.1,
    duration:2,
    rotate:390,

})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:390,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroll:"body",
        markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:5
    }
    
})
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:390,
    
})