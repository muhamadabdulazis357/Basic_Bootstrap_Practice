window.addEventListener("scroll", function () {
            const navbar = document.querySelector(".navbar-light");
            
            if (window.scrollY > 60) {
                navbar.classList.add("flex-shrink");
            } else {
                navbar.classList.remove("flex-shrink");
            }
        });