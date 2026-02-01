gsap.registerPlugin(ScrollTrigger);

// gsap.from(".images-container",{
//     y:30,
//     opacity:0,
//     duration:1,
//     scrollTrigger: {
//         trigger: ".images-container",
//         start: "top 50%",
//         end: "bottom top",
//         scrub:true,
//         markers:true
//     }
// })

// Animate all images with .imageReveal class
// Animate each image on scroll
// Select all images with .imageReveal
gsap.utils.toArray(".imageReveal").forEach((img, i) => {
    gsap.from(img, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: i * 0.2, // stagger by 0.2s per image
        scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none none",
            scrub: 1.2,
        }
    });
});
