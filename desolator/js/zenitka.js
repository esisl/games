/**
класс зенитки
*/

function zenitka(sprite){
	this.sprite=sprite;
	this.pos=0;
	this.posDesc=0;
	this.x=0;
	this.y=0;
	this.lives = 5;
	this.angles = [2.7, 5.7, 9.8, 14.4, 20.2, 26.8, 34.6, 43.2, 47.5, 57.8, 66.5, 74.5, 79.6, 84.5, 87.8, 90, 94.4, 98.4, 102.9, 108.6, 115.6, 123.9, 133.1, 142.3, 150.4, 157.4, 161.9, 166.7, 171.4, 175, 178];
	
	this.draw = function(){
		this.sprite.draw(this.x, this.y, 0, 0, this.pos);
	}
	this.right = function(){
		if(this.pos>0){this.pos--;}
	}
	this.left = function(){
		if(this.pos<30){this.pos++;}
	}
	
	this.angleByXY = function(x,y){
		var rx=x-this.x;
		var ry=this.y-25-y;
		if(ry<=0){ry=1;}
		var angle=Math.atan(ry/rx)/Math.PI*180;
		if(angle<0){angle+=180;}
		return angle;
	}
	this.posByAngle = function(angle){
		for(var i in this.angles){
			if(this.angles[i]>angle){
				return i;
			}
		}
		return 30;
	}
	this.setPosByMouse = function(x,y){	
		this.posDesc = this.posByAngle(this.angleByXY(x,y));
	}
	this.step = function(){
		if(this.posDesc>this.pos){
			this.pos++;
		}else if(this.posDesc<this.pos){
			this.pos--;
		}
	}
}