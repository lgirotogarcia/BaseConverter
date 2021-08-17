function baseConverter (decNum, base) {
    
    let restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while (decNum > 0) {
        rest = Math.floor(decNum % base)
        restStack.push(rest)
        decNum = Math.floor(decNum / base)
    }

    while (restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}

console.log(baseConverter(123, 2))
console.log(baseConverter(123,8))
console.log(baseConverter(123,16))