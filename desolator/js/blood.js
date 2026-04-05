/*
ךנמגטששששא
*/
function blood(sprite){
	this.sprite = sprite;
	this.x=0;
	this.y=0;
	this.ani=0;
	this.cdr=0;
	
	this.step=function(){
		
	}
	this.draw=function(){
		if(this.cdr==0){
			uzhos.play();
		}
		this.sprite.draw(this.x, this.y, this.ani, 0, this.cdr);
		if(this.cdr<10){this.cdr++;}
	}
}