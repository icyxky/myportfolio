// auto typing
let typed = new Typed('.position', {
    strings: ["Fresh Graduate of Informatics Engineering @UNIKOM"],
    backSpeed: 50,
    typeSpeed: 70,
    loop: true
});

// Navbar effects scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});