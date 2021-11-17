const btn = document.getElementById("btn");


function makeBig() {
    let inputValue = document.getElementById("inputOne").value;
    document.getElementById("inputOne").value = inputValue.toUpperCase();
}

btn.addEventListener("click", function() {
    makeBig();
});