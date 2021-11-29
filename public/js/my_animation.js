// p animation

const animItems = document.querySelectorAll('.anim_p');

const timeout = 3000;

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint =
                    window.innerHeight - window.innerHeight / animStart;
            }

            if (
                pageYOffset > animItemOffset - animItemPoint &&
                pageYOffset < animItemOffset + animItemHeight
            ) {
                animItem.classList.add('_active_p');
            } else {
                animItem.classList.remove('_active_p');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft =
                window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
        animOnScroll();
    }, timeout);
}

// Menu animation

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.block_menu',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
});

tl.fromTo('.block_menu', { y: 0 }, { y: -100 });

// Section Two - First Block Animation

let secTwoFirs = gsap.timeline({
    scrollTrigger: {
        trigger: '#section_two',
        start: '0%',
        end: '80%',
        scrub: 3,
        // pin: true,
    },
});
secTwoFirs.fromTo('.payment_img', { opacity: 0 }, { opacity: 1 });
secTwoFirs.fromTo(
    '.apple_pay_img',
    { x: 60, opacity: 0 },
    { x: 0, opacity: 1 }
);

// Section Two - Second Block Animation

let secTwoSecond = gsap.timeline({
    scrollTrigger: {
        trigger: '#section_two',
        start: '0%',
        end: '80%',
        scrub: 3,
        pin: true,
    },
});
secTwoSecond.fromTo('.square_img', { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
secTwoSecond.fromTo(
    '.mailchamp_img',
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 }
);
secTwoSecond.fromTo(
    '.facebook_img',
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1 }
);
secTwoSecond.fromTo(
    '.jetpack_img',
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 }
);
secTwoSecond.fromTo('.ads_img', { x: -30, opacity: 0 }, { x: 0, opacity: 1 });

// Section Two - Third Block Animation

let secTwoThird = gsap.timeline({
    scrollTrigger: {
        trigger: '#section_two',
        start: '0%',
        end: '80%',
        scrub: 3,
        pin: true,
    },
});
secTwoThird.fromTo(
    '.active_two_img',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1 }
);

secTwoThird.fromTo(
    '.active_three_img',
    { x: 60, opacity: 0 },
    { x: 0, opacity: 1 }
);
secTwoThird.fromTo(
    '.active_four_img',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1 }
);
// Section Two - Main Images Animation
let secTwoAnimateImg = gsap.timeline({
    scrollTrigger: {
        trigger: '.ttl2',
        start: '0%',
        end: '100%',
        scrub: 3,
        // pin: true,
    },
});
secTwoAnimateImg.fromTo('.animate_img', { scale: 0.9 }, { scale: 1 });

// Section Three Animation
