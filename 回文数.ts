// 121 => 121 => true
// 123 => 321 => false
// -1 => 1- => false

const isPalindrome = (x: number): boolean => {
  if (x < 0) {
    return false
  }

  const s = x.toString()
  const len = s.length

  if (len === 1) return true

  // 双指针从头和尾开始查询，如果出现不相等则返回false
  for (let i = 0, j = len - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false
  }

  return true
}
