$(document).ready(function(){
//Variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;
    //Key Pressed event

    $(document).on('keypress',function(e){
        if(e.which == 13)
        {
            $($surface).toggleClass('startJourney');
            $("img").attr("src", "./assets/animated-santa-claus-image-0420.gif");
        }  
    })
    $(document).on('keypress',function(e){
        if(e.which == 71)
        {
                $img.attr('src',"./assets/gift_unbox.gif"); 
    }
    })


});