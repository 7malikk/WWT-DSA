/*
Given an integer array nums sorted in non-decreasing order,
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.
*/

// const nums = [1, 2, 3, 3, 3, 4, 5, 6, 6, 6];

// const removeDuplicate = (arr) => {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let k = i + 1; k <= arr.length - 1; k++) {
//       if (arr[i] == arr[k]) {
//         arr.splice(k, 1);
//       }
//     }
//     console.log(arr)
//     }
//   return arr;
// };

// console.log(removeDuplicate(nums));

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
 choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/



// day to buy? find the lowest value
// day to sell? find the highest value in the future
// maxval =0
const arr = [12, 56, 1, 26, 13, 34];

const getMaxProfit = (arr) => {
  let maxVal = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (maxVal < arr[j] - arr[i]) {
          maxVal = arr[j] - arr[i];
      }
    }
    }
    return maxVal
};

console.log(getMaxProfit(arr));