class Paper{
constructor(x,y,r){
 var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
this.body = Bodies.circle(x,y,r/2,options);
World.add(world,this.body);
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png")
}
display(){
	ellipseMode(RADIUS);
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
   
}
}
