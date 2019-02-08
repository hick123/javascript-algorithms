//todo: 1. Reverse a String With Built - In Functions

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    console.log('Using method 1 ==',joinArray);
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");
//todo 2. Reverse a String With a Decrementing For Loop
function reverseString1(str1){
     // Step 1. Create an empty string that will host the new created string
    var newString="";
    //Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i=str1.length-1 ; i>=0; i--){
        newString += str1[i];// or newString=newString + str[i]
    }
    console.log('Using method 2 ==', newString);
    return newString;//olleh
}
reverseString1("hellotwo");

//todo: 3. Reverse a String With Recursion

function reverseString2(str2){
    if (str2 == "") // This is the terminal case that will end the recursion
       return "";
    else
        console.log(str2)
        return reverseString2(str2.substr(1))+ str2.charAt(0);       
}
reverseString2("helloThree")
