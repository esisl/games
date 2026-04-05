/*
вертолёты
*/
function heli(sprite){
	this.sprite = sprite;
	this.x = 0;
	this.y = 0;
	this.v = 0;
	this.enable=true;
	this.cdr = 0;
	
	this.paraDrop = true;
	this.paraPoint = 0;
	this.deltaPP = 0;
	
	this.step = function(){
		this.x+=this.v;
		if(this.v>0){
			if(this.x>700){this.enable=false;}
		}else{
			if(this.x<-100){this.enable=false;}
		}
		
		var deltaPP = Math.abs(this.paraPoint - this.x);
		if(deltaPP > this.deltaPP && this.paraDrop && !flagGameOver && !runTroops){
			//сбросить паратрупера
			var n=paras.length;
			var rnd=Math.random();
			if(rnd<0.33){
				paras[n]=new paratrooper(para0);
			}else if(rnd<0.66){
				paras[n]=new paratrooper(para1);
			}else{
				paras[n]=new paratrooper(para2);
			}
			paras[n].x=this.x;
			paras[n].y=this.y+50;
			
			this.paraDrop = false;
		}else{
			this.deltaPP = deltaPP;
		}
	}
	this.draw = function(){
		var ani=0;
		if(this.v<0){ani=1;}
		this.sprite.draw(this.x, this.y,ani,0,this.cdr);
		this.cdr++;
		if(this.cdr>=this.sprite.count[ani]){this.cdr=0;}
	}
	this.setRandom = function(){
		this.y = Math.round(Math.random()*3)*30+30;
		var r=Math.random();
		if(r>0.5){
			this.v=4;
			this.x=-100;
		}else{
			this.v=-4;
			this.x=740;
		}
		this.paraPoint = Math.round(Math.random()*540+50);
		this.deltaPP = Math.abs(this.paraPoint - this.x);
	}
}