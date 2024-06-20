//Add Mr/Mrs as the prefix based on the gender of the following people. ['John','Mary','David','Michael']
//Remove the person David from the following array. ['John','Mary','David','Michael']
const myPeople =['John','Mary','David','Michael']
let prefixpeople = myPeople
.filter((ppl)=> ppl !== 'David')
.map((ppl)=>{
     switch (ppl) {
        case 'John':
            return 'Mr. John';
        case 'Mary':
            return 'Mrs. Mary';
        case 'David':
            return 'Mr. David';
        case 'Michael':
            return 'Mr. Michael';
        default:
            return ppl; 
    }

})
console.log(prefixpeople);