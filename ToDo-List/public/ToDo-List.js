s/*this will color all the lis in alternating colors*/
function colorlis () {
  var lis = $("li");

  for(let i = 0, length1 = lis.length; i < length1; i++){
	if (i % 2 == 0) {
	  lis[i].style.background = "#eeeeee";
	}
	else {
	  lis[i].style.background = "#e0e0e0";
	}
  }
}
//--------------------------------------------------------------
colorlis();

//event listener for trash
$("span").on('click', function(event) {
 
});

//event listener for plus
$("h1 i").on('click', function(event) {
  
});

//event listener for li
$("li").on('click', function(event) {
  $(this).toggleClass('toggleLine-through');;
});
