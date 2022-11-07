let add =require("./calculator") 
test ("add empty string returns zero",function(){
//arrange
let input=""
//act
let result=add(input)
//assert
expect(result).toEqual(0);


})


test ("add string  return number",function(){
//arrange
let input="5"
//act
let result=add(input)
//assertt
expect(result).toEqual(5);

})


test ("add two number return sum",function(){
//arrange
let input="3,6"
//act
let result=add(input)
//assertt
expect(result).toEqual(9);

})

test ("handle an unknown amount of number",function(){
//arrange
let input="1,2,3,4,5,6,7,8,9,10"
//act
let result=add(input)
//assertt
expect(result).toEqual(55);

})