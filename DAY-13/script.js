// list of product objects with their properties
const products = [
    { name: "Canon AE-1 Program", price: "90.00", featured: false },
    { name: "Canon AF35M Autoboy", price: "120.00", featured: false },
    { name: "Canon FTb-QL", price: "178.28", featured: false },
    { name: "Fuji GL690 Pro", price: "360.49", featured: false },
    { name: "HOLGA 120 Pan", price: "89.95", featured: false },
    { name: "Kodak Retina III C", price: "39.99", featured: false },
    { name: "Nikon FE Black", price: "109.99", featured: true },
    { name: "Nikon L35 AF", price: "179.99", featured: false },
    { name: "NONS SL660 Instant", price: "495.00", featured: false },
    { name: "Olympus TRIP35", price: "137.00", featured: false },
    { name: "Pentax K1000", price: "278.28", featured: true },
    { name: "Zorkiy 4 Industar", price: "70.34", featured: false }
];

for (prod of products) {
    let prodClass;
    prod.featured ? prodClass = ["prod-feat-list", "featured", ""] : prodClass = ["prod-list", "primary", "hidden"];
    const prodListTxt = `    
    <div class="${prodClass[0]} shadow">
        <div class="prod-img">
            <img src="image/${prod.name}.jpg" alt="${prod.name}">
            <p class="prod-tag" ${prodClass[2]}>Recommended!</p>
        </div>
        <div class="prod-detail">
            <p class="prod-title">${prod.name}</p>
            <p class="prod-price">$${prod.price}</p>
        </div>
        <div class="prod-btns">
            <button class="btn ${prodClass[1]}">Buy</button>
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