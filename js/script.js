$(function(){

    // ----------------- nav menu operation --------------- 
    $("#toggleMenu").click(function(){
        $(".menu").toggleClass("toggle");
    })


    // ------------------- back to top operation --------------- 

    $(".back-to-top").click(function(){
        $("body,html").animate({scrollTop:0},1000)
    });

    // ------------- navbar fixed ------------- 

    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        if(scroll > 200){
            $(".back-to-top").css(
                "opacity" , "1"
            )
        }else{
            $(".back-to-top").css(
                "opacity" , "0"
            )
        }
        if(scroll > 200){
            $(".nav").addClass("fixed")
        }else{
            $(".nav").removeClass("fixed")   
        }
    })
})