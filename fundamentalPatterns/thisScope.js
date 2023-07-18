var mathClass = {
    teacher: "Dane",
     ask(question){
        console.log(this.teacher,question)
    }
}

function methodFromMathClass() {
    var scienceClass = {
        teacher: 'Andrew'};

    mathClass.ask.call(scienceClass,"is Dane still 'this'?");
}

methodFromMathClass();
mathClass.ask(`am I ${this.teacher}`);

{
    let derBiologieun  = {
        teacher: "Adof Hitman"};
    var boundthis = mathClass.ask.bind(derBiologieun);

boundthis(`are you ${this.teacher}?`);
boundthis(`are you ${this}?`);
boundthis(`are you ${derBiologieun.teacher}?`);
}


if (!y){console.log ('i never declared y')};
boundthis("am I real?");
console.log(mathClass);

