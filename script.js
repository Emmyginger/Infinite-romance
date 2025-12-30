// --- MOBILE MENU TOGGLE ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (for single page smooth scroll)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- IMAGE SLIDER LOGIC ---
let slideIndex = 1;
showSlides(slideIndex);

// Auto scroll every 5 seconds
const autoScroll = setInterval(function() {
    plusSlides(1);
}, 5000);

// Next/Prev controls
document.getElementById('prevBtn').addEventListener('click', () => plusSlides(-1));
document.getElementById('nextBtn').addEventListener('click', () => plusSlides(1));

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// --- SCROLL ANIMATION (Intersection Observer) ---
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.scroll-anim');
hiddenElements.forEach((el) => observer.observe(el));

// --- COPY BANK DETAILS ---
function copyAccount() {
    const acctNum = document.getElementById("acct-num").innerText;
    
    navigator.clipboard.writeText(acctNum).then(() => {
        const msg = document.getElementById("copy-msg");
        msg.style.opacity = "1";
        
        // Hide message after 2 seconds
        setTimeout(() => {
            msg.style.opacity = "0";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}