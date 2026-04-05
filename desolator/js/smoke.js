/*
класс дым
*/
function smokeElement(){
	this.x=0;
	this.y=0;
	this.vx=0;
	this.vy=0;
	this.op=0.2;
	this.a=0;
	this.r=20;
	
	this.step = function(){
		this.r+=4;
		this.a+=0.2;
		if(this.a>Math.PI*2){this.a=0;}
		this.op-=0.005;
		
		this.x+=this.vx;
		this.y+=this.vy;
	}
}

function smoke(img){
	this.img=img;
	this.x=0;
	this.y=0;
	this.onSmoke=false;
	
	this.elements = new Array;
	
	this.step = function(){
		//создать элемент
		var n=this.elements.length;
		this.elements[n]=new smokeElement();
		this.elements[n].x=310+Math.round(Math.random()*20);
		this.elements[n].y=460;
		this.elements[n].vx=1-(Math.random()*2);
		this.elements[n].vy=-5-Math.round(Math.random()*5);
		this.elements[n].a=Math.random(Math.PI*2);
		
		this.onSmoke=true;
		
		var i=0;
		//debug.innerHTML='';
		while(i<this.elements.length){
			//debug.innerHTML+=i+'<br>';
			this.elements[i].step();
			if(this.elements[i].op<=0){
				this.elements.splice(i,1);
			}else{
				i++;
			}
		}
	}
	
	this.draw = function(){
		for(var i in this.elements){
			//debug.innerHTML+='draw '+this.elements[i].x+','+this.elements[i].y+'<br>';
			ctx.save(); //сохраняем состояние холста
			ctx.globalAlpha = 1-this.op;
	        ctx.translate(this.elements[i].x,this.elements[i].y); //задаем начальные координаты
	        ctx.rotate(this.elements[i].a); //вращаем контекст
	        ctx.drawImage(img,-this.elements[i].r/2,-this.elements[i].r/2,this.elements[i].r,this.elements[i].r); //рисуем картинку
	        ctx.restore(); //восстанавливаем первоначальное состояние холста
		}
	}
}
