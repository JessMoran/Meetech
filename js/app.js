$('.carousel').carousel()






/*$(document).ready(function(){
	var $btns = $(".control-btn");
	//console.log($btns);
	$btns.click(loadImage);
	var target = 0;
});



var loadImage = function (){
	/*console.log(this.dataset);
	console.log(this.dataset.target);*/
	/*var $titulo = $("h1");
	var $target = $(this).data("target");
	displayImage($target);
	changeColorButton($target);
	changeTitle($target);
}


/*  console.log($(".active"));
	console.log($("div.active"));
	console.log($("button.active"));*/
	/*var $actualSlide = $("div.active");
	//console.log($("div[data-slide="+ $target +"]"));
	var $newImage = $("div[data-slide="+$target+"]");
	$actualSlide.removeClass("active");
	$newImage.addClass("active");
}*/


/*var displayImage = function (target){
	var $actualSlide = $("div.active");
	var $newImage = $("div[data-slide="+target+"]");
	$actualSlide.removeClass("active");
	$newImage.addClass("active");
};


var changeColorButton = function (target){
	var $actualButton = $("button.active");

	var $newButton = $("button[data-target="+ target+ "]");
	$actualButton.removeClass("active");
	$newButton.addClass("active");
};

var changeTitle = function(target){
	var $titulo = $("h1");
	var $newTitle = $("h1");
	if (target = 1) {
		$newTitle.text("Willkommen");
	}else if($target = 2){
		$newTitle.text("Bienvenue");
	}else if ($target = 3) {
		$newTitle.text("Welcome");
	}else if ($target = 4) {
		$newTitle.text("Benvenuto");
	}
};

var previousImage = function (e){
	e.preventDefault();
	target = target -1;
	target = (target < 0) ? 4: target;
	displayImage(target);
};

var nextImage = function (e){
	e.preventDefault();
	target = target + 1;
	target = (target > 4) ? 0: target;
	displayImage(target);
};

/*var previousBtn = function (e) {
  var $actPrev = $("#prev") {
    if (previousImage === true) {
      $actPrev.active;
    }
  }
}

var nextBtn = function (e) {
  var $actNxt = $("#nxt")
}*/
