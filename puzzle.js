var x=3;
var y=3;

window.addEventListener("load", function() {
  var matches=document.querySelectorAll("td");
// cell=matches[0]
// cell.innerText=1

// for (i=0; i<15; i++) {
//   var cell = matches[i];
//   cell.innerText=i+1;
// }

  for (i=0; i<=3; i++) {
    for(j=0; j<=3; j++){
      var rows=document.querySelectorAll("tr");
      var row=rows[i];
      var cells=row.querySelectorAll("td");
      var cell = cells[j];
      var number = 4*i+j+1;
      if (number<16){
        cell.innerText=4*i+j+1;
      }
    }
  }
});

window.addEventListener("keydown", function(event){
 console.log(event);
 if (event.keyIdentifier=="Up") {
  y-=1;
  if(y<0) {y=0}

}
else if (event.keyIdentifier=="Down") {
  y+=1;
  if(y>3) {y=3}
}
else if (event.keyIdentifier=="Left") {
  x-=1
  if(x<0) {x=0}
}
else if (event.keyIdentifier=="Right") {
  x+=1
  if(x>3) {x=3}
}

console.log("x: "+x+", y: " +y )


})

