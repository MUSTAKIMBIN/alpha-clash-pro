function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setBackgroundColorById(elementId){
  const element =document.getElementById(elementId)
  element.classList.add("bg-orange-500")
}
function removeBackgroundColorById(elementId){
  const element =document.getElementById(elementId)
  element.classList.remove("bg-orange-500")
}
function getARandomeAlphabets() {
  const alphabetsStr = "abcdefghijklmnopqrstuvwxyz".split("");
  const randome = Math.random() * 25;
  const index = Math.round(randome)
  const alphabet = alphabetsStr[index]
  return alphabet;
}
