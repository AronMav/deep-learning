// 1) An Empty Network
let weight = 0.1
let lr = 0.01

production = (input, weight) => {
  return input * weight
}

// 2) PREDICT: Making A Prediction And Evaluating Error
let number_of_toes = [8.5]
let win_or_lose_binary = [1]
let input = number_of_toes[0]
let true_ = win_or_lose_binary[0]
let pred = production(input, weight)
let error = (pred - true_) ** 2
console.log(error)