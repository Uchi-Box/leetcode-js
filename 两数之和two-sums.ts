// nums: [1,2,3,4]
// target: 6
// result: [1, 3]
const twoSum = (nums: number[], target: number) => {
  const len = nums.length
  const map = new Map<number, number>() // key为nums的index，value为nums[index]组成的map

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    const diff = target - num

    if (map.has(diff)) {
      return [map.get(diff), i]
    }

    map.set(num, i)
  }
}