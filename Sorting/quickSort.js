const swap = (a)=>(b)=>a; //not the way you should do this, but I think it's fun that you can ;-)

const log = (f)=>(x)=>{
    console.log(`\n testing ${f.name} against: `, x); 
    console.log(`\n \t output:`, f(x, 0, x.length-1));
}
///////////////////////////////////////////////////////////////////////////////////////////////


function qs(arr, lo, hi) {
    if(lo >= hi) return;

    const pivotI = split(arr, lo, hi);
    qs(arr, lo, pivotI-1);
    qs(arr, pivotI+1, hi);
    return arr;
}

function split(arr, lo, hi) {
    let pivot = arr[hi],
        i = lo - 1;

    for(let k = lo; k < hi; ++k) {
        if(arr[k] <= pivot) {
            i++;
            arr[i] = swap(arr[k])(arr[k]=arr[i]);
        }
    }
    i++;
    arr[hi] = arr[i];
    arr[i] = pivot;
    return i;
}


const test = [ 178, 294, 261, 298, 156, 254,  32, 101, 31, 217,
               205, 151, 274,  54, 193,  61, 267, 254, 202, 193,
               158, 367, 324, 352, 187, 193,  40, 124, 24, 239,
               254, 178, 342,  59, 241,  50, 329, 193, 248, 241,
               209, 472, 486, 464, 230, 161,  60,  66, 20, 152 ];
const test2 = test.map(x=>x>>1);
const test3 = test.map(x=>(x%17)*13);

const testQS = log(qs);
testQS(test);
testQS(test2);
testQS(test3);

