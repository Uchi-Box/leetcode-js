// 5 => 1,2
// 6 => 1,2,3
// 10 => 1,2,3,4
// 11 => 1,2,3,4

var arrangeCoins = function (n) {
  let left = 1
  let right = n

  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left
    if (mid * (mid + 1) <= 2 * n) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}