const {reverseSentence} = require('./reverse');

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// at bit of magic to pull out first parameter
const sentence =  argv._[0] ? argv._[0] : "This is the default sentence"

const reverseString = argv.word ? true : false
const reverseLetters = argv.letter ?  true : false

console.log(reverseSentence(sentence, reverseString, reverseLetters))

