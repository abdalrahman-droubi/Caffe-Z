
let customerName = prompt("Please enter your name");

let customerGender = prompt("Please enter your Gender male/female")

if (customerGender == "male") {
    alert("Welcom Mr "+ customerName)
} else if (customerGender == "female") {
    alert("Welcom Ms "+ customerName)
} else {
    alert("Welcom "+ customerName)
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

