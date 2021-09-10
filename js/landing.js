//Landing page 

$(document).ready(function(){
    //alert(12);
    $('.logIn_popUp').on('click',function(){
        $(this).css("background","red");
    });
    

   
});


$(window).scroll(
	function(){
		//패럴렉스(된다)
		var wScroll = $(this).scrollTop();
		$('.fore').css({'transform':'translate(0px, '+ wScroll/50 +'%)'});
		$('.mid').css({'transform':'translate( -'+ wScroll/50 +'% , '+ wScroll/50 +'%) '});
        $('.back').css({'transform':'translate(0px, '+ wScroll/4 +'% )'});
		
//		if($("#header").offset().top<100){
//			$(this).css({'position':'fixed'});
//		}
		if($(document).scrollTop()>300){
			$('#header').addClass("fix");
	//		$('#title').css({"margin-top":"-300"});
		}
		else{
			$('#header').removeClass("fix");
		}
	}
);
