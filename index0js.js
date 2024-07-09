document.addEventListener('DOMContentLoaded', function () {
    // Toggle navbar collapse on click
    var navbarToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggle.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    // Handle search button click
    var searchButton = document.querySelector('.input-group button');
    var searchInput = document.querySelector('.input-group input');

    searchButton.addEventListener('click', function () {
        var searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            alert('Search for: ' + searchTerm);
            // Implement search functionality here(e.g., redirect to search results page)
        } else {
            alert('Please enter a search term.');
        }
    });
});