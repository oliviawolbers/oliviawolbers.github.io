$(document).ready(function(){
	console.log("The page is ready!");

	$('.research-item').click(function(){
		$(this).toggleClass('large');

	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.research-item').addClass('hide');
	}

	$('.btn-future').click(function(){
		hideAll(); 
		$('.future').removeClass('hide');
	});

	$('.btn-past').click(function(){
		hideAll(); 
		$('.past').removeClass('hide');
	});

	$('.btn-present').click(function(){
		hideAll(); 
		$('.present').removeClass('hide');
	});





});