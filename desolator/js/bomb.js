/*
бомба
*/
function bomb(sprite){
	this.sprite = sprite;
	this.x=0;
	this.y=0;
	this.v=2;
	this.vx=0;
	this.enable=true;
	this.cdr = 0;
	
	this.gx0=0;
	this.gy0=0;
	this.gx1=0;
	this.gy1=0;
	
	this.flagUUU = true;
	
	this.step = function(){
		this.y+=this.v;
		this.x+=this.vx;
		if(this.x>300 && this.x<305){
			this.vx=0;this.v=6;
			if(this.flagUUU){
				this.flagUUU = false;
				bombdown.play();
			}
		}
		if(this.y>460){
			this.enable=false;
			//комментим для отладки
			flagGameOver=true;
			babahCount=50;
			boom.play();
		}
		switch(this.cdr){//вообще-то костыль, вычисление собственных габаритов
			case 0,1:
				this.gx0=this.x;
				this.gy0=this.y;
				this.gx1=this.x+50;
				this.gy1=this.y+50;
			break;
			case 2:
				this.gx0=this.x+20;
				this.gy0=this.y;
				this.gx1=this.x+30;
				this.gy1=this.y+50;
			break;
		}
	}
	this.draw=function(){
		if(this.vx==0){
			this.cdr=2;
		}else if(this.y<200){
			this.cdr=0;
		}else{
			this.cdr=1;
		}
		var ani=0;
		if(this.vx<0){ani=1;}
		this.sprite.draw(this.x, this.y,ani,0,this.cdr);
		if(this.cdr>=this.sprite.count[0]){this.cdr=0;}
	}
}