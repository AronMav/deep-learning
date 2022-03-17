let weight = 0.0
let input = 1.1
let goal_prediction = 0.8

for (let iteration = 0; iteration < 4; iteration++) {
  console.log("-----\nWeigth:" + String(weight))

  prediction = input * weight;
  error = (prediction - goal_prediction) ** 2;
  delta = prediction - goal_prediction;
  weight_delta = delta * input;
  weight = weight - weight_delta;

  console.log("Error:" + String(error) + " Prediction:" + String(prediction))
  console.log("Delta:" + String(delta) + " Weight Delta:" + String(weight_delta))
}