var mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "";
width = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

    current_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_touch_x)
    }
}