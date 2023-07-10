// navbar scroll event
const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        navbar.classList.add("active_nav");
    }else {
        navbar.classList.remove("active_nav");
    }
});


//active link 
let divs = document.querySelectorAll('div');
let navLinks = document.querySelectorAll('nav ul a');

window.onscroll = () => {
    divs.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};