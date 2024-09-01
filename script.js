document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu visibility
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks.contains(event.target) || menuToggle.contains(event.target);

        if (!isClickInsideNav) {
            navLinks.classList.remove('active');
        }
    });

    // Change navbar style on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// JavaScript for menu filtering
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            item.classList.add('fadeIn');
        } else {
            item.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.filter-btn[onclick="filterMenu('${category}')"]`).classList.add('active');
}

