const targets = gsap.utils.toArray("div.elementor-widget-container-text_ani");

targets.forEach(target => {
let SplitClient = new SplitType(target, {type: "lines, words, chars"});
let lines = SplitClient.lines;
let words = SplitClient.words;
let chars = SplitClient.chars;

gsap.from(chars, {
yPercent: 100,
autoAlpha: 0,
duration: 2,
ease: "circ.out",
stagger: {
amount: 1,
from : "random"

},
scrollTrigger: {
trigger: target,
start: "top bottom",
end: "+=400",
markers: false
}
});
});


const targets2 = gsap.utils.toArray("div.elementor-widget-container-text_ani2");

targets2.forEach(target => {
let SplitClient = new SplitType(target, {type: "lines, words, chars"});
let lines = SplitClient.lines;
let words = SplitClient.words;
let chars = SplitClient.chars;

gsap.from(chars, {
yPercent: 0,
autoAlpha: 0,
duration: 1,
ease: "circ.out",
stagger: {
amount: 1,
from : "random"

},
scrollTrigger: {
trigger: target,
start: "top bottom",
end: "+=400",
markers: false
}
});
});

