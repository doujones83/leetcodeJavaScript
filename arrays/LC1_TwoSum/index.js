function twoSum(nums, target) {
  const previousvalues = {}  
  for(let i = 0; i < nums.length; i++){
  const currentNumber = nums[i]
  const neededvalue = target - currentNumber 
  const index2 = previousvalues[neededvalue]
  if(index2 != null){
      return [index2, i]
  } else {
      previousvalues[currentNumber] = i
  }
  }
}

module.exports = twoSum;
