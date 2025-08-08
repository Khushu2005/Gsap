// Using Timeline

let tl = gsap.timeline()
tl.to("#box",{
    delay:0.8,
    duration:1.3,
    borderRadius:"50%",
   
    backgroundColor:"crimson",
    rotate:360,
     x:1400,
     yoyo:true,
     repeat:1
    
    

})
tl.to("#box2",{
   
    duration:1.3,
    borderRadius:"50%",
    backgroundColor:"darkgreen",
    
})
tl.to("#box3",{
    
    duration:1.3,
    borderRadius:"50%",
     backgroundColor:"cadetblue",
       rotate:360,
     x:1400,
        yoyo:true,
     repeat:1
})
tl.to("#box4",{
    
   duration:1.3,
    borderRadius:"50%",
    backgroundColor:"yellow",
})