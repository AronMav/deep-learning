// 4) COMPARE: Making A Prediction With a *Lower* Weight And Evaluating Error

let weight = 0.1

production = (input, weight) => {
  return input * weight
}

let number_of_toes = [8.5]
let win_or_lose_binary = [1] // (won!!!)

let input = number_of_toes[0]
let true_ = win_or_lose_binary[0]

let lr = 0.01
let p_dn = production(input, weight - lr)
let e_dn = (p_dn - true_) ** 2
console.log(e_dn)