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
  let words = sentence.split(SPACE) //break the sentence in words using the " " as the delimiter
  for (let i = 0; i < words.length; i++){
    words[i] = reverseString(words[i], NO_SPACE)  // for each word reverse the characters
  }
  return words.join(SPACE)  //reassamble the array to a string
}

function reverseString(rev, seperator){
     // split string into array based on sperator
     // use JS reverse() function to reverse the array  
     return  rev.split(seperator)   //tokenise based on seperator
                .reverse()          //reverse the array using array native function
                .join(seperator)    //reassemble the array to a string
}

module.exports =
  { reverseSentence };

