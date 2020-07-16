//Objective is to design a class where we add numbers and keep track of the median
//as numbers continuously come in.

class Median {
    constructor() {
        this.arr = []
    }

    addNum(num) {
        //We use a binary search here to find the index (low) to put the
        //new num in
        let low = 0
        let high = this.arr.length - 1

        while (low <= high) {
            let mid = Math.floor((low + high) / 2)

            if (num > this.arr[mid]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }

        this.arr.splice(low, 0, num)
    }

    findMedian() {
        if (this.arr.length % 2 == 0) {
            let mid = this.arr.length / 2
            return (this.arr[mid] + this.arr[mid - 1]) / 2
        } else {
            let mid = Math.floor(this.arr.length / 2)
            return this.arr[mid]
        }
    }
}

let a = new Median()
a.addNum(1)
a.addNum(2)
a.findMedian()
