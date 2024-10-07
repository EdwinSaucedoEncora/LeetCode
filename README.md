# LeetCode
## Week 4
### Apprentice Technical Log Doc
#### Find The Distinct Difference Array
#### Overview
The problem involves that given an array(n) we should find another array with the difference of the sufix and prefix array that can be make with the different numbers of the suffix array each index and substracting different number in the prefix.
#### Context
We should know that a particular way to do this is getting the sufix and prefix arrays with only numbers that are different using a Set.

And the last part is using operation about the count. 
#### Solution
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

#### Alternative Solutions

As an alternative solution, if we are using an programming language that provides set operations or making from scratch a set data structure, we could use substract operation on a Set to obtain the same result.

### Weekly Essay
As a task for this week, we have to do a Team, I joined Michell Team to do four exercises on Leet Code. This activity gives me a different perspective on how you can do
Teamwork, because is not just meet some day and make it all at once, we need to keep searching about different solutions and ensuring everything works well. I am staisfied about the Teamwork and this gave me learning about different programming languages and my opportunity areas. Working on a team is simple but also hard because involves soft skills like leadership, time management, own initiative. And as a hard skill, working on this activity I have found that I am not very prepared on Java language, so I need to take my notes and keep learning to stay more focus on my career, and as a mention Michell has great skills about analyzing algorithms, I was really
impressed about how people can understand their code just reading on the lines. 

When I was working I found a little hard to implement a solution was I solved on another language so I need to read the docs of that technology.

As a personal growing, I think I could make an effective work if I am more prepared for the coming problems, so one of the things I need to do is to review documentation and make research about the alogithm analysis, and also to make challenges on Java language because I am used to Typescript and I need to enlarge my knowledge.