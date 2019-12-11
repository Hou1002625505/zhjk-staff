(function() {
  
  if( window.innerWidth>640){
    var w = 640/7.5; 
  }else{
    var w = window.innerWidth / 7.5; 
  }
  document.documentElement.style.fontSize= w+"px";
window.addEventListener("resize", function () { 
  if (window.innerWidth > 640) {
    var w = 640 / 7.5;
  } else {
    var w = window.innerWidth / 7.5;
  }

   document.documentElement.style.fontSize= w+"px"; 
});
})(document, window);