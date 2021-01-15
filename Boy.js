class Boy{
   constructor(x,y,width,height){
        var options={
         isStatic:true,
         friction:1,
         density:1.2,

        }
       
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("boy.png");
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);

   }
      
   display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();

   }





}