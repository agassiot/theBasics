//-------------------------------------synchronous thunk

function add(x,y) {
    return x+y;
}

var syncThunk = function(){
    return add(10,15);
};

syncThunk(); //returns 25
console.log(syncThunk());


//-------------------------------------asynchronous thunk

function asyncAdd(x,y,cb){
    setTimeout(function(){
        return cb(x+y);
    },1000);
}

var asyncThunk = function(cb){
    return asyncAdd(7,35,cb)
};

asyncThunk(function(sumXY){
    return console.log(sumXY); //42
});

console.log(Math.floor(Math.random() * 3));


