let sponsors = document.querySelectorAll('.sponsors');

sponsors.forEach(sponsor => {
    gsap.timeline({
        scrollTrigger: {
          trigger: sponsor,
          start: 'top 80%'
        }
      })
    .from(sponsor, {
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
});