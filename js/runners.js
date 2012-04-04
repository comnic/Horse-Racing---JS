/**
 * 
 */
function HORSE(_name){
	console.log("HORSE 생성");
	this.name = _name;
	this.kind = "h001";
	this.imgs = {
			"character":"h001_char.gif",
			"stop":"h001_char.gif",
			"run":"h001_char.gif",
			"end":"h001_char.gif"
			};

	this.speed = 0;
	
	this.getHorseInfo = function(){
		return this.name;
	};
	
	this.getImageList = function(){ return this.imgs; };
}

function CAT(_name){
	console.log("CAT 생성");
	this.name = _name;
	this.kind = "h001";
	this.imgs = {
			"character":"c001_char.gif",
			"stop":"h001_char.gif",
			"run":"h001_char.gif",
			"end":"h001_char.gif"
			};
	
	this.speed = 0;

	this.getHorseInfo = function(){
		return this.name;
	};
	this.getImageList = function(){ return this.imgs; };
}


function DOG(_name){
	console.log("DOG 생성");
	this.name = _name;
	this.kind = "h001";
	this.imgs = {
			"character":"d001_char.gif",
			"stop":"h001_char.gif",
			"run":"h001_char.gif",
			"end":"h001_char.gif"
			};

	this.speed = 0;
	
	this.getHorseInfo = function(){
		return this.name;
	};
	this.getImageList = function(){ return this.imgs; };
}


function MAN(_name){
	console.log("MAN 생성");
	this.name = _name;
	this.kind = "h001";
	this.imgs = {
			"character":"m001_char.gif",
			"stop":"h001_char.gif",
			"run":"h001_char.gif",
			"end":"h001_char.gif"
			};

	this.speed = 0;
	
	this.getHorseInfo = function(){
		return this.name;
	};
	this.getImageList = function(){ return this.imgs; };
}