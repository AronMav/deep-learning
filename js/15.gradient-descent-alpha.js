let weight = 0.5
let input = 2
let goal_prediction = 0.8
let alpha = 0.1

for (let iteration = 0; iteration < 20; iteration++) {
  prediction = input * weight;
  error = (prediction - goal_prediction) ** 2;
  direction_and_amount = (prediction - goal_prediction) * input;
  weight = weight - (alpha * direction_and_amount);

  console.log("Error:" + String(error) + " Prediction:" + String(prediction))
}