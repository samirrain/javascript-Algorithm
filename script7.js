// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function  longestCommonPrefix(strs) {
    // If the array is empty, return an empty string
    if (strs.length === 0) return "";

    // Start with the first string in the array as the initial prefix
    let prefix = strs[0];

    // Loop through each string in the array starting from the second string
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix becomes empty, return an empty string
            if (prefix === "") return "";
        }
    }

    // Return the longest common prefix
    return prefix;
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
