

  // Initialize collapse button
  $(".button-collapse").sideNav();

  $(".bt-slc-carta").on("click",function(){
    //viro e mostro o logo
    $(".box1").toggleClass("hover");

    //mudo o texto do card final
    if($(this).find("span").attr("data-standard") == "coffe" & $(this).find("span").attr("data-fibo") == "coffe" ){
      //tira o texto anterior
       $(".texto-final").text("");
      //mostra img café
      $(".cafe-img-big").removeClass("hide");
    }else{
      //esconde img café
      $(".cafe-img-big").addClass("hide");
      //troca o texto final
      $(".texto-final").text($(this).text());
    }

    //escondo o box1 e mostro o box2
    setTimeout(function(){ 
      $(".cards1").toggleClass("hide");
      $(".cards2").toggleClass("hide");
      //volta box 1 na posição original
      $(".box1").toggleClass("hover");
      //libera o shake
      shake.startWatch(onShake, 30);

    }, 300);

  });

  //click carta logo segundo box
  $(".mostrar-carta").on("click",function(){
    $(".box2").toggleClass("hover");
  });

  //click no voltar
  $(".voltar-selec-card").on("click", function(){
    $(".cards1").toggleClass("hide");
    $(".cards2").toggleClass("hide");
    //volta box 2 na posição original
      $(".box2").toggleClass("hover");
  });



$(".menu-lateral").on("click", function(){

  //remove marcação de ativo em todos
  $(".menu-lateral").removeClass("ativo");

  //escondo todas as telas
  $(".telas").addClass("hide");

  //fibo
  if($(this).hasClass("fibo")){
    $("#cards").removeClass("hide");
    trocaTextoBotão("fibo");
    $(this).addClass("ativo");
  }
  //stand
  if($(this).hasClass("stand")){
    $("#cards").removeClass("hide");
    trocaTextoBotão();
    $(this).addClass("ativo");
  }
  //crono
  if($(this).hasClass("crono")){
    $("#crono").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //agil
  if($(this).hasClass("agil")){
    $("#agil").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //scrum
  if($(this).hasClass("scrum")){
    $("#scrum").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //config
  if($(this).hasClass("config")){
    $("#config").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //share
  if($(this).hasClass("share")){
    //$("#share").removeClass("hide");
    $(this).addClass("ativo");
    
  }

  setTimeout(function(){ $('.button-collapse').sideNav('hide'); }, 200);
  
});

var trocaTextoBotão = function (tipo) {
  if(tipo == "fibo"){
    $( ".texto-card" ).each(function( index ) {
      if($(this).attr('data-fibo') != "coffe"){
        $( this ).text($(this).attr('data-fibo'));
        // mostra carta inferior esquerdo
        $(".standard-hide").removeClass("hide");
      }
      


    });
  }else{
    $( ".texto-card" ).each(function( index ) {
      if($(this).attr('data-standard') != "coffe"){
        $( this ).text($(this).attr('data-standard'));
        // esconde carta inferior esquerdo
        $(".standard-hide").addClass("hide");
      }

    });
  }
}



var onShake = function () {
  // Fired when a shake is detected 
  $(".box2").toggleClass("hover");
  //desativa o shake
  shake.stopWatch();
};
 
var onError = function () {
  // Fired when there is an accelerometer error (optional) 
  alert("deu ruim...;(");
};
 
// Start watching for shake gestures and call "onShake" 
// with a shake sensitivity of 40 (optional, default 30) 

// Stop watching for shake gestures 
//shake.stopWatch();

function onLoad() {
    //inicia em fibo
    trocaTextoBotão("fibo");
    $(".menu-lateral.fibo").addClass("ativo");


    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {

    //escreve os botões
    trocaTextoBotão(); // para iniciar com fibonacci passar o parametro "fibo"

    // Now safe to use device APIs
    


    $('.timepicker').pickatime({
    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });
}