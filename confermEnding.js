
// Check if a string(first argument, str) 
//ends with the given target string(second argument, target).

//? Approach #1: Confirm the Ending of a String With Built-In Functions — with substr()

function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
        console.log('true')
    } else {
        console.log("false");
    }
}
confirmEnding('Bastian', 'n');

//? Approach #2: Confirm the Ending of a String With Built-In Functions — with endsWith()

// function confirmEnding(string, target) {
    // We return the method with the target as a parameter
    // The result will be a boolean (true/false)
    // return string.endsWith(target); // 'Bastian'.endsWith('n')
// }
// confirmEnding('Bastian', 'n');