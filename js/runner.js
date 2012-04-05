/**



*/
function runner(_n, _k){
	this.name = _n;
	this.kind = _k;
	this.speed = 1;
	this.left = 0;
	
	this.runnerObject = new Object();
	if(_k == "Horse"){
		this.runnerObject = new HORSE(_n);		
	}else if(_k == "Man"){
		this.runnerObject = new MAN(_n);
	}else if(_k == "Woman"){
		this.runnerObject = new WOMAN(_n);
	}else if(_k == "Monkey"){
		this.runnerObject = new MONKEY(_n);
	}else if(_k == "Dog"){
		this.runnerObject = new DOG(_n);
	}else if(_k == "Cat"){
		this.runnerObject = new CAT(_n);
	}else{
		this.runnerObject = new MAN(_n);
	}
	
	this.getName = function(){return this.name;};
	this.setName = function(_n){this.name = _n;};
	this.getSpeed = function(){return this.speed;};
	this.setSpeed = function(_s){this.speed = _s;};
	this.getImg = function(){return this.runnerObject.getImageList();};
	this.getRunImage = function(){return this.getImg().run;};
	this.getStopImage = function(){return this.getImg().stop;};	
	this.getCharImage = function(){return this.getImg().character;};
	
		
}