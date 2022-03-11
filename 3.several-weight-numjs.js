var nj = require('numjs');

let weights = nj.array([0.1, 0.2, 0])

pred = (input, weights) => {
  return input.dot(weights).get(0)
}

toes = nj.array([8.5, 9.5, 9.9, 9.0])
wlrec = nj.array([0.65, 0.8, 0.8, 0.9])
nfans = nj.array([1.2, 1.3, 0.5, 1.0])

input = nj.array([toes.get(0), wlrec.get(0), nfans.get(0)])

console.log(pred(input, weights))