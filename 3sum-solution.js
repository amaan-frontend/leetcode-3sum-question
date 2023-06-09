/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    let result = [];
    const n = nums.length;
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate values for i
        if (i > 0 && nums[i] === nums[i - 1])
            continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for left and right
                while (left < right && nums[left] === nums[left + 1])
                    left++;
                while (left < right && nums[right] === nums[right - 1])
                    right--;

                // Move to the next unique pair
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;


};