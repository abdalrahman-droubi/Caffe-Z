
let customerName = prompt("Please enter your name");

let customerGender = prompt("Please enter your Gender male/female")

while (customerGender != "male" && customerGender != "female") {
    customerGender = prompt("Please enter your Gender male/female")
}

if (customerGender == "male") {
    alert("Welcom Mr "+ customerName)
} else {
    alert("Welcom Ms "+ customerName)
} 

let hotColdDrink = prompt("do you want your drink hot or cold ?")

let typeDrink = prompt("please write the name of the drink you want ")

alert("please wait the drink is getting prepared ")

if (customerGender == "male") {
    console.log("ok Mr " + customerName + " your order is " +  hotColdDrink + " " + typeDrink)
} else if (customerGender == "female") {
    console.log("ok Ms " + customerName + " your order is " +  hotColdDrink + " " + typeDrink)
} else {
    console.log("ok " + customerName + " your order is " + hotColdDrink + " " + typeDrink)
}

let customer = [customerName , customerGender , hotColdDrink , typeDrink]

for(let i=0 ; i<customer.length ; i++){
    console.log(customer[i])
}


