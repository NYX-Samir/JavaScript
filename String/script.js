/*
Javascript strings: All string methods produce a new string without altering the original string.
String length
String charAt()
String charCodeAt()
String at()
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split() 
*/
let Name="Syntax Error ";
console.log(Name.length);
console.log(Name.charAt(2));
console.log(Name.charCodeAt(4));
console.log(Name.at(13));
console.log(Name.slice(0,6));
console.log(Name.substring(3,7));
console.log(Name.substr(3,7));
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.concat(" Youtube Channel"));
console.log(Name.trim());
console.log(Name.trimStart(2));
console.log(Name.trimEnd(8));
console.log(Name.padStart(123));
console.log(Name.padEnd());
console.log(Name.repeat(3));
console.log(Name.replaceAll("Error","Bhai"));
console.log(Name.replace("Syntax","Error"));
console.log(Name.split());