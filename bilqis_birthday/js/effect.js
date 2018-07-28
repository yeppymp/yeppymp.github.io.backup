$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container:not(.finish)').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6').stop();

			if ($(window).width() <= 480) {
				$('#b11').animate({top:200, left: vw-170},1000);
				$('#b22').animate({top:200, left: vw-120},1000);
				$('#b33').animate({top:200, left: vw-70},1000);
				$('#b44').animate({top:200, left: vw-20},1000);
				$('#b55').animate({top:200, left: vw+30},1000);
				$('#b66').animate({top:200, left: vw+80},1000);
			} else {
				$('#b11').animate({top:200, left: vw-300},1000);
				$('#b22').animate({top:200, left: vw-200},1000);
				$('#b33').animate({top:200, left: vw-100},1000);
				$('#b44').animate({top:200, left: vw-0},1000);
				$('#b55').animate({top:200, left: vw+100},1000);
				$('#b66').animate({top:200, left: vw+200},1000);
			}
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	var birthday_song = $('.song')[0];
	var applause_effect = $('.song.applause')[0];
	
	$('#play').click(function(){
        birthday_song.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')

		if ($(window).width() <= 480) {
			$('#b11').animate({top:200, left: vw-170},1000);
			$('#b22').animate({top:200, left: vw-120},1000);
			$('#b33').animate({top:200, left: vw-70},1000);
			$('#b44').animate({top:200, left: vw-20},1000);
			$('#b55').animate({top:200, left: vw+30},1000);
			$('#b66').animate({top:200, left: vw+80},1000);
		} else {
			$('#b11').animate({top:200, left: vw-300},1000);
			$('#b22').animate({top:200, left: vw-200},1000);
			$('#b33').animate({top:200, left: vw-100},1000);
			$('#b44').animate({top:200, left: vw-0},1000);
			$('#b55').animate({top:200, left: vw+100},1000);
			$('#b66').animate({top:200, left: vw+200},1000);
		}

		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$('.ss-message').fadeIn('slow');
		$('.cake').fadeOut('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
			$('.ss-message').fadeOut('fast');
		});
		
		var i;
		var message_length = $('.message p').length;

		function msgLoop (i) {
			$(".message p:nth-child("+i+")").fadeOut('slow').delay(1300).promise().done(function(){
			i=i+1;
			$(".message p:nth-child("+i+")").fadeIn('slow').delay(1500);
			if(i==message_length){
				$(`.message p:nth-child(${message_length})`).fadeOut('slow').promise().done(function () {
					$('.balloons').fadeOut('slow');
					birthday_song.pause();
					birthday_song.currentTime = 0;
					$('.cake').fadeIn('fast');
					$('#blow_candle').fadeIn('slow');
				});
				
			}
			else{
				msgLoop(i);
			}	

		});
			// body...
		}
		
		msgLoop(0);
		
	});

	$('#blow_candle').click(function() {
		$('.fuego').fadeOut('slow');
		applause_effect.play();
		$(this).fadeOut('slow').fadeOut('slow').promise().done(function () {
			$('#finish_btn').fadeIn('slow');
		});
	});

	$('#finish_btn').click(function() {
		$('.cake').fadeOut('fast');
		$('#bulb_yellow').removeClass('bulb-glow-yellow-after');
		$('#bulb_red').removeClass('bulb-glow-red-after');
		$('#bulb_blue').removeClass('bulb-glow-blue-after');
		$('#bulb_green').removeClass('bulb-glow-green-after');
		$('#bulb_pink').removeClass('bulb-glow-pink-after');
		$('#bulb_orange').removeClass('bulb-glow-orange-after');
		$('body').removeClass('peach-after');
		$('#bulb_yellow').removeClass('bulb-glow-yellow');
		$('#bulb_red').removeClass('bulb-glow-red');
		$('#bulb_blue').removeClass('bulb-glow-blue');
		$('#bulb_green').removeClass('bulb-glow-green');
		$('#bulb_pink').removeClass('bulb-glow-pink');
		$('#bulb_orange').removeClass('bulb-glow-orange');
		$('.bannar').removeClass('bannar-come');
		$('body').css({ 'background-color': '#fff' });
		$('.container:not(.finish)').css({ 'display': 'none' });
		$(this).fadeOut('slow').promise().done(function () {
			$('.container.finish').fadeIn('slow').css({ 'display': 'flex !important' });
		});
	});
});




//alert('hello');