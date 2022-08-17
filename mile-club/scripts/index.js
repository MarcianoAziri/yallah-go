gsap.registerPlugin(CustomEase);
let subtitle = document.querySelector('h2');
let info = document.querySelectorAll('.landing *:not(h2)');
gsap.timeline()
.from(subtitle, {
    opacity: 0,
    zoom: 10,
    duration: 1.5,
    ease: CustomEase.create("custom", "M0,0 C0.14,0 0.592,0.963 0.6,1 0.608,0.985 0.722,0.9 0.8,0.9 0.901,0.9 1,1 1,1 ")
}).from(info, {
    opacity: 0,
    duration: 2,
    ease: 'power4.out',
    delay: 0.5
});