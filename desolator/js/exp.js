/*
класс взрыва
живёт пока взрывается, затем самоликвидация
*/

function exp(sprite){
	this.sprite = sprite;
	this.x=0;
	this.y=0;
	this.vx=0;
	this.vy=0;
	this.ax=0;
	this.ay=0;
	this.cdr=0;
	this.pause=0;
	this.enable=true;
	
	this.step=function(){
		this.vx+=this.ax;
		this.vy+=this.ay;
		this.x+=this.vx;
		this.y+=this.vy;
	}
	this.draw=function(){
		if(this.pause>0){
			this.pause--;
		}else{
			this.sprite.draw(this.x, this.y, 0,0,this.cdr);
			this.cdr++;
			if(this.cdr>=this.sprite.count[0]){this.cdr=0;this.enable=false;}
		}
	}
}