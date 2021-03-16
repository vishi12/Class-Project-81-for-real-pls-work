canvas = document.getElementById("my_first_canvas");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(400, 300, 40, 0, 2*Math.PI);
ctx.stroke();