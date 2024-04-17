"use strict"

var canvas = document.querySelector("#mittCanvas");
var ctx = canvas.getContext("2d");

class Ball {
    constructor(x, y, fartX, fartY) {
        this.x = x;
        this.y = y;
        this.fartX = fartX;
        this.fartY = fartY;
    }

    tegn() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
        ctx.strokeStyle = "#333";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "green"
        ctx.fill();
        ctx.closePath();
    }

    flytt() {
        this.x += this.fartX;
        this.y += this.fartY;

        if (this.x - 15 < 0 || this.x + 15 > canvas.width) {
            this.fartX = -this.fartX;
        }

        if (this.y - 15 < 0 || this.y + 15 > canvas.height) {
            this.fartY = -this.fartY;
        }
    }
}

var ball1 = new Ball(canvas.width / 2, canvas.height / 2, 5, 0);
var ball2 = new Ball(canvas.width / 2, canvas.height / 2, 0, 5);

function animer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball1.flytt();
    ball1.tegn();
    ball2.flytt();
    ball2.tegn();

    requestAnimationFrame(animer);
}
requestAnimationFrame(animer);