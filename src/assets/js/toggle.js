
// Add active class to the current button (highlight it)
function toggle(){
 var header=document.getElementById('cl')
 var btns=header.getElementsByClassName("btn1");
 console.log(btns)
 for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  console.log(this.className)
  });
  
  }

}


function toggle2(){
  var header=document.getElementById('cl2')
  var btns=header.getElementsByClassName("btn2");
  console.log(btns)
  for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active2");
   current[0].className = current[0].className.replace(" active2", "");
   this.className += " active2";
   console.log(this.className)
   });
   
   }
 
 }

 function toggle3(){
  var header=document.getElementById('cl3')
  var btns=header.getElementsByClassName("btn3");
  console.log(btns)
  for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName("active3");
   current[0].className = current[0].className.replace(" active3", "");
   this.className += " active3";
   console.log(this.className)
   });
   
   }
 
 }
 
