//First Tip, print objects to identify it by printing into an object
let foo = {ice: true, eat: "burguer", drink: "soda"}
let aff = {ice: false, eat: "tacos", drink: "wather"}
let lol = {ice: true, eat: "burritos", drink: "orange juice"}
console.log({foo,aff,lol})
//Second tip, CSS styling...
console.log('%c MY FRIENDS','color: orange; font-weight: bold')
//third, display objects as a table
console.table([foo,aff,lol])
//four, set the time...

console.time('looper')
let i = 0;
while(i < 10000){
    i++
}

console.timeEnd('looper')
//fifth, search a trace, stack trace logs
const deleteMe = ()=>{ console.trace('bye bye database')}

deleteMe()

deleteMe()