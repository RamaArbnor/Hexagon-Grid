class hexagon {

    constructor(i, j) {
        if (j % 2 == 0) {
            this.x = ((i + 0.5) * 50) + 35;
        } else {
            this.x = (i * 50) + 35;
        }
        // this.x = ((i + 0.5) * 50) + 50;
        this.y = j * 45 + 60;
        this.active = false;
        this.fade = 100
        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.color = color(this.r, this.g, this.b, this.fade)
    }

    draw() {
        this.drawHexagon(this.x, this.y, 0.18)
        this.drawHexagon(this.x, this.y, 0.15)
        this.drawHexagon(this.x, this.y, 0.12)

        this.drawHitBox(this.x, this.y)
        // console.log(this.fade)
        this.collide();

    }

    setColor(color) {
        this.color = color;
    }

    drawHitBox(x, y) {
        // fill(50, 50, 50)
        noStroke()
        ellipse(x, y, 45)
    }

    collide() {
        // float px = 0;      // point position
        // float py = 0;

        // float cx = 300;    // circle center position
        // float cy = 200;
        // float radius = 100;    // circle's radius

        let px = mouseX
        let py = mouseY

        let cx = this.x
        let cy = this.y
        let radius = 25

        let distX = px - cx;
        let distY = py - cy;
        let distance = sqrt((distX * distX) + (distY * distY));

        // if the distance is less than the circle's
        // radius the point is inside!
        if (distance <= radius) {
            // this.color = color(this.r, this.g, this.b, this.fade)
            this.color = this.randomColor()

            // this.color = 'rgba(255, 0, 0, .5)'


        }

        // console.log(mouseX, mouseY);
    }

    randomColor(){
        let r = random(0, 255)
        let g = random(0, 255)
        let b = random(0, 255)
        return color(r, g, b, this.fade)

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