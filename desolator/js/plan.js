/*
самолёты
*/
function plan(sprite){
	this.sprite = sprite;
	this.x = 0;
	this.y = 0;
	this.v = 0;
	this.enable=true;
	this.cdr = 0;
	
	this.bombDrop = true;
	this.bombPoint = 0;
	this.deltaBP = 0;
	this.lives = 10;
	
	this.step = function(){
		//debug.innerHTML+=' '+this.x+'<br>';
		this.x+=this.v;
		if(this.v>0){
			if(this.x>700){this.enable=false;}
		}else{
			if(this.x<-100){this.enable=false;}
		}
		var deltaBP = Math.abs(this.bombPoint - this.x);
		if(deltaBP > this.deltaBP && this.bombDrop && !flagGameOver && !runTroops){
			//сбросить бомбу
			var n=bombs.length;
			var rnd=Math.random();
			bombs[n]=new bomb(bomb_s);
			bombs[n].x=this.x;
			bombs[n].y=this.y+30;
			bombs[n].vx=this.v;
			
			this.bombDrop = false;
		}else{
			this.deltaBP = deltaBP;
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
			this.bombPoint = Math.round(Math.random()*280+20);
		}else{
			this.v=-4;
			this.x=740;
			this.bombPoint = Math.round(Math.random()*280+340);
		}
		this.deltaBP = Math.abs(this.bombPoint - this.x);
	}
}