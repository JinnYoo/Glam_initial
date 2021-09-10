//script.js




$(document).ready(function(){
    $('.movetopbt').on('click',function(){
        $('html').animate({scrollTop:0},800,"swing");
    });
//수업 버튼 누르면 수업으로 이동    
    $("#div1").click(function (){
        $('html, body').animate({
            scrollTop: $("#classLists").offset().top
        }, 2000);

    $("#div2").click(function (){
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
        }, 2000);

});

  /* 

if (typeof jQuery == 'undefined') {

    alert("없음");
    
    }else{
    
    alert("있음");
    
    }

  
   $('.movetopbt').on('click',function(){
        $('html').animate({scrollTop:0},800);

//로고 누르면 상위로 이동

    $('#logo').on('click',function(){
        
        $('html').animate({scrollTop:0},800);
    });
   
//1. 수업리스트 스크롤

   
        
//x 누르면 aside 화면 밖으로 이동
    
        $("#exit_aside").on('click',function(){
        
            $("aside").animate({
                width:"0px"
            },1000,"swing");
       
    });

});



/*
       
        */

/* 

//이미지 업로드 스크롤
    $("#div2").click(function (){
        $('html, body').animate({
            scrollTop: $("#imgUpload").offset().top
        }, 2000);
    });

//    
    $("#div3").click(function (){
        $('html, body').animate({
            scrollTop: $("#galleryView").offset().top
        }, 2000);
    });
//    
    $("#div4").click(function (){
        $('html, body').animate({
            scrollTop: $("#studentLists").offset().top
        }, 2000);
//


    });

/*
    var offset = $(selector).offset();  
    $('.window').animate({scrollTop: (offset.top - $('.window').height() / 2)}, 500);   
    */    

/*
document.querySelector('.movetopbt').addEventListener('click',function(){
    alert(1)
});



*/

/*
document.querySelector('.movetopbt').addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
});

$('button').on("click",function(){
    (this).
    alert("hello");
});


$(function() {
   
    alert("Hello...?");
    
});


$('button').click(function(){
    $('html').animate({this.scrollTop:0},800);
});
*/


/*
$('#moveTop').on('click',function(){
    $('html').scrollTop('0');
});

$('#moveTop').on('click',fuction(){
    alert("Hello?");
});


$('#movetopbt').on("click", function() {
    $('html').scrollTop(0);
  });


$(function(){
    //console.log("test");
    alert)("hi");
});



$('.movetopbt').on('click',function(){
   $('html,body').animate({
       this.scrollTop:0
   },1000);
});

*/