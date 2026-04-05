/*
класс снаряда
*/
function bullet(sprite, pos){
	this.sprite = sprite;
	this.pos = 0;//номер угла полёта
	this.x = 320;
	this.y = 425;
	this.angles = [2.7, 5.7, 9.8, 14.4, 20.2, 26.8, 34.6, 43.2, 47.5, 57.8, 66.5, 74.5, 79.6, 84.5, 87.8, 90, 94.4, 98.4, 102.9, 108.6, 115.6, 123.9, 133.1, 142.3, 150.4, 157.4, 161.9, 166.7, 171.4, 175, 178];
	this.vConst = 10;
	this.enable = true;
	this.angle = 0;

	this.draw = function(){
		this.sprite.draw(this.x, this.y, 0,0,this.pos);
	}
	this.step = function(){
		this.angle=this.angles[this.pos]/180*Math.PI;
		this.x+=Math.round(Math.cos(this.angle) * this.vConst);
		this.y-=Math.round(Math.sin(this.angle) * this.vConst);
		
		if(this.x<0 || this.x>640 || this.y<0){
			this.enable=false;
		}
	}
	
	this.checkShot=function(x0,y0,x1,y1){
		var width=Math.round(Math.cos(this.angle)*30);// - Math.sin(this.angle)*30);
		var height=Math.round(Math.sin(this.angle)*30);
		var x=this.x;
		if(width<0){x-=width;width=-width;}
		
		
		if(x0 < (x + (x1-x0)) && y0 < (this.y + (y1-y0)) && (x0 + width) > x && (y0 + height) > this.y){
			return true;
		}else{
			return false;
		}
	}
}