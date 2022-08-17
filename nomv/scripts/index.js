let image = document.querySelector('.container img');
gsap.timeline()
.from(image, {
    opacity: 0,
    duration: 3,
    ease: 'power4.out'
});