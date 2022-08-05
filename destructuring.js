// console.log(numPlanets) prints 8
// console.log(yearNeptuneDiscovered) prints 1846

// console.log(discoveryYears) prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) returns
// Your name is Alejandro and you like purple
// getUserData({firstName: "Melissa"}) returns
// Your name is Melissa and you like green
// getUserData({}) returns
// Your name is undefined and you like green

// console.log(first) prints Maya
// console.log(second) prints Marisa
// console.log(third) prints Chi

// console.log(raindrops) prints "Raindrops on roses"
// console.log(whiskers) prints "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings) prints
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// console.log(numbers) returns [10, 30, 20]

const obj = {numbers: {
    a: 1,
    b: 2}
};
const {a,b} = obj.numbers;

let arr = [1,2]
[arr[0], arr[1]] = [arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});