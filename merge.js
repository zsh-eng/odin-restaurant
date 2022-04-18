let nums = []
for (let i = 0; i < 50000; i++) {
	nums.push(Math.floor(Math.random() * 100))
}

function mergeSort(nums) {
	// Takes 2 sorted arrays and merges them
	function merge(arr1, arr2) {
		let merged = []
		let length = arr1.length + arr2.length

		for (let i = 0; i < length; i++) {
			if (arr1.length == 0) {
				return merged.concat(arr2)
			} else if (arr2.length == 0) {
				return merged.concat(arr1)
			}

			if (arr1[0] < arr2[0]) {
				merged.push(arr1.shift())
			} else {
				merged.push(arr2.shift())
			}
		}
		return merged
	}

	let length = nums.length
	if (length === 1) {
		return nums
	} else {
		let halfway = Math.floor(length / 2)
		let arr1 = mergeSort(nums.slice(0, halfway))
		let arr2 = mergeSort(nums.slice(halfway))
		return merge(arr1, arr2)
	}
}

console.time()
console.log(mergeSort(nums))
console.timeEnd()
