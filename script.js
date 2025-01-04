// Toggle submenu on click for mobile compatibility
document.querySelectorAll('.menu > li > a').forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        const submenu = menu.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            const isVisible = submenu.style.display === 'block';
            closeAllSubmenus();
            submenu.style.display = isVisible ? 'none' : 'block';
        }
    });
});
// Close all submenus
function closeAllSubmenus() {
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.style.display = 'none';
    });
}

// Search bar
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector("nav");
    const searchIcon = document.querySelector(".bi-search");
    const searchBarDiv = document.querySelector(".search-bar");
    let isSearchOpen = false;

    const searchHandler = (() => {
        const toggleSearch = () => {
            if (!isSearchOpen) {
                searchBarDiv.classList.add("expanded");
                navbar.classList.add("search-mode");
                isSearchOpen = true;
            }
        };

        const closeSearch = () => {
            if (isSearchOpen) {
                searchBarDiv.classList.remove("expanded");
                navbar.classList.remove("search-mode");
                isSearchOpen = false;
            }
        };

        return {
            open: toggleSearch,
            close: closeSearch,
        };
    })();

    searchIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        searchHandler.open();
    });

    document.addEventListener("click", (event) => {
        const isInsideNavbar = navbar.contains(event.target) || searchBarDiv.contains(event.target);
        if (!isInsideNavbar) {
            searchHandler.close();
        }
    });
});
