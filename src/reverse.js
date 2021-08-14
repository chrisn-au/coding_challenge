const SPACE = " "
const NO_SPACE = ""

const reverseSentence = (sentence, reverseWords, reverseLetters) => {
  if (typeof(sentence) != "string") return sentence
  if (typeof(reverseWords) != "boolean") reverseWords = false
  if (typeof(reverseLetters) != "boolean") reverseLetters = false

  if (reverseWords) 
        sentence = reverseWordsOrder(sentence)

  if (reverseLetters)
        sentence = reverseLettersOrder(sentence)   
  
  return sentence;
}


function reverseWordsOrder(sentence) {
    return reverseString(sentence, SPACE)
}

function reverseLettersOrder(sentence) {
  //split sentence into array of words
  let words = sentence.split(SPACE)
  for (let i = 0; i < words.length; i++){
    words[i] = reverseString(words[i], NO_SPACE)
  }
  return words.join(SPACE)
}

function reverseString(rev, seperator){
     // split string into array based on sperator
     // use JS reverse() function to reverse the array  
     return  rev.split(seperator).reverse().join(seperator)
}

module.exports =
  { reverseSentence };

