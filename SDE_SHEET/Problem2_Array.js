// Find the repeating and the missing | Added 3 new methods
// Difficulty Level : Medium
// Last Updated : 08 Apr, 2021
// Geek-O-Lympics
// Given an unsorted array of size n. Array elements are in the range from 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Examples: 

// Input: arr[] = {3, 1, 3}
// Output: Missing = 2, Repeating = 3
// Explanation: In the array, 
// 2 is missing and 3 occurs twice 

// Input: arr[] = {4, 3, 6, 2, 1, 1}
// Output: Missing = 5, Repeating = 1


//Solution 1: Brute force would be simply Sort the input array.
            // Traverse the array and check for missing and repeating.
                    //Time Complexity: O(n log n)
                    //Space Complexity: O(1)


//Solution 2: By Using count array like below
    //Time Complexity: O(2N)  i.e --> O(N)
    //Space Complexity: O(N)
function findMissingRepeating(arr){
    // var newArr = new Array(arr.length + 1);

    //initialize temp array with 0 of size n
    var newArr = new Array(arr.length + 1).fill(0);//

    for(var i=0; i<arr.length; i++){ 
        if(newArr[arr[i]] == 0) newArr[arr[i]] = 1;
        else console.log('repeating Number is: ', newArr[arr[i]]);
    }

    for(var j=1; j<newArr.length; j++){
        if(newArr[j] === 0) console.log('missing Number is: ', j);
    }
}

findMissingRepeating([4, 3, 6, 2, 1, 1])