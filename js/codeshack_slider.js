// JavaScript Document

var transitionSpeed = 2000;
var pauseTime = 5000;
var selected = 'false';
var count = 1;

// Do not edit below here
var counter = 1;


$(document).ready(function() {
	$('.slider, #next, #previous').mouseover(function() {
		$('#next, #previous').css ({
					'visibility' :'visible'
				});
				
	});
	$('.slider').mouseout(function() {
		$('#next, #previous').css ({
					'visibility' :'hidden'
				});
				
	});
	$('#next').click(function() {
		if (counter == $('.slider img').length)
		{
			count = 1;
		}
		else 
		{
			count = counter + 1;
		}
		
		nextSlide();
		selected = 'true';
	});
	$('#previous').click(function() {
		if (counter == 1)
		{
			count = $('.slider img').length;
		}
		else 
		{
			count = counter - 1;
		}
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(1)').click(function() {
		count = 1;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(2)').click(function() {
		count = 2;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(3)').click(function() {
		count = 3;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(4)').click(function() {
		count = 4;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(5)').click(function() {
		count = 5;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(6)').click(function() {
		count = 6;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(7)').click(function() {
		count = 7;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(8)').click(function() {
		count = 8;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(9)').click(function() {
		count = 9;
		nextSlide();
		selected = 'true';
	});
	$('.thumbnails img:nth-child(10)').click(function() {
		count = 10;
		nextSlide();
		selected = 'true';
		
	});
	
	$('.slider').each(function() {
		if($(this).css('position')=='static')
		{
			$(this).css('position','relative');
		}
		
		$(this).css('overflow','hidden');
		
		$(this).find('img').each(function(counter) {
			$(this).css({
				'position' : 'absolute',
				//ensures the image fits the container exactly
				'width' : $(this).parent().css('width'),
				'height' : $(this).parent().css('height'),
				'top' : '0%'
			});
			
			if(counter== 0)
			{
				$(this).css ({
					'left' :'0%'
				});
			}
			else {
				$(this).css ({
					'left' :'100%'
				});
			}
		});
		
		
			window.setTimeout("nextSlide();",pauseTime);
		
	});
	
	$('.descriptions').each(function() {
		$(this).find('.item').each(function() {
			$(this).css({
				'position' : 'absolute',
				'z-index' : 'auto',
				'visibility' : 'hidden',
				'width' : '250px'
			});
		});
		$(this).find('.item:first').each(function() {
			$(this).css({
				'visibility' : 'visible'
			});
		});
	});
	$('#next').each(function() {
		$(this).css({
			'position' : 'absolute',
			'z-index' : '50',
			'margin-left' : '450px',
			'margin-top' : '120px',
			'visibility' :'hidden'
		});
	});
	$('#previous').each(function() {
		$(this).css({
			'position' : 'absolute',
			'z-index' : '50',
			'margin-left' : '10px',
			'margin-top' : '120px',
			'visibility' :'hidden'
		});
	});
	$('.thumbnails').each(function() {
		$(this).css({
			'float' : 'left',
			'width' : '550px'
		});
	});
	$('.sliderContainer').append('<div id="controlPanel"></div>');
	$('#controlPanel').each(function() {
		$(this).css({
			'position' : 'absolute',
			'z-index' : '100',
			'margin-left' : '10px',
			'margin-top' : '320px',
			'background-color' :'#878787',
			'padding' : '5px',
			'border-radius' : '3px'
		});
		
	});
	for (i=0; i < $('.slider img').length; i++){
      	$('#controlPanel').append('<div class="control" style="width:10px; height:10px; float:left; background-color:#3d3d3d; margin:0 2px; border-radius:8px;"></div>');
   	}
		$('.control:first-child').css({
			'background-color' : '#ffffff'
		});
});

function nextSlide() 
{
	if (selected == 'true')
	{
		if (count !== counter)
		{
			$('.slider img:nth-child('+counter+')').animate({'left':'-100%'},1000,
			function(){
				$(this).css('left','100%');
			});
		
			$('.descriptions .item:nth-child('+counter+')').css({'visibility':'hidden'});
		
			$('.control:nth-child('+counter+')').css({'background-color':'#3d3d3d'});
		
			counter ++;
			if (counter>$('.slider img').length) {
			  counter = 1 ;
			}
			
			$('.slider img:nth-child('+counter+')').animate({'left':'0%'},1000);
			
			$('.descriptions .item:nth-child('+counter+')').css({'visibility':'visible'});
			$('.control:nth-child('+counter+')').css({'background-color':'#ffffff'});
			
			nextSlide();			
		}
	} 
	else 
	{
		$('.slider img:nth-child('+counter+')').animate({'left':'-100%'},transitionSpeed,	
		function(){
			$(this).css('left','100%');
		});
		
		$('.descriptions .item:nth-child('+counter+')').css({'visibility':'hidden'});
	
		$('.control:nth-child('+counter+')').css({'background-color':'#3d3d3d'});
	
		counter ++;
	  	if (counter>$('.slider img').length) {
			counter = 1 ;
	  	}
	
		$('.slider img:nth-child('+counter+')').animate({'left':'0%'},transitionSpeed);
		
		$('.descriptions .item:nth-child('+counter+')').css({'visibility':'visible'});
		
		$('.control:nth-child('+counter+')').css({'background-color':'#ffffff'});
	
		window.setTimeout("nextSlide();",pauseTime);
	}
}