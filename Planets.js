const fs = require('fs');

try{
    const data = fs.readFileSync('planets.txt', 'utf-8');
    console.log(data);
}catch(err){
    console.log(err)
}