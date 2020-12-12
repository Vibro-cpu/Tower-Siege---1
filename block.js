class Block{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 35,35,{isStatic: false});
        World.add(world, this.body);
    }

    display(){

        pop ()

        stroke(0,0,255)
        rect(this.body.position.x,this.body.position.y,35,35)
        rectMode(CENTER);

        push ()
        
    }
}