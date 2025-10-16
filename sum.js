var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    // If no valid pair is found, return an empty array
    return [];
};
console.log(twoSum([2, 7, 11, 15], 18));

let big = 123456789012345678901234567890n;
console.log(typeof big, big);