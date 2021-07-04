// Problem Statement:
// Sort an array of 0’s 1’s 2’s without using extra space or sorting algo 

//Solution 1: Brute force would be simply sort the array.
    //Time Complexity: O(n log n)
    //Space Complexity: O(1)

// Solution 2: using extra space
function countingSort(arr){
    var zero = [];
    var one = [];
    var two = [];
    var res = [];
    for(var i=0; i<=arr.length; i++){
        if(arr[i] === 0){
            zero.push(arr[i]);
        }else if(arr[i] === 1){
            one.push(arr[i]);
        }else{
            two.push(arr[i]);
        }
    }
    for(var j=0; j<zero.length; j++){
        res.push(zero[j]);
    }
    for(var k=0; k<one.length; k++){
        res.push(one[k]);
    }
    for(var l=0; l<two.length-1; l++){
        res.push(two[l]);
    }

    return res;
}

countingSort([0,2,2,1,1,0,2,0,1,1,0]);



//Solution 3: Using Dutch National Flag Algorithm 
//(we will be using 3 pointers to solve this problem - low, mid and high pointer).
    //Time Complexity: O(n)
    //Space Complexity: O(1)

function sortUsingDNFA(arr){
    var low = 0;
    var mid = 0;
    var high = arr.length-1;
    var temp = 0;

    while(mid <= high){
        if(arr[mid] === 0){
            //swap arr[mid], arr[low] 
            temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }else if(arr[mid] === 1){
            mid++;
        }else{
            //swap arr[mid], arr[high]
            temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;
            high--;
        }
    }
    console.log(res);
    return arr;
}