var removeButtons = document.getElementsByClassName("btn btn-danger"); 
var timeInterval;
var tableRows;

//Timer Variables
var secondsCount;
var timerInterval;
var randomTime;

function addRow (){
   //console.log(tableRows);
   //rows.push();
   //for (i =){
//
   //};
    alert("Adding A Last Row!");
};


for(var i = 0; i < removeButtons.length; i++) {           //Adding functionality to each button
  removeButtons[i].addEventListener("click", removeRow);
}


function removeRow () {
 //
 alert("Removing This Row NOW!");
 this.parentNode.parentNode.remove();
};


function removeFirstRow() {
  //for (var i = 0; .length; i++) {
   //
  //};
  alert("Removing First Row Randomly!");
 
 //Need Timer

};

document.getElementsByClassName("tablerow")[0].addEventListener("click", addRow);


document.getElementsByClassName("remove1")[0].addEventListener("click", removeRow);
document.getElementsByClassName("removeRandom")[0].addEventListener("click", removeFirstRow);