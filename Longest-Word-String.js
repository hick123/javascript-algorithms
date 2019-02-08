//todo 1. Find the Longest Word With a FOR Loop

function findLongestWord(str){
      // Step 1. Split the string into an array of strings
    let strSplit =str.split(' ');
    // let strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // let strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

      // Step 2. Initiate a letiable that will hold the length of the longest word
    let longestWord=0;
    //step 3. create FOR loop 
    for(let i=0; i < strSplit.length; i++){
        if (strSplit[i].length > longestWord) { // If strSplit[i].length is greater than the word it is compared with...
            longestWord = strSplit[i].length; // ...then longestWord takes this new value
        }
    }
    /* Here strSplit.length = 9
     For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
     1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
     2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
     3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
     4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
     5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
     6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
     7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
     8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
     9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
     10th iteration:       9             no               
     End of the FOR Loop*/

    //Step 4. Return the longest word
    console.log('using method 1 ==', longestWord);
    return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

//todo 2. Find the Longest Word With the sort() Method

function findLongestWord1 (str1){
      // Step 1. Split the string into an array of strings
    let strSplit1 = str1.split(' ');
    // let strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // let strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
     let longestWord1=  strSplit1.sort(function (a,b){
         return b.length -a.length;
     });
            /* Sorting process
    a           b            b.length     a.length     let longestWord
  "The"      "quick"            5            3         ["quick", "The"]
  "quick"    "brown"            5            5         ["quick", "brown", "The"]  
  "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
  "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
  "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
  "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
  "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
  "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
  */

       // Step 3. Return the length of the first element of the array

    console.log('using method 2 ==',longestWord1[0].length);

       return longestWord1[0].length;
}
findLongestWord1("The quick brown fox jumped over the lazy dog");

// 3. Find the Longest Word With the reduce() Method


function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    let strSplit = str.split(' ');
    // let strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // let strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Use the reduce method
    let longestWord = strSplit.reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");

    /* Reduce process
    currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   let longestWord
    "The"             ""                  3                     0                              yes                          "The"
    "quick"           "The"               5                     3                              yes                         "quick"
    "brown"           "quick"             5                     5                              no                          "quick"
    "fox"             "quick"             3                     5                              no                          "quick"
    "jumped"          "quick"             6                     5                              yes                         "jumped"
    "over"            "jumped"            4                     6                              no                          "jumped"
    "the"             "jumped"            3                     6                              no                          "jumped"
    "lazy"            "jumped"            4                     6                              no                          "jumped"
    "dog"             "jumped"            3                     6                              no                          "jumped"
    */

    // Step 3. Return the length of the longestWord
    return longestWord.length; // let longestWord = "jumped" 
    // longestWord.length => "jumped".length => 6
}

findLongestWord("The quick brown fox jumped over the lazy dog");