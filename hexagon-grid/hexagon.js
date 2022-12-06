class hexagon {
    
    constructor(i, j) {
        if(j % 2 == 0){
            this.x = ((i + 0.5) * 50) + 35;
        }else{
            this.x = (i * 50) + 35;
        }
        // this.x = ((i + 0.5) * 50) + 50;
        this.y = j  * 45 + 60;
        this.color = 'rgba(255, 255, 255, .5)'
    }

    draw() {
        this.drawHexagon(this.x, this.y, 0.18)
    }

    setColor(color){
        this.color = color;
    }

    drawHexagon(transX, transY, s) {
        stroke(255);
        // strokeWeight(5);
        fill(this.color);
        push();
        translate(transX, transY);
        scale(s);
        rotate(PI / 2);
        beginShape();
        vertex(-75, -130);
        vertex(75, -130);
        vertex(150, 0);
        vertex(75, 130);
        vertex(-75, 130);
        vertex(-150, 0);
        endShape(CLOSE);
        pop();
    }
}