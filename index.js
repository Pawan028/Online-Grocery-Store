document.addEventListener('DOMContentLoaded', function() {
    // Toggle navbar collapse on click
    var navbarToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggle.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Close navbar collapse when clicking outside of it
    document.addEventListener('click', function(event) {
        var isClickInsideNavbar = navbarToggle.contains(event.target) || navbarCollapse.contains(event.target);
        if (!isClickInsideNavbar) {
            navbarCollapse.classList.remove('show');
        }
    });
});


