var assert = require('assert');

weights = [0.1, 0.2, 0]

pred = (input, weights) =>{
    return w_sum(input, weights)
}

w_sum = (a, b) =>{
    assert.equal(a.length, b.length)

    output = 0 
    for (let index = 0; index < a.length; index++) {
        output += (a[index] * b[index])
    }
    return Math.round(output*100)/100
}

toes = [8.5, 9.5, 9.9, 9.0]
wlrec = [0.65, 0.8, 0.8, 0.9]
nfans = [1.2, 1.3, 0.5, 1.0]

input = [toes[0], wlrec[0], nfans[0]]

console.log(pred(input, weights))
