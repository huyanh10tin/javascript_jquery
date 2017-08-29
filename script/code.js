// alert("X");
var grid = 0;
var style = 0;
var pad = document.getElementById("pad");
console.log(pad.offsetWidth);
var sizePad = parseInt();
$(document).ready(function(){
	// change grid style
	$("#changeStyle").on('click',function(){
		// console.log(style);
		if (style==0){
			style = 1;
			$(".block").css("border-radius","50%");
		}
		else{
			style = 0;
			$(".block").css("border-radius","0%");
		}
	});
	// set reset function	
	$("#reset").on('click',function(){
		$(".block").css("background-color","green");
	});
	// set the grid function
	$("#saveCheck").on('click',function(event) {
		// reset
		$(".custom").empty();
		grid = parseInt($("#grid").val());
		console.log(grid);
		render(grid);
	});
	// render block
	function render(grid){
		// console.log(parseInt($(pad).width()));
		var size = $(pad).width()/grid;

		console.log(size);
		for(var i = 0; i < grid*grid;i++){
			var block = document.createElement("div");
			console.log($(block));
			var blockinside = document.createElement("div");
			$(block).addClass("block");
			$(block).css({"width":(size),"height":(size),"display":"inline-block","background-color":"red"});

			$(block).mouseover(function() {
				
				$(this).css("background-color","orange");
			});
			$(".custom").append(block);
		}
	}
});
