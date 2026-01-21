
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    // Note: We don't need to attach click listeners to .mobile-link here anymore
    // because the smooth scroll handler below will handle closing the menu.

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('translate-x-full');
        if (isClosed) {
            mobileMenu.classList.remove('translate-x-full');
        } else {
            mobileMenu.classList.add('translate-x-full');
        }
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // 2. Smooth Scroll with Offset (The Fix for Links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Determine offset based on screen size (header height)
                // Desktop header is approx 80px, Mobile is smaller but safe to use 80px
                const headerOffset = 90; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Close mobile menu if open
                if (!mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.add('translate-x-full');
                }
            }
        });
    });

    // 3. Navbar Styles on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    });

    // 4. Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. Dynamic Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 6. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Using 300px threshold
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 7. Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px"
    });

    progressBars.forEach(bar => progressObserver.observe(bar));
});
