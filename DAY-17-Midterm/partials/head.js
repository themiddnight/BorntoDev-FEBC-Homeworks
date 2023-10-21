const headHtml = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#000000">
<link rel="icon" href="./src/image/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="./src/styles/style.css">`;

const headElement = document.head;

let tag = document.createElement('script');
tag.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
headElement.appendChild(tag);
headElement.insertAdjacentHTML("beforeend", headHtml);