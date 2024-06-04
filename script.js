const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

//dropdown navbar
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.nav-item.dropdown');
    var dropdownToggle = document.querySelector('.nav-link.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
 
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.sidebar a');
    var contentItems = document.querySelectorAll('.content-item');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(function (item) {
                item.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');

            // Hide all content items
            contentItems.forEach(function (item) {
                item.style.display = 'none';
            });

            // Show the content item corresponding to the clicked link
            var contentId = this.getAttribute('data-content');
            document.getElementById(contentId).style.display = 'block';
        });
    });
});





