gsap.registerPlugin(ScrollTrigger);

//LANDING
let landingLogo = document.querySelector('.landing .logo');
let countdown = document.querySelector('.countdown-timer');
let donateButton = document.querySelector('.landing .donate-button');

gsap.timeline()
.from(landingLogo, {
    y: '50',
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
})
.from(countdown, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
})
.from(donateButton, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
}, '<')
.delay(0.5);

//IPHONE
let iphone = document.querySelector('.team .iphone');
let message1 = document.querySelectorAll('.message1');
let message2 = document.querySelectorAll('.message2');
let message3 = document.querySelectorAll('.message3');
let message4 = document.querySelectorAll('.message4');
let message5 = document.querySelectorAll('.message5');
let message6 = document.querySelectorAll('.message6');
let message7 = document.querySelectorAll('.message7');

gsap.timeline({
    scrollTrigger: {
      trigger: iphone,
      start: 'top center'
    }
  })
.from(message1, {
    y: '50',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(message2, {
    y: '50',
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
})
.from(message3, {
    y: '50',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(message4, {
    y: '50',
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
})
.from(message5, {
    y: '50',
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
})
.from(message6, {
    y: '50',
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
})
.from(message7, {
    y: '50',
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});

//MAP
let challenge = document.querySelectorAll('.challenge div');
let challengeMap = document.querySelector('.challenge .map');
let challengeInfo = document.querySelector('.challenge .info');

gsap.timeline({
    scrollTrigger: {
      trigger: challengeMap,
      pin: '.challenge',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
})
.from(challengeInfo, {
    opacity: 0,
    yoyo: true
});

//NOMV
let NOMVSection = document.querySelector('.nomv');
let NOMVChildren = NOMVSection.querySelectorAll('*');

gsap.timeline({
    scrollTrigger: {
        trigger: NOMVSection,
        start: 'top center'
    }
})
.from(NOMVChildren, {
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
});
