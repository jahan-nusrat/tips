/* Remove falsy values from an array */

const language = ['javascript', undefined, 'Go', 'Python', null, false]
const newArr = language.filter(Boolean)

console.log(newArr)   //Output: [ 'javascript', 'Go', 'Python' ]

/* Conditionally add properties to an object */
const obj = {
  a: 1,
  ...(true && {b:5}),
  ...(false && {c:8}),
}

console.log(obj)    //Output: { a: 1, b: 5 }

/* Quick tips for sorting */

//strings array in alphabetical order
const arrOfStrSort = ['d', 'z', 'm', 'r'].sort() //Output: [ 'd', 'm', 'r', 'z' ]

//num array in asc order
const arrOfNumSortAsc = [1, 7, 90, 34, 23].sort((a, b) => a-b) //[ 1, 7, 23, 34, 90 ]

//num array in desc order
const arrOfNumSortDesc = [1, 7, 90, 34, 23].sort((a, b) => b - a) //[ 90, 34, 23, 7, 1 ]

//array of objects
const arrOfObjSort = [{id: 2, name: 'Lion'}, {id: 1, name: 'Tiger'}].sort((a, b) => a.id - b.id)  //[ { id: 1, name: 'Tiger' }, { id: 2, name: 'Lion' } ]

//Sort by two fields
const sortByTwoFields = [{id: 2, name: 'Lion', age: 12}, {id: 1, name: 'Tiger', age: 23}].sort((a, b) => {
  if(a.age !== b.age) {
    return a.age - b.age
  } else {
    return a.id - b.id
  }
})  //[ { id: 2, name: 'Lion', age: 12 }, { id: 1, name: 'Tiger', age: 23 } ]

/* Looping through objects */
const dog = {
  breed: 'Pug',
  age: 3
}

// getting both keys and values
for(const [key, value] of Object.entries(dog)) {
  console.log (`${key}: ${value}`)  //breed: Pug //age: 3  
}  

//Getting only keys
for(const key of Object.keys(dog)) {
  console.log (`${key}`)  //breed //age
}

//Getting only values
for(const value of Object.values(dog)) {
  console.log (`${value}`) //Pug //3
}