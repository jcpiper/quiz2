// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').click(function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!")
})(jQuery);


// change ol text
var list = document.getElementById("oList");
var items = list.getElementsByTagName("li");
for( var i = 0; i < items.length; i++) {
  items[i].innerHTML = "I got changed!";
  items[i].style = "color:red;";
}

// fade out body function
function fade() {
  var bod = document.getElementsByTagName("body");
  bod[0].style = "opacity:.1;";
  bod[0].innerHTML="Goodbye, pal! Hope you come back soon!";
  bod[0].style = "opacity:1;";
  console.log("Something happened?")
}

// Accordion code

var acrdn = document.getElementsByClassName("accordion");

for( var i=0; i<acrdn.length; i++) {
  acrdn[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("active");
  })
}
// thanks to w3schools for accordion tutorial

// my function(s)
var sec = document.getElementById("mainSection");
var orig = sec.nextElementSibling.innerHTML;
sec.addEventListener("mouseover", function(){
  this.nextElementSibling.innerHTML= "Woah! Watch where you're swinging that thing!";
})

sec.addEventListener("mouseout", function(){
  this.nextElementSibling.innerHTML= orig;
})