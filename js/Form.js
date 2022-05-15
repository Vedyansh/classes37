class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","enter your name");
    this.playbutton=createButton("Play");
    this.titleImg=createImg("assets/title.png","gametittle");
    this.greating=createElement("h2");
  }
  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playbutton.position(width / 2 - 90, height / 2 - 20);
    this.greating.position(width / 2 - 300, height / 2 - 100);
  }

  handleMousePressed(){
  this.playbutton.mousePressed(
   ()=>{
     this.input.hide();
     this.playbutton.hide();
     var message=`Hello ${this.input.value() }
     </br>wait for another player to join`
     this.greating.html(message)
   }
  )
  }

  display(){
  this.setElementsPosition();
  this.handleMousePressed();
  }
}
