document.addEventListener("DOMContentLoaded", function () {
    
    const submitBtn = document.getElementById("submission");

    submitBtn.addEventListener("click", function () {
        analyzeText();
    });
});


// -----------------------------------------------------------------------------------------------

function analyzeText() {
    const inputText = document.getElementById("wordBox").value;

    const wordCounts = document.getElementById("wordCount");
    const uniqueWordCounts = document.getElementById("uniqueWordCount");
    const longWordCounts = document.getElementById("longWordCount");
    const sentenceCounts = document.getElementById("sentenceCount");
    const numberCounts= document.getElementById("numberCount");
    const mostFrequentWords= document.getElementById("mostFrequentWord");

    wordCounts.textContent = `Words Count: ${wordCount(inputText)}`;
    uniqueWordCounts.textContent = `Unique Word Count: ${uniqueCount(inputText).length-1}`;
    longWordCounts.textContent = `Long Words Count: ${longWordCount(inputText)}`;
    sentenceCounts.textContent = `Sentences Count: ${sentenceCount(inputText)}`;
numberCounts.textContent = `Number Count: ${numberCount(inputText)}`;
    mostFrequentWords.textContent = `Most Frequent Word: ${mostFrequentWord(inputText)}`;

     wordCounts.style.color = "coral"; 
        uniqueWordCounts.style.color = "skyblue"; 
        longWordCounts.style.color = "orange"; 
        sentenceCounts.style.color = "coral";
        numberCounts.style.color = "skyblue"; 
    mostFrequentWords.style.color = "orange";
}


// -----------------------------------------------------------------------------------------------

function wordCount(words) {
    return words.split(" ").length;
}

// -----------------------------------------------------------------------------------------------

function uniqueCount(str) {

   
str = str.replace(/[0-9.,!-?]/g, '').toLowerCase();

  const words = str.split(/\s+/);
  const uniqueWords = [];

  for (let i = 0; i < words.length; i++) {
    let count = 1;

    for (let j = i + 1; j < words.length; j++) {
      if (words[i].trim() === words[j].trim()) {
        count++;
      }
    }

    if (count === 1) {
      uniqueWords.push(words[i]);
    }
  }

  return uniqueWords;
}


// ------------------------------------------------------------------------------------------------

function longWordCount(words) {
    const uniqueWords = uniqueCount(words);
    let count = 0;

    for (const word of uniqueWords) {
        if (word.length >= 5) {
            count++;

        }
    }
  

    return count;
}

// -----------------------------------------------------------------------------------------------


function sentenceCount(words) {
    return words.split(".").length - 1; }


// -----------------------------------------------------------------------------------------------

function numberCount(words) {
    words = words.replace(/[^0-9]/g, " ");
    words = words.trim();
    const arr = words.split(/\s+/); 

    return arr.length;
}

// -----------------------------------------------------------------------------------------------

function mostFrequentWord(words) {
  words = words.replace(/[^a-zA-Z ]/g, '').toLowerCase();
  let largest = 0;
  let pos = 0;

  const wordArr = words.split(/\s+/);
  const arr = new Array(wordArr.length).fill(0);

  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < wordArr.length; j++) {
      if (wordArr[i] === wordArr[j]) {
        arr[i]++;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
      pos = i;
    }
  }

  return wordArr[pos];
}














