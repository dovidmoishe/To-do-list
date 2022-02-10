function squareDigits(num){
    let numstr = num.toString()
    let arrofnum = []
    for(var i = 0; i < numstr.length;i++) {
         arrofnum.push(Math.pow(numstr[i], 2))
    }
    return arrofnum.join('')
}
console.log(squareDigits(3212))