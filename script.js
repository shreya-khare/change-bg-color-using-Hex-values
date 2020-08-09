var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var body = document.querySelector("BODY");
var para = document.querySelector("P");
var btn = document.querySelector("BUTTON");
var color = "#";
body.style.backgroundColor = "black";
btn.addEventListener('click', changeColor);
function changeColor() {
    for (var i = 1; i <= 6; i++) {
        color += arr[parseInt(Math.random() * arr.length)];
    }
    para.innerHTML = color;
    body.style.backgroundColor = color;
    color = "#";
}