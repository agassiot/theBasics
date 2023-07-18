const I = (x)=> x;
console.log(`\n Identity of Identity: I(I)=> `, I(I));

const M = (f)=> f(f);
console.log(`\n Self-application of Identity: M(I)=> `, M(I));

const K = (a)=>(b)=> a;
console.log(`\n The 'const' function: K(5)('anything')=> `, K(5)('anything'))

const KI = K(I); // KI = (a)=>(b)=>b
console.log(`\n Our first new function, derived from the base functions: 
            \n \t KI = K(I) = (a)=>(b)=>b \n \t KI(true)(false)=>`, KI(true)(false));


const True = K;
const False = KI;
