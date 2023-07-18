var spamGrant = (function Module(target){
    var publicAPI = {pester, };

    var privateProperty = {private : 'hidden'}
    console.log(privateProperty)
    console.log(spamGrant,privateProperty)
     function pester(msg){
        console.log(target,msg)
    }
return publicAPI;
})('Grant');

spamGrant.pester('Buy my Books!');

console.log(privateProperty)
    console.log(spamGrant,privateProperty)

