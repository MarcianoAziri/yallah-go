gsap.registerPlugin(ScrollTrigger);
let landing = document.querySelector('.diamond');

gsap.timeline()
.from(landing, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});

let sponsorTable = document.querySelector('#table-sponsor');
let checkboxes = document.querySelectorAll('#table-sponsor tr td.check');

gsap.timeline({
    scrollTrigger: {
        trigger: sponsorTable,
        start: 'top center'
    }
})
.from(checkboxes, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});


let mediaImage = document.querySelector('.media-info img');

gsap.timeline({
    scrollTrigger: {
        trigger: mediaImage,
        start: 'top 65%'
    }
})
.from(mediaImage, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});