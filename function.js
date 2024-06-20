// function myFunction(){
//     console.log("mein hun na")
//     console.log("tu haina")
// }
//  myFunction()

//  function myFunction(msg,n){
//     //paramter - input
//     console.log(msg * n )
    
// }
//  myFunction("my love for js",100)


// function sum(a,b){
//   console.log(a*b)
// }
// sum(78,10)

// function sum(a,b){
//     //local variables -> scope
//     console.log("before statement")
//     s = a+b
//     console.log(a)
//     return s
// }

// let val = sum(3,4)
// // console.log(a)
// console.log(val)

// function sum(a,b){
//         return a +b
//  }

//  const arrowSum=(a,b)=>{
//     console.log(a+b)
//  }


//  //multiplication

//  function mul(a,b){
//     return a*b
//  }

//  const arrowMul=(a,b)=>{
//     console.log(a*b)
//  }
//  arrowMul(3,4)

//  const printHello=()=>{
//     console.log("Hello")
//  }


//  function countVowels(str){
//     let count=0;
//     for (const char of str){
//         if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"){
//             count++
//         }
//     }
//     return count
//  }
//  countVowels("hello")

//  const countVowels = (str)=>{
//     let count=0;
//     for (const char of str){
//         if(char === "a"||char === "e"||char === "i"||char === "o"||char === "u"){
//             count++
//         }
//     }
//     console.log(count)

//  }

// let arr =["karachi","islamabad","lahore","multan"]

// arr.forEach((val,idx,arr)=>{
//     console.log(val.toUpperCase,idx,arr)
// })


let num =[2,3,4,5,6,7,8]
num.forEach((num)=>{
    console.log(num*num)
})