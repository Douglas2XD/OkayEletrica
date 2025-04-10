


    // Inicializar AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Navbar scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
    
    