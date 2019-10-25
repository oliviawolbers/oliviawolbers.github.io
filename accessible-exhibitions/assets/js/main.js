$(document).ready(function(){
	console.log("The page is ready!");


	$('.exhibition').click(function(){
		$('.exhibition').removeClass('active');
		$(this).addClass('active');
	});

	var hideAll = function() {
		$('.listing').addClass('hide');
	}

	$('.btn-cbd').click(function(){
		hideAll(); 
		$('.cbd').removeClass('hide');
	});

	$('.btn-out').click(function(){
		hideAll(); 
		$('.out').removeClass('hide');
	});

	$('.btn-free').click(function(){
		hideAll(); 
		$('.free').removeClass('hide');
	});

	$('.btn-fashion').click(function(){
		hideAll(); 
		$('.fashion').removeClass('hide');
	});

	$('.btn-art').click(function(){
		hideAll(); 
		$('.art').removeClass('hide');
	});

    $('.btn-photo').click(function(){
		hideAll(); 
		$('.photo').removeClass('hide');
	});

    $('.btn-mixed').click(function(){
		hideAll(); 
		$('.mixed').removeClass('hide');
	});

});