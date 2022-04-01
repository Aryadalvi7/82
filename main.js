var mouseEvent="empty";
var lastpositionX,lastpositionY;
canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="black";
widthofline=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofX=e.clientX-canvas.offsetLeft;
    currentpositionofY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewidth=widthofline;
        ctx.moveTo(lastpositionX,lastpositionY);
        ctx.lineTo(currentpositionofX,currentpositionofY);
        ctx.stroke();
    }
    lastpositionX=currentpositionofX;
    lastpositionY=currentpositionofY;

}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


