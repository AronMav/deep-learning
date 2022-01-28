const weight = 0.1
const numder_of_toes = [8.5, 9.5, 10, 9]

const prediction = (input, weight) => {
    return input * weight
};

const input = numder_of_toes[0]
pred = prediction(input, weight)
console.log(Math.round(pred*100)/100)