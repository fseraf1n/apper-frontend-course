function transform(nums) {
    const output = []
    for (let num of nums) {
        num = num * num
        output.push(num)
    }
    output.sort((a, b) => (a - b))
    return output
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]