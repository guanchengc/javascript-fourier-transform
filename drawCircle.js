class Circle {
    constructor(frequency, complex) {
        this.frequency = frequency;
        this.value = complex;
        this.point = [];
        this.angle = [];
    }
    
    compToPos() {
        this.point = [this.value.re, this.value.im];
        this.angle = [this.value.arg(), math.abs(this.value)];
        return this.point;
    }

    draw(center, t, period, ctx, mult = 1) {
        /** @type {HTMLCanvasElement} */
        let start = center;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"
        //console.log(this.angle)
        ctx.arc(start[0], start[1], this.angle[1] * mult, 0, Math.PI * 2); 
        ctx.stroke();
        ctx.moveTo(center[0], center[1]);
        let rotated = math.multiply(math.multiply(this.value, math.complex(Math.cos(t / period * 2 * Math.PI * this.frequency), Math.sin(t / period * 2 * Math.PI * this.frequency))), mult);
        let rotatedPoint = [rotated.re, rotated.im]
        let end = [rotatedPoint[0] + center[0], rotatedPoint[1] + center[1]];
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
        ctx.closePath();
        ctx.strokeStyle = "rgba(0, 0, 0, 1)"
        return end;
    }
}