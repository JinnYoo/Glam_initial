//sticky.js

$(document).ready(function(){
   //$('#sticky01').scroll();
   //alert(1);
   $('#sec01>span').addClass("is-showing");
   $('#sec01>span').removeClass(".is-showing");
});


$(window).scroll(function(){
       // alert(1);
    var wScroll = $(this).scrollTop();

    if(wScroll>$('#sec02').offset().top-300){
        $('#sec02>span').addClass("is-showing");
	    $('#sec02>span').removeClass("is-showing");
        $('.navBar>li:nth-child(2)>a').addClass('bg-white');
    }
    if(wScroll>$('#sec03').offset().top-300){
        $('#sec03>span').addClass("is-showing");
	    $('#sec03>span').removeClass(".is-showing");
    }
    if(wScroll>$('#sec04').offset().top-300){
        $('#sec04>span').addClass("is-showing");
	    $('#sec04>span').removeClass(".is-showing");
    }
    if(wScroll>$('#sec05').offset().top-300){
        $('#sec05>span').addClass("is-showing");
	    $('#sec05>span').removeClass(".is-showing");
    }
    if(wScroll>$('#sec06').offset().top-300){
        $('#sec06>span').addClass("is-showing");
	    $('#sec06>span').removeClass(".is-showing");
    }

    });