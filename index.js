
//Detecting Button Press

var numberOfLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
          var tom1Audio = new Audio("sounds/tom-1.mp3");
          tom1Audio.play();
          break;
  
        case "a":
          var tom2Audio = new Audio("sounds/tom-2.mp3");
          tom2Audio.play();
          break;
  
        case "s":
          var tom3Audio = new Audio("sounds/tom-3.mp3");
          tom3Audio.play();
          break;
  
        case "d":
          var tom4Audio = new Audio("sounds/tom-4.mp3");
          tom4Audio.play();
          break;
  
        case "j":
          var snareAudio = new Audio("sounds/snare.mp3");
          snareAudio.play();
          break;
  
        case "k":
          var crashAudio = new Audio("sounds/crash.mp3");
          crashAudio.play();
          break;
  
        case "l":
          var kickBassAudio = new Audio("sounds/kick-bass.mp3");
          kickBassAudio.play();
          break;
  
        default:
          console.log(buttonInnerHTML);
    }
}

// For animation

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}