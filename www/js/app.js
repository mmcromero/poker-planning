  // Initialize collapse button
  $(".button-collapse").sideNav();

  $("a").on("click",function(){

    if(!$("#flip-toggle").hasClass("hover")){
        $(".texto-card-big").text($(this).text());
    }
    
    $(".flip-container").toggleClass("hover");
    $("#bt-voltar").toggleClass("hide");



  })

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
    alert("1");
	shake.startWatch(onShake, 30);
	alert("2");
}