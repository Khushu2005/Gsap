gsap.to("#page2 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        markers:false
        ,
        start:"top -0%",
        end:"top -130%",
        scrub:2,
        pin:true
    }
})