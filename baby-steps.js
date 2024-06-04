// 5console.log(process.argv) 

const args = process.argv.slice(2);

let sum = 0

for(let i = 0; i < args.length; i++){
   sum += +args[i]

}
 
console.log(sum);