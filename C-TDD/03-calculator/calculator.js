function add(rawNumbers){
if(rawNumbers===""){
    return 0
}
if(!rawNumbers.includes(",")){
    return Number(rawNumbers)
}
let numbers=rawNumbers.split(",")
result=0
for(const number of numbers){
    result +=Number(number)
}
return result

}


module.exports = add;