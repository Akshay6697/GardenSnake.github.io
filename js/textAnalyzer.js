//Cache the DOM
const output = document.getElementById("output");
const input = document.getElementById("textarea");
const copyButton = document.getElementById("copyButton");

function textInfo() { //computes various info about the text input
    characterCounter.innerHTML = input.value.length;

    numberCounter.innerHTML = numberCount();
    vowelCounter.innerHTML = vowelCount();
    consonantCounter.innerHTML = consonantCount();
    wordCounter.innerHTML = wordCount();
    spaceCounter.innerHTML = spaceCount();
    copyButton.innerHTML = "Copy to Clipboard";
}

function copyOutput() {//copies the output to your clipboard
  output.select();
  try {
    document.execCommand("copy");
    copyButton.innerHTML = "Copied!";
  }
  catch(error) {
    console.log("Copy failed. Try copying manually.");
  }
}

function clearInput() {//clear the input box
  input.value = "";

  characterCounter.innerHTML = 0;
  numberCounter.innerHTML = 0;
  vowelCounter.innerHTML = 0;
  consonantCounter.innerHTML = 0;
  wordCounter.innerHTML = 0;
  spaceCounter.innerHTML = 0;
}

function numberCount() { //counts the total amount of numbers in text
    return input.value.replace(/\D/g, "").length;
}

function vowelCount() { // counts the number of vowels
    return input.value.match(/[aeiou]/gi || []).length;
}

function consonantCount() { // counts the number of consonants
    return input.value.match(/[bcdfghjklmnpqrstvxzwy]/gi || []).length;
}

function wordCount(){ //counts the number of words
    return input.value.split(" ").length;
}

function spaceCount() { //counts total amount of white space
    return (input.value.split(" ").length - 1);
}

//add functions that modify the input text below

function upperCase() { //capitalizes every letter
    output.value = input.value.toUpperCase();
}

function lowerCase() { // Changes all text to lowercase
    output.value = input.value.toLowerCase();
}

function reverseString() { //reverse string
    output.value = input.value.split("").reverse().join("");
}

function stretchString() { //reverse string
    output.value = input.value.split("").join(" ");
}

function pascalCase() { // Capitalize all first characters
    output.value = input.value.replace(/\s/g, ' ').split(' ').map(function(word) {
        if(word) {
            return word[0].toUpperCase() + word.slice(1)
        } else {
            return '';
        }
    }).join(' ');
}

function removeWhitespace() { //get rid of whitespace
    output.value = input.value.split(" ").join("");
}

function trimWhitespace() { //trim leading/trailing whitespace
    output.value = input.value.trim();
}



