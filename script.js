const grid = document.querySelector('.gridContainer');
const adjuster = document.getElementById('sliderGrid');
const gridSize = document.querySelector('.gridChoice');
const square = document.querySelector(".gridContainer");
const reset = document.querySelector(".resetButton");


adjuster.onmousemove = (e) => updategridSize(e.target.value);
adjuster.onchange = (e) => changegridSize(e.target.value);

function changegridSize(value) {
    updategridSize(value);
}

function updategridSize(value){
    gridSize.innerHTML = `${value} x ${value}`
}

createGrid = () => {
    for (let i = 0; i < 255; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${adjuster.value}, 1fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${adjuster.value}, 1fr)`
    );
    for (let i =0; i < adjuster.value * adjuster.value; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
      }
      console.log(adjuster.value)
    };



let isDrawing = false;
function draw(e) {
if(!isDrawing) return;
e.target.classList.replace("square", "color")};
    

square.addEventListener('mousedown', () => {
    isDrawing = true;
})


adjuster.addEventListener("change", updateGrid);
square.addEventListener("mousemove", draw);
square.addEventListener('mouseup', () => isDrawing = false);

reset.addEventListener("click", function () {
    grid.innerHTML = "";
    adjuster.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid();
});
