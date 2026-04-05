/*
собственно десантник
*/
function trooper(sprite){
	this.sprite = sprite;
	this.mode = 'hide';//run, shot
	this.x=0;
	this.y=0;
	this.vx=0;
	this.ani=0;
	this.cdr=0;
	
	this.step = function(){
		switch(this.mode){
			case 'hide':
				//ничего не делать
				if(this.x>320){
					this.ani=2;
				}else{
					this.ani=3;
				}
			break;
			case 'run':
				//бежим к пушке
				if(this.x>320){
					this.ani=1;
					this.vx=-1;
					if(this.x<370 && this.x>345){this.y--;}
					if(this.x<330){
						this.vx=0;
						this.cdr=0;
						this.ani=4;
						this.mode='shot';
						vsegoTroops++;
						//debug.innerHTML+='cdr '+this.mode+'<br>';
					}
				}else{
					this.ani=0;
					this.vx=1;
					if(this.x>270 && this.x<295){this.y--;}
					if(this.x>310){
						this.vx=0;
						this.cdr=0;
						this.ani=5;
						this.mode='shot';
						vsegoTroops++;
						//debug.innerHTML+='cdr '+this.mode+'<br>';
					}
				}
			break;
			case 'shot':
				//колотим стрелков
				if(this.x>320){
					this.ani=4;
				}else{
					this.ani=5;
				}
				fight.play();
			break;
		}
		this.x+=this.vx;
	}
	this.draw = function(){
		this.sprite.draw(this.x, this.y, this.ani, 0, this.cdr);
		this.cdr++;
		if(this.cdr>=this.sprite.count[this.ani]){this.cdr=0;}
		//debug.innerHTML+=this.cdr+' ani='+this.ani+' count='+this.sprite.count[this.ani]+'<br>';
	}
}