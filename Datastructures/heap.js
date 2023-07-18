class MinHeap {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value) {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    yank() {
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.data.pop();
        this.heapifyDown(0);
        return out;
    }

    peek() { 
        return this.length === 0 ? undefined : this.data[0];
    }

    heapifyDown(i) {
        const iLeft = this.left(i);
        const iRight = this.right(i);

        if(iLeft >= this.length || i >= this.length) return;    //---bounds check

        const v = this.data[i];
        const lVal = this.data[iLeft];
        const rVal = this.data[iRight];

        if (rVal < lVal && rVal < v) { 
            this.data[i] = rVal;
            this.data[iRight] = v;
            this.heapifyDown(iRight);
        } else if (lVal < rVal && lVal < v) { 
            this.data[i] = lVal;
            this.data[iLeft] = v;
            this.heapifyDown(iLeft);
        }

    }

    heapifyUp(i) {
        if (i === 0) return;
        const p = this.parent(i);
        const pVal = this.data[p];
        const v = this.data[i];

        if (pVal > v) {
            this.data[i] = pVal;
            this.data[p] = v;
            this.heapifyUp(p);
        }
    }

    parent(i) {
        return (i-1) >> 1; 
    }

    left(i) {
        return (i<<1) + 1; 
    }

    right(i) {
        return (i<<1) + 2; 
    }
}

// optional MaxHeap extension

 class MaxHeap extends MinHeap {
    heapifyDown(i) {
        const v = this.data[i];
        const iLeft = this.left(i);
        const iRight = this.right(i);

        if(iLeft >= this.length || i >= this.length) return;    //---bounds check

        const lVal = this.data[iLeft];
        const rVal = this.data[iRight];

        if (rVal >= lVal && rVal > v) { 
            this.data[i] = rVal;
            this.data[iRight] = v;
            this.heapifyDown(iRight);
        } else if (lVal > rVal && lVal > v) { 
            this.data[i] = lVal;
            this.data[iLeft] = v;
            this.heapifyDown(iLeft);
        }
    }

    heapifyUp(i) {
        if (i === 0) return;
        const p = this.parent(i);
        const pVal = this.data[p];
        const v = this.data[i];

        if (v > pVal) {
        this.data[i] = pVal;
        this.data[p] = v;
        this.heapifyUp(p);
        }
    }
}

let heap = new MinHeap();


heap.insert(10);
console.log(heap.data); // Should print: [10]

heap.insert(15);
console.log(heap.data); // Should print: [10, 15]

heap.insert(5);
console.log(heap.data); // Should print: [5, 15, 10]

console.log(heap.yank()); // Should print: 5
console.log(heap.data); // Should print: [10, 15]

console.log(heap.yank()); // Should print: 10
console.log(heap.data); // Should print: [15]

console.log(heap.yank()); // Should print: 15
console.log(heap.data); // Should print: []

let maxHeap = new MaxHeap();


maxHeap.insert(10);
console.log(maxHeap.data); // Should print: [10]

maxHeap.insert(15);
console.log(maxHeap.data); // Should print: [15, 10]

maxHeap.insert(5);
console.log(maxHeap.data); // Should print: [15, 10, 5]

console.log(maxHeap.yank()); // Should print: 15
console.log(maxHeap.data); // Should print: [10, 5]

console.log(maxHeap.yank()); // Should print: 10
console.log(maxHeap.data); // Should print: [5]

console.log(maxHeap.yank()); // Should print: 5
console.log(maxHeap.data); // Should print: []
