function bestsolution(num,target){

let value = []

num.forEach(element => {
   const sub= target - element
   if(value.includes(sub)){
   console.log([sub,element]);
   
   }
   value.push(element)
});

return 0;

}

bestsolution([2, 7, 11, 15], 9)

const find = new Set()
console.log(find)
find.add(1)
console.log(find)
