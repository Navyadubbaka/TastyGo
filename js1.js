let count = 1;
let div = document.createElement("div");
dessert1.appendChild(div);
let b1 = document.createElement("button");
let b2 = document.createElement("button");
let b3 = document.createElement("button");
div.classList.add("button-container", "d-flex", "flex-row");
b1.classList.add("button", "shadow", "p-2");
b1.classList.add("button", "shadow", "p-2");
b3.classList.add("button", "shadow", "p-2");

function addToCart() {
    div.appendChild(b1);
    b1.textContent = "-";
    div.appendChild(b2);
    b2.textContent = "  " + count + "  ";
    div.appendChild(b3);
    b3.textContent = "+";
    if (count <= 0) {
        count = 1;
        b2.textContent = "  " + count + "  ";
        dessert1.appendChild(div);
    }

}
b1.onclick = function() {
    count -= 1;
    b2.textContent = count;
    if (count <= 0) {
        dessert1.removeChild(div);

    }
}
b3.onclick = function() {
    count += 1;
    b2.textContent = "  " + count + "  ";
    if (count <= 0) {
        dessert1.removeChild(div);
    }
}