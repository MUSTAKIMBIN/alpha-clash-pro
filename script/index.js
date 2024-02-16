function handelKeyboardkeyUpEvent(e) {
  let playerPressed = e.key;
  const currentAlphabetElement = document.getElementById("current-alphabets");
  const currentAlphabet = currentAlphabetElement.innerText;
  const targetAlphabet = currentAlphabet.toLocaleLowerCase();
  

  if (playerPressed === targetAlphabet){
    removeBackgroundColorById(targetAlphabet)
    continueGame()
  }else{
    console.log(" YOu missed you lost a life")
  }
}
document.addEventListener("keyup", handelKeyboardkeyUpEvent);

function continueGame() {
  const alphabetM = getARandomeAlphabets();
  const currentAlphabets = document.getElementById("current-alphabets");
  currentAlphabets.innerText = alphabetM;
  setBackgroundColorById(alphabetM);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
