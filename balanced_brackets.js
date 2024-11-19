const Stack = require('./stack');

function balancedBrackets(str) {
    let stack = new Stack();
    const match = {'{': '}', '(': ')', '[': ']'};
    for (lett of str) {
        if ('{(['.includes(lett)) {
            stack.push(lett);
        }
        if ('])}'.includes(lett)) {
            const lastBracket = stack.pop();
            if (match[lastBracket] !== lett) return false;
        }
    }
    return stack.size === 0 ? true : false;
}

console.log(balancedBrackets('hello'));
console.log(balancedBrackets('(hi) [there]'));
console.log(balancedBrackets('(hi [there])'));
console.log(balancedBrackets('(((hi)))'));
console.log(balancedBrackets('(hello'));
console.log(balancedBrackets('(nope]'));
console.log(balancedBrackets('((ok) [nope)]'));
