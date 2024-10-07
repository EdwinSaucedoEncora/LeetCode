function distinctDifferenceArray(nums: number[]): number[] {
    const size = nums.length;
    const distinct = new Set();
    const sufix = new Array(size).fill(0);
    const result = [];
    const setSufix = new Set();
    for(let i = size - 1; i >=0; i--){
        setSufix.add(nums[i]);
        sufix[i] = setSufix.size;
    }

    for(let i = 0; i < size; i ++){
        distinct.add(nums[i]);
        const prefCount = distinct.size;
        const sufCount = i + 1 < size ? sufix[i + 1] : 0;
        result[i] = prefCount - sufCount;
    }
    return result;
};