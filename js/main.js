// Parallax
window.addEventListener("load", function(){
  var container = document.
querySelector("[data-parallax]");
  var childNodes = container.children;
  for(var n=0; n<childNodes.length; n++){
     childNodes[n].setAttribute("data-index", n+1);
  }
  container.addEventListener("mousemove",
 function(e){
   var elms = this.children;
   for(var c=0; c<elms.length; c++){
      var motion = parseInt(elms[c].
getAttribute("data-index"))/10;
      var x = ((e.clientX)*motion)+"px";
      var y = ((e.clientY)*motion)+"px"; elms[c].style.backgroundPosition = x +
" " + y;
   }
});
});
// Parallax End

// Navbar scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     document.getElementById("header").style.backgroundColor = "#fff";
     document.getElementById("header").style.border = "none";
     document.getElementById("header").style.boxShadow = "0 0 5px #aaaaaa";
   } else {
     document.getElementById("header").style.backgroundColor = "#f1f4f7";
     document.getElementById("header").style.borderBottom = "1px solid #ddd";
     document.getElementById("header").style.boxShadow = "none";
   }
 }
//  Navbar scroll End

// Mobile navigation button
function myFunction() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// Mobile navigation button End

// Slide-in
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
// Slide-in End