function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let randMeshGradients = `
    linear-gradient(to bottom, transparent 30%, #111 100%),
    radial-gradient(at ${rand(0,100)}% ${rand(0,100)}%, hsl(${rand(0,360)}, ${rand(40,80)}%, ${rand(0,60)}%) 0px, transparent 50%), 
    radial-gradient(at ${rand(0,100)}% ${rand(0,100)}%, hsl(${rand(0,360)}, ${rand(40,80)}%, ${rand(0,60)}%) 0px, transparent 50%), 
    radial-gradient(at ${rand(0,100)}% ${rand(0,100)}%, hsl(${rand(0,360)}, ${rand(40,80)}%, ${rand(0,60)}%) 0px, transparent 50%), 
    radial-gradient(at ${rand(0,100)}% ${rand(0,100)}%, hsl(${rand(0,360)}, ${rand(40,80)}%, ${rand(0,60)}%) 0px, transparent 50%), 
    radial-gradient(at ${rand(0,100)}% ${rand(0,100)}%, hsl(${rand(0,360)}, ${rand(40,80)}%, ${rand(0,60)}%) 0px, transparent 50%)
    `;

document.querySelector("body").style.backgroundImage = randMeshGradients;