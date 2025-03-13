document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section when scrolling
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY;
        document.querySelectorAll('nav ul li a').forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= fromTop + 100 &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.style.color = '#ffcc00';
            } else {
                link.style.color = 'white';
            }
        });
    });
});
