// Menú
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

// Click en el botón hamburguesa
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('dropdown-active');
    });

// Cerrar menú
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navbar.classList.remove('dropdown-active');
        });
    });

// scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
                
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
                
            if (targetElement) {
                // Scroll suave nativo
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                    
                // Cerrar menú si está abierto
                menuToggle.classList.remove('active');
                navbar.classList.remove('dropdown-active');
            }
        });
    });

// Contadores animados
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
            
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 60;
                
            const updateCounter = setInterval(() => {
                current += increment;
                    
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(updateCounter);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 40);
        });
    }

// Ejecutar animación cuando la página carga
    window.addEventListener('load', animateCounters);

    const statsSection = document.querySelector('.stats-container');
        window.addEventListener('scroll', () => {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.top > 0) {
            }
    });