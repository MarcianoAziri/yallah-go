let body = document.querySelector('body');
let secondPerson = document.querySelector('.person2');
let thirdPerson = document.querySelector('.person3');
let fourthPrson = document.querySelector('.person4');

let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: body,
      start: 'top top',
      duration: '200vh',
      scrub: 2,
      pin: true,
      snap: {
        snapTo: 1/3,
        duration: { min: 0.2, max: 1 },
        delay: 0.1
      }
    }
  })
.to(secondPerson, {
    left: '0',
    opacity: 1,
    delay: 0.5
})
.to(thirdPerson, {
    top: '0',
    opacity: 1,
    delay: 0.5
})
.to(fourthPrson, {
    left: '0',
    opacity: 1,
    delay: 0.5
});

let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3');
let dot4 = document.getElementById('dot4');

document.addEventListener('scroll', function() {
  let height = Math.floor(body.clientHeight / 3);
  if (timeline.scrollTrigger.scroll() + 1 <= height)
  {
    dot1.classList.add('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');
    dot4.classList.remove('active');
  }
  else if (timeline.scrollTrigger.scroll() < (height * 2))
  {
    dot1.classList.remove('active');
    dot2.classList.add('active');
    dot3.classList.remove('active');
    dot4.classList.remove('active');
  }
  else if (timeline.scrollTrigger.scroll() < (height * 3))
  {
    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.add('active');
    dot4.classList.remove('active');
  }
  else 
  {
    dot1.classList.remove('active');
    dot2.classList.remove('active');
    dot3.classList.remove('active');
    dot4.classList.add('active');
  }
});

let persons = document.querySelectorAll('.person');

persons.forEach(function(p) {
  p.addEventListener('click', function() {
    console.log('test');
    p.classList.toggle('show');
  });
});