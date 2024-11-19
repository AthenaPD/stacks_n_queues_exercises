const Stack = require('./stack');

function reverseString(str) {
    let stack = new Stack();
    for (lett of str) {
        stack.push(lett);
    }

    let revStr = '';
    while (stack.size !== 0) {
        revStr += stack.pop();
    }

    return revStr;
}

console.log(reverseString('Hello!'));
console.log(reverseString('$World#Map!'));