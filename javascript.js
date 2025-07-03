const container = document.querySelector("#container");

function createDiv(row) {
    let div = document.createElement("div");
    div.classList.add("div");
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "green"; 
    })
    row.appendChild(div);
}

function createRow(number) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let i = 1; i <= number; i++) {
        createDiv(row);
    }
}

function createEtch(number) {
    for (let i = 1; i <= number; i++) {
        createRow(number);
    } 
}

createEtch(16);
btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let val = window.prompt("Enter a number between 1 and 100!");
    if (Number.isInteger(+val) && ((val >= 1) && (val <= 100))) {
        container.textContent = "";
        createEtch(val);
    } else
    {
        alert("Wrong number!");
    }
})

