/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasTwo = document.getElementById("canvas2");
const ctxTwo = canvasTwo.getContext("2d");
const canvasThree = document.getElementById("canvas3");
const ctxThree = canvasThree.getContext("2d");
const width = 2;

const points = [
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[0,0]",
    "[373,178]",
    "[338,157]",
    "[295,124]",
    "[256,96.6]",
    "[207,64]",
    "[152.6,30.5]",
    "[100,0]",
    "[58.5,-27]",
    "[14,-51.6]",
    "[-32,-73.4]",
    "[-16,-55]",
    "[8,-36]",
    "[39.5,-10.6]",
    "[58,27]",
    "[55,68]",
    "[17.4,70]",
    "[-11.6,60]",
    "[-33.4,40]",
    "[-53,2]",
    "[-60,-40]",
    "[-54,-83.6]",
    "[-103,-117]",
    "[-167.6,-161]",
    "[-238,-203.4]",
    "[-320,-245.6]",
    "[-404,-285]",
    "[-464,-310]",
    "[-480,-320]",
    "[-470,-330]",
    "[-460,-340]",
    "[-446.6,-334.3]",
    "[-409,-315]",
    "[-335,-277]",
    "[-250,-237]",
    "[-193.5,-207]",
    "[-115,-153]",
    "[-69,-122]",
    "[-4,-92]",
    "[67,-51]",
    "[132,-11]",
    "[194,21]",
    "[256,57.5]",
    "[298,92]",
    "[315.5,143]",
    "[321,174]",
    "[308.5,193.5]",
    "[287,185]",
    "[254,177]",
    "[220,160]",
    "[186.5,135]",
    "[160,100]",
    "[136,52]",
    "[109,0]",
    "[159,9]",
    "[227,46]",
    "[274,77.5]",
    "[321,108]",
    "[381,152]",
    "[425,179.5]",
    "[440,165]",
    "[456,150]",
    "[483,147]",
    "[508,150]",
    "[532,166]",
    "[553,181]",
    "[572,202]",
    "[594,214]",
    "[618,224]",
    "[631,247.5]",
    "[636,270]",
    "[634,294]",
    "[620,320]",
    "[610,343]",
    "[593,368]",
    "[568,382]",
    "[545,376]",
    "[536,354]",
    "[548,343]",
    "[555,322]",
    "[573,306]",
    "[586,295]",
    "[588,307]",
    "[580,320]",
    "[561,326]",
    "[558,308.5]",
    "[568,294.6]",
    "[592,284]",
    "[600,300]",
    "[600,320]",
    "[586.5,336]",
    "[567,345]",
    "[545.5,339]",
    "[548,312]",
    "[569,283]",
    "[593.5,266]",
    "[611,266]",
    "[621,285]",
    "[623,309]",
    "[614,331]",
    "[602,354]",
    "[577,366]",
    "[552.5,372]",
    "[532.5,366]",
    "[524,347]",
    "[518.5,328]",
    "[532,300]",
    "[552.5,274]",
    "[579,251]",
    "[600,240]",
    "[621,247.5]",
    "[640,230]",
    "[653.5,207.5]",
    "[625,218]",
    "[601,224.5]",
    "[577.6,229]",
    "[558,224]",
    "[538.4,213.6]",
    "[520,200]",
    "[506.4,186]",
    "[491,173]",
    "[469,168.6]",
    "[445,166.4]",
    "[426,173]",
    "[415,186]",
    "[414,203.5]",
    "[415,225]",
    "[415,252]",
    "[423.6,276]",
    "[440,300]",
    "[464,317]",
    "[487,325.5]",
    "[508,337]",
    "[524.5,350]",
    "[538,366]",
    "[550,385]",
    "[554,401]",
    "[539,405]",
    "[520,400]",
    "[511,382.6]",
    "[507.6,362]",
    "[500,340]",
    "[483,334.6]",
    "[454.5,326]",
    "[428,315]",
    "[403.6,297]",
    "[391,272]",
    "[390,246]",
    "[394,221]",
    "[402,196]"
]

const originalW = 1000;
const period = 10;

var x = 500;
var y = 500;
var drawing = false;
var dots = [];


var posX = [];
var posY = [];

var actualPosX = [];
var actualPosY = [];
var actualPos = [];

var linesToDraw = [];

var t = 0;

var prev = [];
var circles = [];
var added = false;

var prevEnding = []

const iterations = 50;

var startPos = 0;


function p(p){
    //makes it centered
    return p - originalW / 2
}

function mouseUp(){
    drawing = false;
    circles = [];
    linesToDraw = [];
    drawLine();
    let xn = coefOfRankK(actualPos);
    let result = inverseTransform(xn);
    for (let i = 0; i < result.length; i++) {
        const element = result[i][0];
        let a = new Circle(result[i][1], element);
        a.compToPos();
        circles.push(a);   
    }
    circles.sort(function (a, b){
        return b.angle[1] - a.angle[1];
    })
}

function appendDots(x, y){
    
    dots.push([x - width, y - width]);
    posX.push(x);
    posY.push(y);
    actualPosX.push(p(x));
    actualPosY.push(p(y));
    //points in terms of complex numbers
    actualPos.push(math.complex(p(x), p(y)));
}
//add points into dots
points.forEach(poi => {
    if (poi != "[0,0]"){
        po = [parseFloat(poi.substring(1, poi.search(","))), parseFloat(poi.substring(poi.search(",") + 1))]
        let adjusted = [(po[0] + 500)*0.8, (po[1])*-0.8 + 500]
        appendDots(adjusted[0], adjusted[1]);
    }
});

function coefOfRankK(samples){
    //find the constants(radius) in front of each circle with rotation speed
    let n = samples.length
    let tempList = []
    for (k = 0; k < iterations; k ++){
        let tempk = k;
        let w = 2 * Math.PI * tempk / n;
        //console.log(w);
        let sum = 0;
        for (var i = 0; i < n; i ++) {
            sum = math.add(sum, math.multiply(samples[i], math.complex(Math.cos(w * i), -1 * Math.sin(w * i))));
        }
        tempList.push([sum, tempk]);
        
        if (k == 0){
            continue;
        }
        tempk = -k;
        w = 2 * Math.PI * tempk / n;
        //console.log(w);
        sum = 0;
        for (var i = 0; i < n; i ++) {
            sum = math.add(sum, math.multiply(samples[i], math.complex(Math.cos(w * i), -1 * Math.sin(w * i))));
        }
        tempList.push([sum, tempk]);
    }
    return tempList;
}

function inverseTransform(complexList){
    let n = dots.length;
    let tempList = [];
    let tempSum = 0;
    complexList.forEach(element => {
        tempSum = math.add(element[0], tempSum);
    });
    complexList.forEach(element => {
        let Xn = element[0];
        Xn = math.multiply(1 / Math.pow(n, 1), Xn);

        element[0] = Xn;
        tempList.push(element);
    });
    return tempList;
}

function drawCoefOfRankK(){
    let prev = [500, 500];
    circles.forEach(element => {
        prev = element.draw(prev, t, period, ctx);
    });

    if (prevEnding.length){
        //pushing the drawing lines
        if (linesToDraw.length > 0 && dist(prevEnding, linesToDraw[linesToDraw.length - 1]) >= 5) {
            linesToDraw.push(prevEnding);
        }
        else if (linesToDraw.length == 0) {
            linesToDraw.push(prevEnding)
        }
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        circle(prevEnding);
        ctx.beginPath();
        ctx.moveTo(prevEnding[0], prevEnding[1]);
        ctx.lineTo(prev[0], prev[1]);
        ctx.stroke();
        ctx.closePath();
    }
    prevEnding = prev;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    /*
    ctxTwo.moveTo(0, -1 * (posX[0] * xn - originalW / 2) + originalW / 2);
    for (var j = 0; j < posX.length; j++){
        ctxTwo.lineTo(originalW / posX.length * j, -1 * (posX[j] * xn - originalW / 2) + originalW / 2);
        ctxTwo.stroke();
    }
    ctxTwo.closePath();
    */
}

function drawWindow(){
    ctxThree.beginPath();
    let mu = 10;
    let prevs = [(originalW / 2 - prevEnding[0]) * mu + 150, (originalW / 2 - prevEnding[1]) * mu + 150];
    circles.forEach(element => {
        prevs = element.draw(prevs, t, period, ctxThree, mu);
    });
    
    ctxThree.strokeStyle = "red";
    ctxThree.lineWidth = 4;
    ctxThree.beginPath();
    ctxThree.arc(150, 150, width, 0, 2 * Math.PI);
    ctxThree.stroke();
    ctxThree.closePath();
    ctxThree.strokeStyle = "black";
    ctxThree.lineWidth = 1;
}

function drawLine(){
    
    //draw the circles
    drawCoefOfRankK();
    if (!linesToDraw.length) {
        return;
    }
    ctx.beginPath();
    //this draws the line
    ctx.moveTo(linesToDraw[0][0], linesToDraw[0][1]);
    for (var j = 0; j < linesToDraw.length; j++){
        ctx.lineTo(linesToDraw[j][0], linesToDraw[j][1]);
        ctx.stroke();
    }
    
    ctx.closePath();

    //remove any excess lines
    let maxLength = 500;
    if (linesToDraw.length > maxLength) {
        linesToDraw.shift()
    }

    /**
    //draws the graph below
    ctxTwo.beginPath();
    ctxTwo.moveTo(0, originalW / 2 - actualPosX[0]);
    for (var j = 0; j < posX.length; j++){
        ctxTwo.lineTo(originalW / posX.length * j, - actualPosX[j] + originalW / 2);
        ctxTwo.stroke();
    }
    ctxTwo.closePath();
    */

    //draw the top left
    drawWindow();
}

function circle(pos){
    ctx.beginPath();
    let xa = pos[0];
    let ya = pos[1];
    ctx.arc(xa, ya, width, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function dist(a, b){
    if (b.length == 0) {
        return Infinity;
    }
    return Math.pow(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2), 0.5);
}

function comp(a, b){
    return a + b * Math.i;
}

function draw(){
    clear();
    t += 0.01;
    //circle([500, 500]);
    if (drawing){
        //mouse is down
        let current = [x - width, y - width];
        if (dist(current, prev) > 10){
            appendDots(x, y);
            prev = [x - width, y - width];
        }
    }
    else{
        //draw the lines
        drawLine();
    }

    //draw the dots
    /*
    for (var i = 0; i < dots.length; i++){
        circle([500 + actualPosX[i] - width, 500 + actualPosY[i] - width]);
    }
    */
    requestAnimationFrame(draw);
}
canvas.onmousemove = function(e){
    x = e.pageX;
    y = e.pageY;
}

canvas.onmousedown = function(e){
    drawing = true;
}


canvas.onmouseup = function(e){
    mouseUp();
}

function clear(){
    ctx.fillStyle = "rgba(256, 256, 256, 1)";
    ctx.fillRect(0, 0, originalW, originalW); 
    ctxTwo.fillStyle = "white";
    ctxTwo.fillRect(0, 0, originalW, originalW); 
    ctxThree.fillStyle = "white";
    ctxThree.fillRect(0, 0, originalW, originalW); 
}

mouseUp();
draw();