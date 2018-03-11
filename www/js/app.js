


var trocaTextoBotão = function (tipo) {
  if(tipo == "fibo"){
    $(".titulo-local").text("Fibonacci");
    $( ".texto-card" ).each(function( index ) {
      if($(this).attr('data-fibo') != "coffe"){
        $( this ).text($(this).attr('data-fibo'));
        // mostra carta inferior esquerdo
        $(".standard-hide").removeClass("hide");
      }
      


    });
  }else{
      $(".titulo-local").text("Standard");
      $( ".texto-card" ).each(function( index ) {
      if($(this).attr('data-standard') != "coffe"){
        $( this ).text($(this).attr('data-standard'));
        // esconde carta inferior esquerdo
        $(".standard-hide").addClass("hide");
      }

    });
  }
}




  // Initialize collapse button
$(".button-collapse").sideNav();

$(".bt-slc-carta").on("click",function(){
  
      $(".selecao-carta").addClass("fade-out");

      //$(".carta-escondida").removeClass("hide");
      $(".carta-escondida").removeClass("fade-out");
      $(".carta-escondida").addClass("fade-in");

      setTimeout(function(){ 
        $('.selecao-carta').addClass('vai-pro-lado'); 
      }, 500);

      /////////////////////////////////mudo o texto do card final
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
      shake.startWatch(onShake, 30);
});

var funcMostrarCarta  = function(){
  //habilito bt add pontos
    $('.add-pontos').removeClass("hide");
    $(".box1").toggleClass("hover");

    //volto menu pro lugar
    setTimeout(function(){ 
        $('.selecao-carta').removeClass('vai-pro-lado').removeClass('fade-out');
    }, 500);
}  

$(".mostrar-carta").on("click",function(){
    funcMostrarCarta();
});

//click no voltar
$(".voltar-selec-card").on("click", function(){
    //desabilito bt add pontos

    //esconde carta
    $(".carta-escondida").addClass("fade-out");
    
    $(".carta-escondida").removeClass("fade-in");

    $(".selecao-carta").removeClass("fade-out");

    $('.add-pontos').addClass("hide");

    $(".box1").toggleClass("hover");



  });



$(".menu-lateral").on("click", function(){

  //remove marcação de ativo em todos
  $(".menu-lateral").removeClass("ativo");

  //escondo todas as telas
  if(!$(this).hasClass("share")){
      $(".telas").addClass("hide");
  }
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
    $(".titulo-local").text("Cronometro");
    $("#crono").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //anotacoes
  if($(this).hasClass("anotacoes")){
    $(".titulo-local").text("Anotações");
    $("#anotacoes").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //Pontos
  if($(this).hasClass("pontos")){
    $(".titulo-local").text("Pontos");
    $("#pontos").removeClass("hide");
    $(this).addClass("ativo");
    
  }

  //config
  if($(this).hasClass("config")){
    $(".titulo-local").text("Configurações");
    $("#config").removeClass("hide");
    $(this).addClass("ativo");
    
  }
  //share
/*  if($(this).hasClass("share")){
    //$("#share").removeClass("hide");
    $(this).addClass("ativo");
    //compartilhar();
    
  }*/

  //ajuda
  if($(this).hasClass("ajuda")){
    $(".titulo-local").text("Ajuda");
    $("#ajuda").removeClass("hide");
    $(this).addClass("ativo");
    
  }

  setTimeout(function(){ $('.button-collapse').sideNav('hide'); }, 200);
  
});





var addPontos = function() {

  var $toastContent = '<span>Adicionado XXX pontos</span><button class="btn-flat toast-action deep-orange white-text bt-undo">Undo</button>';
  Materialize.toast($toastContent, 15000);

}

var verPontos = function() {

  var $toastContent = '<span>Total de XXX pontos</span><button class="btn-flat toast-action deep-orange white-text bt-undo">Ver +</button>';
  Materialize.toast($toastContent, 15000);

}

$('.add-pontos').on('click', function(){
  addPontos();
});

$('.ver-pontos').on('click', function(){
  verPontos();
});























var onShake = function () {
  // Fired when a shake is detected 
  funcMostrarCarta();
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
    $('.modal').modal();
    $(".menu-lateral.fibo").addClass("ativo");


    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {

    //escreve os botões
    trocaTextoBotão("fibo"); // para iniciar com fibonacci passar o parametro "fibo"

    // Now safe to use device APIs





    ///////////////////////////////////////////////SHARE
    var options = {
      message: 'mensagem personalizada', // not supported on some apps (Facebook, Instagram)
      subject: 'Marco Romero', // fi. for email
      files: ['', ''], // an array of filenames either locally or remotely
      url: 'https://play.google.com/store/apps/details?id=br.com.marcoromero.pokerplanning',
      chooserTitle: 'Conheça meu App' // Android only, you can override the default share sheet title
    }
     
    var onSuccess = function(result) {
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
      console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    }
     
    var onError = function(msg) {
      console.log("Sharing failed with message: " + msg);
    }
    
    var compartilhar = function(){
        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    } 

    $(".share").on("click", function(){
      //alert("compartilhar");
      compartilhar();
    });





    


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

