// It provides the functionality for working with query strings. .Example is the parsing of a URL and logging its components.
const querystring = require("querystring");
const queryString = "xyz=abc&baz=qux";
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery.xyz); // 'bar'
console.log(parsedQuery.abc); // 'qux'
