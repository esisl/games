/**
парашютист
*/
function paratrooper(sprite){
	this.sprite = sprite;
	this.x=0;
	this.y=0;
	this.v=3;
	this.down=false;
	this.enable=true;
	this.cdr = 0;
	this.type=0;
	
	this.step = function(){
		this.y+=this.v;
		if(this.down && this.cdr==0){
			this.enable=false;
			//добавить трупера
			var n=troopers.length;
			troopers[n]=new trooper(irokez);
			troopers[n].x=this.x;
			troopers[n].y=this.y;
			troopers[n].mode='hide';
		}
		if(this.y>460 && !this.down){this.down=true; this.cdr=0;this.type=1;}
	}
	this.draw=function(){
		this.sprite.draw(this.x, this.y,this.type,0,this.cdr);
		this.cdr++;
		if(this.cdr>=this.sprite.count[0]){this.cdr=0;}
	}
}