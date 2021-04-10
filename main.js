canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(110, 130, 500, 250);
ctx.stroke();

var X = 250;
var Y = 230;
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 7;
ctx.arc(X, Y, 45, 0, 2 * Math.PI, false);
ctx.stroke();

var X1= 300;
var Y1= 280;
ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 7;
ctx.arc(X1, Y1, 45, 0, 2 * Math.PI, false);
ctx.stroke();

var X2= 350;
var Y2= 230;
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(X2, Y2, 45, 0, 2 * Math.PI, false);
ctx.stroke();

var X3= 400;
var Y3= 280;
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 7;
ctx.arc(X3, Y3, 45, 0, 2 * Math.PI, false);
ctx.stroke();

var X4= 450;
var Y4= 230;
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.arc(X4, Y4, 45, 0, 2 * Math.PI, false);
ctx.stroke();