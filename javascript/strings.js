// Google other methods which is not covered in this lab
// example we will use over this lab
var string1 = "This is string1 that variable name is string1"
var string2 = "This is string2 that variable name is string2"

// length property
// returns number of characters in string including spaces
// expects 45

var len = string1.length

// indexOf(search, location) method
// Search string and returns the first location where
// search string is located
// if location parameter is omitted, then search from the first
// expects 8
var strIndexOf = string1.indexOf("string1")

// lastIndexOf(search, location) method
// search the last occurence of the search string
// if location parameter is omitted, then search from the first
// below expects 38
var strLastIndexOf = string1.lastIndexOf("string1")

// search(search) method
// similar to indexOf method
// returns the location owhere search string found
// below expectes 8
var strSearch = string1.search("string1")

// NOTE
// Then what is the difference between indexOf and search
// search do not have the location parameter
// indexOf cannot use regular expression

// slice(from, to) method
// extract string start from ends at to index
// from and to accepts negative value
// negative -1 means the last location of given string
// below expects string1
var extracted = string1.slice(8,15)
// to do the exact operation above dynamically we can write code as
var extracted2 = string1.slice(string1.indexOf("string1"), string1.indexOf("string1") + "string1".length)
// or more programmer like way
var searchStr = "string1"
var strLoc = string1.indexOf(searchStr)
var extracted3 = string1.slice(strLoc, strLoc + searchStr.length)

// substring(start, end)
// same as slice above
// exxcept start, end must be non-negative value

// substr(from , length)
// this is same as substring but differ that the second parameter is the length
// so we can now more simplify above code as written below
var extracted4 = string1.substr(strLoc, searchStr.length)

// replace(old,new)
// replace old string to new string
// below expects
// string3 = "This is string3 that variable name is string3"
var string3 = string1.replace("string1", "string3")

