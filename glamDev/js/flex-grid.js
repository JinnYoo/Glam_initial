//flex-grid.js

//alert(1);


$(document).ready(function(){
    $('.center_ticket').addClass('.bigger');
    //alert(12);

});    


$(window).scroll(
	function(){
		//패럴렉스(된다)
		var wScroll = $(this).scrollTop();
        $('.backRoom, .shadow').css({'transform':'translate(0px, '+ wScroll /10+'% '});  
        $('.backRoom, .shadow').css({'transform':'translate(0px, '+ wScroll /10+'% '}); 
		/*
        $('.right01').css({'transform':'translate( '+ wScroll/10 +'% , 0px '});
        $('.right02').css({'transform':'translate( '+ wScroll/15 +'% , 0px '});
        $('.left01').css({'transform':'translate( -'+ wScroll/10 +'% , 0px '});
        $('.left02').css({'transform':'translate( -'+ wScroll/20 +'% , 0px '});

		$('.mid').css({'transform':'translate( -'+ wScroll/50 +'% , '+ wScroll/50 +'%) '});
        $('.back').css({'transform':'translate(0px, '+ wScroll/4 +'% )'});
		
//		if($("#header").offset().top<100){
//			$(this).css({'position':'fixed'});
//		}*/

      //  $('.center_ticket').css({'transform':'scale( '+ wScroll/10 +') });
       

		if($(document).scrollTop()>300){
			$('#header').addClass("fix");
	//		$('#title').css({"margin-top":"-300"});
		}
		else{
			$('#header').removeClass("fix");
		}
    //    
        if(wScroll > $('.not-shown').offset().top-($(window).height()/1.2)){
            
            //alert(3);
            $('.not-shown>li').each(function(i){
                setTimeout(function(){
                    $('.not-shown>li>img').eq(i).addClass('is-showing');
                }, 150 * (i+1));
            });
        }    

    }
);
