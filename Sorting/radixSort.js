function getRandomArray(size, maxVal) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * maxVal));
}

// "flatten" buckets via concatenation
function radixSortWithConcat(arr) {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10,
        l = arr.length;

    while (divisor < maxNum) {
        let buckets = Array.from({length: 10}, ()=>[]);
        for (let i=0; i<l; i++) {
            buckets[Math.floor((arr[i] % divisor) / (divisor / 10))].push(arr[i]);
        }

        arr = [].concat.apply([], buckets);
        divisor *= 10;
    }

    return arr;
}

//flatten buckets with map
function radixSortWithFlatMap(arr) {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;

    while (divisor < maxNum) {
        let buckets = [...Array(10)].map(() => []);
        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        arr = buckets.flatMap(bucket => bucket);
        divisor *= 10;
    }

    return arr;
}

//quick perf comparison

const { performance } = require('perf_hooks');

let testArray = getRandomArray(100000, 500000);

let t0 = performance.now();
radixSortWithConcat(testArray);
let t1 = performance.now();
console.log(`Time for radixSortWithConcat: ${t1 - t0} ms`);

testArray = getRandomArray(100000, 500000); // reset the array

t0 = performance.now();
radixSortWithFlatMap(testArray);
t1 = performance.now();
console.log(`Time for radixSortWithFlatMap: ${t1 - t0} ms`);

