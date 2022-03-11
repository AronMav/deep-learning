var assert = require('assert');

weights = [0.3, 0.2, 0.9]

pred = (input, weights) => {
  return ele_mul(input, weights)
}

ele_mul = (number, vector) => {
  let output = [0, 0, 0]
  assert.equal(output.length, vector.length)

  for (let i = 0; i < vector.length; i++) {
    output[i] = number * vector[i]
  }
  return output
}

wlrec = [0.65, 0.8, 0.8, 0.9]
input = wlrec[0]

console.log(pred(input, weights))
