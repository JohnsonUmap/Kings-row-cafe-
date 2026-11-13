// Welcome Message

window.addEventListener("load", function() {
    console.log("Welcome to King Rows Cafe!");
});


// Navigation Active Effect

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.style.color = "white";
        });

        this.style.color = "#ffcc80";

    });

});


// Menu Item Click Effect

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const foodName = this.querySelector("h3").textContent;
        const price = this.querySelector("p").textContent;

        alert(foodName + " - " + price);

    });

});


// WhatsApp Contact

function contactWhatsApp() {

    window.open(
        "https://wa.me/919371626987",
        "_blank"
    );

}