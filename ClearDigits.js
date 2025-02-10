/**You are given a string s.
Your task is to remove all digits by doing this operation repeatedly:
Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits. 

Approach:
1. Convert the string into array
2. initialize a new set
3. Traverse the array and check the index pf digit.
4. Travese and check if the i-1 character is non digit or not
5. If that character is already not inserted in the deletedIndiced set add the ith and jth character.
6. Filter the array based on the index removing all the deletedIndices and join
*/

var clearDigits = function (s) {
    let arr = s.split('');
    let deletedIndices = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (/[0-9]/.test(arr[i])) {
            for (j = i - 1; j >= 0; j--) {
                if (!/[0-9]/.test(arr[j]) && !deletedIndices.has(j)) {
                    deletedIndices.add(j);
                    deletedIndices.add(i); // Mark it for deletion
                    break;
                }
            }
        }
    }
    return arr.filter((_, index) => !deletedIndices.has(index)).join('');

};