class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setMass(this.body,this.body.mass*4.5)
  }

  display() {
    
    super.display();
  }
}
