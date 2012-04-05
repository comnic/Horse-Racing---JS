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
			"run":"h001_run.gif",
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
	this.kind = "m001";
	this.imgs = {
			"character":"m001_char.gif",
			"stop":"m001_stop.gif",
			"run":"m001_run.gif",
			"end":"m001_end.gif"
			};

	this.speed = 0;
	
	this.getHorseInfo = function(){
		return this.name;
	};
	this.getImageList = function(){ return this.imgs; };
}

function WOMAN(_name){
	console.log("WOMAN 생성");
	this.name = _name;
	this.kind = "w001";
	this.imgs = {
			"character":"w001_char.gif",
			"stop":"w001_stop.gif",
			"run":"w001_run.gif",
			"end":"w001_end.gif"
			};

	this.speed = 0;
	
	this.getHorseInfo = function(){
		return this.name;
	};
	this.getImageList = function(){ return this.imgs; };
}

function MONKEY(_name){
	console.log("Monkey 생성");
	this.name = _name;
	this.kind = "k001";
	this.imgs = {
			"character":"k001_char.gif",
			"stop":"k001_stop.gif",
			"run":"k001_run.gif",
			"end":"k001_end.gif"
			};

	this.speed = 0;
	
	this.getHorseInfo = function(){
		return this.name;
	};
	this.getImageList = function(){ return this.imgs; };
}