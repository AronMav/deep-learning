var assert = require('assert');

ih_wgt = [[0.1, 0.2, -0.1],
           [-0.1, 0.1, 0.9],
           [0.1, 0.4, 0.1]]

hp_wgt = [[0.3, 1.1, -0.3],
           [0.1, 0.2, 0.0],
           [0.0, 1.3, 0.1]]

weights = [ih_wgt, hp_wgt]

pred = (input, weights) => {
    hid = vect_mat_mul(input, weights[0])
    pred = vect_mat_mul(hid, weights[1])
    return pred
}

w_sum = (a, b) => {
    assert.equal(a.length, b.length)
    let output = 0
    for (let i = 0; i < a.length; i++) {
        output += a[i] * b[i]
    }
    return output
}

vect_mat_mul = (vect, matrix) => {
    assert.equal(vect.length, matrix.length)
    let output = [0, 0, 0]

    for (let i = 0; i < vect.length; i++) {
        output[i] = w_sum(vect, matrix[i])
    }
    return output
}

toes =  [8.5, 9.5, 9.9, 9.0]
wlrec = [0.65,0.8, 0.8, 0.9]
nfans = [1.2, 1.3, 0.5, 1.0]

input = [toes[0], wlrec[0], nfans[0]]

console.log(pred(input, weights))