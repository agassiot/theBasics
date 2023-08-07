var spamThomas = (function Module(target){
    var publicAPI = {pester, };

    var privateProperty = {private : 'hidden'}
    console.log(privateProperty)
    console.log(spamThomas,privateProperty)
     function pester(msg){
        console.log(target,msg)
    }
return publicAPI;
})('T$');

spamThomas.pester('Buy my Books!');

console.log(privateProperty)
    console.log(spamThomas,privateProperty)

