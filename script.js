// ================= NAVBAR ACTIVE LINK =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ================= NAVBAR AUTO CLOSE ON MOBILE =================

const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.querySelector(".navbar-collapse");

navbarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const navbarButton =
                document.querySelector(".navbar-toggler");

            navbarButton.click();

        }

    });

});
