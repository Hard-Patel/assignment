/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const splitted = str2.toLowerCase().split('');
    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        const index = splitted.indexOf(element.toLowerCase());
        if (index > -1) {
            splitted.splice(index, 1)
        }
    }
    return splitted.length == 0 ? true : false;
}

module.exports = isAnagram;