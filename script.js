const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let isDrawing = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    context.beginPath();
    context.lineWidth = 5;
});

canvas.addEventListener("mousemove", e => {
    if(!isDrawing) return;
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
});

canvas.addEventListener("mouseup", () =>{
    isDrawing = false;
})