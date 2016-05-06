const PI = 3.14;
let a = 1;
console.log('1:', a);

(function(){
    let a = 2;
    console.log('1:', a);
    
    {
        let a = 3;
        console.log('1:', a);
    }
})();

{
    let a = 4;
    console.log('1:', a);
}

let fns = [];

{
    
    for(let a = 5; a < 10; a++){
        fns.push(() => a);
    }
}

for(let f of fns){
    console.log('f:', f.call());
}
