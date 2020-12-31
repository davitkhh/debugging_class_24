class Ball {
    constructor(x, y) {
        var options = {
            'friction': 0.3,
            'restitution': 0.8
        }

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        //console.log('displaying the ball');
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipse(pos.x, pos.y, 25, 25);
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        this.shapeColor = 'white'
        pop();
    }
}