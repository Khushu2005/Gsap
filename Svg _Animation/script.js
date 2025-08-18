let path = "M 10 200 Q 500 200 990 200" ;
let finalpath = "M 10 200 Q 500 200 990 200" ;

let string = document.querySelector("#string");
string.addEventListener("mousemove",function(dets){
    path = `M 10 200 Q ${dets.x} ${dets.y} 990 200`


    gsap.to("svg path",{
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
        

    })
})
string.addEventListener("mouseleave",(dets)=>{
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"

    })
})