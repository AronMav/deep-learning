let weight = 0.5
let input = 0.5
let goal_prediction = 0.8
let step_amount = 0.001

for (let index = 0; index < 1101; index++) {
  let prediction = input * weight
  let error = (prediction - goal_prediction) ** 2

  console.log("Error:" + String(error) + " Prediction:" + String(prediction))

  let up_prediction = input * (weight + step_amount)
  let up_error = (goal_prediction - up_prediction) ** 2

  let down_prediction = input * (weight - step_amount)
  let down_error = (goal_prediction - down_prediction) ** 2

  if (down_error < up_error) {
    weight = weight - step_amount
  }

  if (down_error > up_error) {
    weight = weight + step_amount
  }
}