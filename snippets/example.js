var Seq = require("biojs-vis-sequence");
var theSequence = '111111111122222222223333333333444444444455555555556666666666111111111122222222223333333333444444444455555555556666666666';
yourDiv.textContent = "";

window.onload = function() {

var mySequence = new Seq({
  sequence : theSequence,
  target : yourDiv.id,
  format : 'CODATA',
  formatOptions : {
    title:false,
    footer:false
  },
  id : 'P918283'
});

//mySequence.setSelection(1,4);
//mySequence.setSelection(2,4);

mySequence.addAnnotation({
  name:"track1",
  html:"<br> Example of <b>HTML</b>",
  color:"green",
  regions: [
  {start: 2, end: 2},
  {start: 20, end: 30},
  {start: 31, end: 43},
    {start: 44, end: 44},
    {start: 50, end: 90}]
});

mySequence.addAnnotation({
  name:"track2",
  html:"<br> Example of <b>HTML</b>",
  color:"green",
  regions: [
  {start: 7, end: 40},
  {start: 45, end: 45},
  {start: 47, end: 48},
    {start: 49, end: 55},
    {start: 80, end: 91}]
});

//mySequence.setSequence("P");

mySequence.addHighlight( { "start": 1, "end": 15, "color": "white", "background": "red", "id": "aaa" } );
mySequence.addHighlight( { "start": 7, "end": 21, "color": "white", "background": "green", "id": "bbb" } );
mySequence.addHighlight( { "start": 12, "end": 26, "color": "white", "background": "blue", "id": "ccc" } );

//@biojs-instance=mySequence

mySequence.onAll(function(name,data){
  console.log(arguments);
});
};
