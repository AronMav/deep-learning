
var nj = require('numjs');

weights = nj.array([0.5, 0.48, -0.7]);
let alpha = 0.1;

streetLights = nj.stack([
  [1, 0, 1],
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [0, 1, 1],
  [1, 0, 1]]);

walkVsStop = nj.array([0, 1, 0, 1, 1, 0])

input = streetLights.pick(0) //[0, 1, 0]
goalPrediction = walkVsStop.pick(0) //Include 0 (stop)

for (let iteration = 0; iteration < 40; iteration++) {
  let errorForAllLights = 0;
  for (let rowIndex = 0; rowIndex < walkVsStop.size; rowIndex++) {
    input = streetLights.pick(rowIndex)
    goalPrediction = walkVsStop.get(rowIndex)

    prediction = nj.dot(input, weights).get(0)

    error = (goalPrediction - prediction) ** 2
    errorForAllLights += error

    delta = prediction - goalPrediction
    weights = weights.subtract(input.multiply(delta).multiply(alpha))
    console.log("Prediction:" + String(prediction))
  }
  console.log("Error:" + String(errorForAllLights) + "\n")
}