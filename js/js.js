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


// Get modal and elements
var modal = document.getElementById("contact-modal");
var contactLink = document.getElementById("contact-link");
var closeBtn = document.getElementById("close-modal");

// When the user clicks on the Contact link, open the modal
contactLink.onclick = function(event) {
    event.preventDefault();  // Prevent the default link behavior
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
