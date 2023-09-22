function showOutOfStockBox() {
    document.getElementById("outofstock-box").hidden = false;
};

let buyBtnCollection = document.getElementsByName("buyBtn");
for (let buyBtn of buyBtnCollection) {
    buyBtn.addEventListener("click", showOutOfStockBox);
};

document.getElementById('outofstock-btn').addEventListener('click', function () {
    document.getElementById("outofstock-box").hidden = true;
});