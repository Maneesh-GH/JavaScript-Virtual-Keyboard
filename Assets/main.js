/*
  Demonstration: JS Virtual Keyboard

  Written By: Maneesh Pandey
  Nickname: NamelessX
  Website: maneesh.dx.am
  Instagram: https://www.instagram.com/_maneesh_pandey
*/

let keys = [];
let keyboard = document.getElementById('keyboard');
let inputField = "";
var alphaCase = "capital";
changeCase();
function changeCase(){
  keyboard.innerHTML = "";
  if (alphaCase == "capital") {
    alphaCase = "small";
    keys = [
      [1,2,3,4,5,6,7,8,9,0],
      ["q","w","e","r","t","y","u","i","o","p"],
      ["a","s","d","f","g","h","j","k","l"],
      ["z","x","c","v","b","n","m"]
    ];
  }else{
    alphaCase = "capital";
    keys = [
      [1,2,3,4,5,6,7,8,9,0],
      ["Q","W","E","R","T","Y","U","I","O","P"],
      ["A","S","D","F","G","H","J","K","L"],
      ["Z","X","C","V","B","N","M"]
    ];
  }
  draw(keys);
}
function draw(){

  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < keys[i].length; j++) {
      let btn = document.createElement('button');
      let k = document.createTextNode(keys[i][j]);
      btn.value = keys[i][j];
      btn.onclick = function(){
        insert(btn.value);
      }
      btn.appendChild(k);
      keyboard.appendChild(btn);
    }
    let br = document.createElement('br');
    keyboard.appendChild(br);
  }
}

function isActive(input){
  inputField = input;
}

function insert(key){
  if (inputField != "") {
    var preValue = inputField.value;
    if (preValue == "") {
      inputField.value = key;
    }else {
      inputField.value = inputField.value + key;
    }
  }
}

function backSpace(){
  var preValue = inputField.value;
  inputField.value = preValue.substring(0,inputField.value.length - 1);
}


window.onload = function() {
  document.getElementById('cp').value = "JS Virtual Keyboard - Coded By Maneesh Pandey";
  console.log('%cThis site was created by Maneesh. You can contact him for more source codes or help.\n\nHe\'s also writing a JS Library for making work of developers easy. To get the library for free, contact Maneesh in instagram:\nhttps://www.instagram.com/_maneesh_pandey\nOr visit his website:\nhttp://maneesh.dx.am','color:green;font-size: 15px;');
}
