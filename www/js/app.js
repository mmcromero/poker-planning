  // Initialize collapse button
  $(".button-collapse").sideNav();

  $("a").on("click",function(){

    if(!$("#flip-toggle").hasClass("hover")){
        $(".texto-card-big").text($(this).text());
    }
    
    $(".flip-container").toggleClass("hover");
    $("#bt-voltar").toggleClass("hide");



  })


