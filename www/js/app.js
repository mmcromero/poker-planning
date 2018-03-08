  // Initialize collapse button
  $(".button-collapse").sideNav();

  $(".bt-slc-carta").on("click",function(){

    //muda texto carta final
    /*if(!$("#flip-toggle").hasClass("hover")){
        $(".texto-card-big").text($(this).text());
    }*/
    
    $(".box1").toggleClass("hover");

    //$("#bt-voltar").toggleClass("hide");
    //$("#bt-continuar").toggleClass("hide");



  })


var trocaTextoBotão = function (tipo) {
  if(tipo == "fibo"){
    $( ".texto-card" ).each(function( index ) {
      $( this ).text($(this).attr('data-fibo'));
    });
  }else{
    $( ".texto-card" ).each(function( index ) {
      $( this ).text($(this).attr('data-standard'));
    });
  }
}



var onShake = function () {
  // Fired when a shake is detected 
  alert("balançou.... kkkk");
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
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
    // Now safe to use device APIs
    shake.startWatch(onShake, 30);

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