//Calculate the total marks of the students based on the following array. [80,58,79,45,24,55]
const stdtotalmarks = [80,58,79,45,24,55]
let finalmarks = stdtotalmarks.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(finalmarks);