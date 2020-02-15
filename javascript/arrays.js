// Google other methods we need which is not covered in this source
// The array we will use for this example
var myArray = ["Michael", "Thomas", "John", "Dave", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Yeonghui"]

// toString method
// concatenate all elements in array with comma separated
// below expects "Michael,Thomas,John,....,Yeonghui"
var toStr = myArray.toString()

// join method
// concatenate arrays into string but we can specify separator
// below expects "Michael|Thomas|John|...|Teonghui"
var joinStr = myArray.join("|")

// pop method
// pop-out the "last" element of an array
// Below expects
// popElem = Yeonhui
// myArray = ["Michael", "Thomas", "John", "Dave", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton"]
var popElem = myArray.pop()

// push method
// add element to the "last" of an array
// returns the length of new array
// expected result below are
// x : 12
// myArray = ["Michael", "Thomas", "John", "Dave", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Elsa"]
var x = myArray.append("Elsa")

// shift method
// pops out the "first" element and moves all array to left
// below expects
// shiftElem = "Michael"
// myArray = ["Thomas", "John", "Dave", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Elsa"]
var shitElem = myArray.shift()

// unshift method
// adds elemt to the "first" spot of an array then move old array element to right
// then returns new length
// below expects
// unshiftLength : 12
// myArray = ["Jimmy", "Thomas", "John", "Dave", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Elsa"]
var unshiftLength = myArray.unshift("Jimmy")

// length property
// Array length(number of elements) calculation
// below expects
// len = 12 (the current length)
var len = myArray.length

// myArray[index]
// accessing array element
// get the element of an array at index location
// below expects Dave which is 4-th element
// Like other programming language, JavaScript array index starts from zero
var elem = myArray[3]

// one can change array value with this access
// myArray will changed to 
// myArray = ["Jimmy", "Thomas", "John", "Odin", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Elsa"]
myArray[3] = "Odin"

// splice method
// splicing an array
// array.splice(wherne, how many elements to remove, value1, value2, value3, ....)
// below expects
// myArray = ["Jimmy", "Thomas", "Thor", "Iron Man", "John", "Odin", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Elsa"]
myArray.splice(2,0,"Thor", "Iron Man")

// slice method
// slice an array
// array.slice(from, to)
// from index is included and to index is excluded
// if to index is unspecified then considers untill the end of array
// below expects
// slice1 = ["Iron Man", "John", "Odin", "George", "Ivan", "Chulsoo", "Jane" , "Sarah", "Anna", "Anton", "Elsa"]
// slice2 = ["Thor", "Iron Man"]
var slice1 = myArray.slice(3)
var slice2 = myArray.slice(2,4)
