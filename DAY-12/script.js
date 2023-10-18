// list of product objects with their properties
const products = [
    { name: "Canon AE-1 Program", price: "90.00" },
    { name: "Canon AF35M Autoboy", price: "120.00" },
    { name: "Canon FTb-QL", price: "178.28" },
    { name: "Fuji GL690 Pro", price: "360.49" },
    { name: "HOLGA 120 Pan", price: "89.95" },
    { name: "Kodak Retina III C", price: "39.99" },
    { name: "Nikon FE Black", price: "109.99" },
    { name: "Nikon L35 AF", price: "179.99" },
    { name: "NONS SL660 Instant", price: "495.00" },
    { name: "Olympus TRIP35", price: "137.00" },
    { name: "Pentax K1000", price: "278.28" },
    { name: "Zorkiy 4 Industar", price: "70.34" },
];

for (prod of products) {
    const prodListTxt = `    
    <div class="prod-list shadow">
        <div class="prod-img">
            <img src="image/${prod.name}.jpg" alt="${prod.name}">
        </div>
        <div class="prod-detail">
            <p class="prod-title">${prod.name}</p>
            <p class="prod-price">$${prod.price}</p>
        </div>
        <div class="prod-btns">
            <button class="btn primary">Buy</button>
            <button class="btn secondary">Details</button>
        </div>
    </div>
    `;
    // get elements by id "prod-container" and append prodListTxt
    document.getElementById("prod-container").innerHTML += prodListTxt;
}

// click to show responsive menu
let showNavBtn = document.getElementById("shownav-btn");
showNavBtn.addEventListener("click", () => {
    let navUl = document.getElementById("nav-ul");
    let navSearchbox = document.getElementById("searchbox");
    navUl.classList.toggle("responsive-show");
    navSearchbox.classList.toggle("responsive-show");
});

// if window increased to 768px while responsive menu showing, remove responsive-show class
function responsiveToggle() {
    let navUl = document.getElementById("nav-ul");
    let navSearchbox = document.getElementById("searchbox");
    if (navUl.classList.contains("responsive-show")) {
        navUl.classList.remove("responsive-show");
        navSearchbox.classList.remove("responsive-show");
    }
}

var x = window.matchMedia("(max-width: 740px)")
responsiveToggle(x)
x.addListener(responsiveToggle)