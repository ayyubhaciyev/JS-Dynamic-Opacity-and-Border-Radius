let rng = document.getElementsByClassName("slider")[0];
let rds = document.getElementsByClassName("slider")[1];
let img = document.getElementById("img");

rng.oninput = function() {
    let x = rng.value;
    img.style.opacity = x;
}

rds.oninput = function() {
    let x = rds.value;
    img.style.borderRadius = x + "%";
}