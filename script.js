document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar
    const navbar = document.getElementById("main-navbar");
    
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Set active link in navbar based on current URL
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentLocation) {
            // Remove active from all others
            document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

    // Dropdown hover for desktop (Bootstrap 5 doesn't do hover by default)
    if (window.innerWidth > 991) {
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            dropdown.addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-menu').classList.add('show');
                this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
            });
            dropdown.addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-menu').classList.remove('show');
                this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Form Submission (Dummy implementation for contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get button to show loading state
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
            btn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check me-2"></i>Message Sent Successfully!';
                btn.classList.replace('btn-primary', 'btn-success');
                
                this.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.replace('btn-success', 'btn-primary');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
