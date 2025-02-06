/**Given an array nums of distinct positive integers, return the number of tuples (a, b, c, d) 
 * such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d. 
 * ----------
 * Approach of Hash Map:
 * Use a Map to Store Products:
1. Iterate through all possible pairs (a, b) and calculate a * b.
Store these products as keys in a map, with their corresponding pairs as values.
Count Valid Tuples:

2. If multiple pairs have the same product, we can form tuples (a, b, c, d) from them.
Calculate Number of Tuples Efficiently:

3. If a product appears count times in the map, the number of valid tuples is count * (count - 1) / 2 (choosing 2 pairs from count).
Each tuple (a, b, c, d) can be rearranged in 8 ways, so multiply the count by 8.
----------
Getting the formula:
We are selecting 2 pairs out of freq possible pairs.
This is a combination problem:

Ways to choose 2 items from freq
=
(freq
2)=freq×(freq−1)/2

This formula comes from the combination formula:
(𝑛
𝑟)=𝑛!/𝑟!(𝑛−𝑟)!
 
For r = 2, it simplifies to:
𝑛!/2!(𝑛−2)!=𝑛(𝑛−1)/2
where:
n = freq (total number of available pairs),r = 2 (we choose 2 pairs at a time).

 **/

function tupleSameProduct(nums) {
    let productMap = new Map();
    let n = nums.length;
    let count = 0;

    // Step 1: Store product pairs in a Map
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];

            if (productMap.has(product)) {
                productMap.set(product, productMap.get(product) + 1);
            } else {
                productMap.set(product, 1);
            }
        }
    }

    // Step 2: Count valid tuples
    for (let freq of productMap.values()) {
        if (freq > 1) {
            count += (freq * (freq - 1)) / 2 * 8;
        }
    }

    return count;
}

//Brute Force

// var tupleSameProduct = function(nums) {
//     let n=nums.length
//     let count=0;

//     for(i=0;i<n;i++){
//         for(j=i+1;j<n;j++){
//             for(k=0;k<n;k++){
//                 for(l=k+1;l<n;l++){
//                     if(i!==k && i!==j && j!==k && j!==l){
//                         if(nums[i]*nums[j]===nums[k]*nums[l]){
//                             count=count+1;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return count*4;
    
// };
