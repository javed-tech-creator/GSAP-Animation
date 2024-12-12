// console.log(gsap);

// gsap.to('#box',{
//     x:1000,
//     duration:5,
//     delay:1,
//     rotate:360,
//     borderRadius:'50%',
//     scale:0.5

// })

// gsap.from('#box1',{
//     x:1000,
//     duration: 2.5,
//     delay:1,
//     rotate:360,
//     backgrounColor: 'limegreen',
//     borderRadius:'50%',
//     repeat: Infinity,
//     yoyo: true,
// })

// gsap.from('h1',{
//     y:1000,
//     duration: 2.5,
//     delay:1,
//     stagger:1,  // one by one ayega
//     opacity: 0,
//     repeat: -1,
//     yoyo: true,
 
// })


const t1 = gsap.timeline()
t1.to('#box1',{
        x:1250,
        duration: 2.5,
        delay:1,
        
    })

    t1.to('#box2',{
        x:1090,
        duration: 2.5,
        rotate:360
      
    })

    t1.to('#box3',{
        x:920,
        duration: 2.5,
        rotate:-360
       
    })

    t1.to('#box4',{
        x:671,
        duration: 2.5,
        rotate:-180
       
    })

// second side...................................

const t2 = gsap.timeline()

    t2.to('#box5',{
        x:-1250,
        duration: 2.5,
        delay:1,
       
        
    })

    t2.to('#box6',{
        x:-1090,
        duration: 2.5,
        rotate:360
      
    })

    t2.to('#box7',{
        x:-920,
        duration: 2.5,
        rotate:-360
       
    })

    t2.to('#box8',{
        x:-675,
        duration: 2.5,
        rotate:-180
        
       
    })