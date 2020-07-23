'use strict'

let jeffMass =50
let jeffHeight = 15
let toddMass  = 45
let toddHeight = 16
let jeffBMI
let toddBMI

jeffBMI =( jeffMass/(jeffHeight*jeffHeight))*100
toddBMI = (toddMass/(toddHeight*toddHeight))*100
console.log(jeffBMI)
console.log(toddBMI)

let jeffHigherBMI = jeffBMI > toddBMI;



if(jeffBMI > toddBMI){
  console.log('Jeffs BMI is higher than Todds');
}
else {
  console.log('Todds BMI is bigger than Jeffs');
}




