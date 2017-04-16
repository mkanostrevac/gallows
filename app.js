var words = ['javascript', 'css', 'html', 'java', 'python', 'matlab'];
var index = getRandomInt(0, words.length);

var gallowWord = words[index];
var currentGallowState = createEmptyWord(gallowWord.length);
var chanses = 5;

var gallowWordDOM = document.getElementById("gallow-word");
gallowWordDOM.innerText = currentGallowState;

var tryButton = document.getElementById("try-button");
var inputField = document.getElementById("input-field");
var leftChances = document.getElementById("left-chances");

function isWin(word) {

  for (var i = 0; i < word.length; i++) {
    if (word[i] === "_") {
      return false;
    }
  }
  return true;
}

function disable() {
  tryButton.disabled = true;
  inputField.disabled = true;
}

function createEmptyWord(count) {
  var char = "_";

  var retVal = "";
  for (var i = 0; i < count; i++) {
    retVal += char;
  }
  return retVal;
}

tryButton.addEventListener("click", function() {

  var char = inputField.value;
  inputField.value = "";
  var isExist = false;

  for (var i = 0; i < gallowWord.length; i++) {

    if (gallowWord[i] === char) {

      currentGallowState = currentGallowState.replaceAt(i, char);
      isExist = true;
    }
  }

  gallowWordDOM.innerText = currentGallowState;

  if (isWin(currentGallowState)) {
    leftChances.innerText = "WIN!";
    disable();
    return;
  }

  if (!isExist) {
    chanses = chanses - 1;
    leftChances.innerText = chanses;

    if (chanses === 0) {
      leftChances.innerText = "GAME OVER!";
      disable();
    }
  }
});

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}