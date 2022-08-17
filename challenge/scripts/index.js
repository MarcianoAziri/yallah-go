let facts = document.querySelectorAll('.fact');

facts.forEach(fact => {
    gsap.timeline({
        scrollTrigger: {
          trigger: fact,
          start: 'top 80%'
        }
      })
    .from(fact, {
        y: '50',
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
});

let counter = document.querySelector('#counter');
let costsContainer = document.querySelector('.costs-container');
let costs = document.querySelectorAll('.cost');

gsap.timeline({
    scrollTrigger: {
      trigger: costsContainer,
      start: 'top 75%'
    }
  })
.from(costs[0], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[1], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[2], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[3], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[4], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[5], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[6], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[7], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[8], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[9], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[10], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(costs[11], {
    y: '25',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
});

gsap.timeline({
    scrollTrigger: {
      trigger: counter,
      start: 'top 95%'
    }
  })
.from(counter, { 
    innerText: 0, 
    ease: 'power4.out', 
    duration: 10, 
    snap: {
      innerText:5
    } 
});

