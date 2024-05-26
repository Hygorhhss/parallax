window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-background');
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
