var i = 0;

$("p, #communicateToUser, #beer, #wine, .welcomeScreenWine, .welcomeScreenWineDouble, #shot, .welcomeText").hide();

$( document ).ready(function() {
   $(".welcomeAnimation").fadeOut(1300, function(){
       
       $(".welcomeScreenWine, .welcomeScreenWineDouble, .welcomeText").fadeIn(1000);
   });


$(".welcomeScreenWine, .welcomeScreenWineDouble, .welcomeText").click(function(){
    
    $(".welcomeScreenWine, .welcomeScreenWineDouble, .welcomeText").fadeOut(1000, function(){
        $("p, #communicateToUser, #beer, #wine, #shot").fadeIn(300);
    });    
});

 $("#beer, #wine, #shot").click(function(){
//       $("p").html(i++);
         $("p").html(i=i+1);
   });

});
//hide the main elements of the app so I can show them later in the following sequence: welcome animation, then welcome screen, then the main page of the app



//hide the welcome animation and show the welcome screen

  


//hide the welcome screen and show the main page of the app

