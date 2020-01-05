var oneObject = document.getElementById("oneId");
var twoObject = document.getElementById("twoId");
var thrObject = document.getElementById("thrId");
var fouObject = document.getElementById("fouId");
var fivObject = document.getElementById("fivId");
var sixObject = document.getElementById("sixId");

var oneCounter = 0;
var twoCounter = 0;
var thrCounter = 0;
var fouCounter = 0;
var fivCounter = 0;
var sixCounter = 0;

oneObject.addEventListener("click", function(){
  if (oneCounter === 0) {
    oneObject.classList.remove("oneHover");
    oneCounter = 1;
  } else if (oneCounter === 1) {
    oneObject.classList.add("oneHover");
    oneCounter = 0;
  }
});

twoObject.addEventListener("click", function(){
  if (twoCounter === 0) {
    twoObject.classList.remove("twoHover");
    twoCounter = 1;
  } else if (twoCounter === 1) {
    twoObject.classList.add("twoHover");
    twoCounter = 0;
  }
});

thrObject.addEventListener("click", function(){
  if (thrCounter === 0) {
    thrObject.classList.remove("thrHover");
    thrCounter = 1;
  } else if (thrCounter === 1) {
    thrObject.classList.add("thrHover");
    thrCounter = 0;
  }
});

fouObject.addEventListener("click", function(){
  if (fouCounter === 0) {
    fouObject.classList.remove("fouHover");
    fouCounter = 1;
  } else if (fouCounter === 1) {
    fouObject.classList.add("fouHover");
    fouCounter = 0;
  }
});

fivObject.addEventListener("click", function(){
  if (fivCounter === 0) {
    fivObject.classList.remove("fivHover");
    fivCounter = 1;
  } else if (fivCounter === 1) {
    fivObject.classList.add("fivHover");
    fivCounter = 0;
  }
});

sixObject.addEventListener("click", function(){
  if (sixCounter === 0) {
    sixObject.classList.remove("sixHover");
    sixCounter = 1;
  } else if (sixCounter === 1) {
    sixObject.classList.add("sixHover");
    sixCounter = 0;
  }
});

// testObject.addEventListener("click", function(){
//   if (clickCounter === 0) {
//     testObject.classList.add("oneHover");
//     clickCounter = 1;
//   }
// });
//
// testObject.addEventListener("mouseout", function(){
//   if (clickCounter === 1) {
//     testObject.classList.add("oneHover");
//     clickCounter = 0;
//   }
// });
