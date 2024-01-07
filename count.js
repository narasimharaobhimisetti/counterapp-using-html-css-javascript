let value =document.getElementById("value");
console.log(value)
let num=0;
 let plus= document.getElementById("plus").addEventListener("click",()=>{
num=num+1;
    
   value.innerText=num;

})
console.log(plus);

 document.getElementById("minus").addEventListener('click',()=>{
    num =num-1;
    value.innerText=num;
   
 })
 document.getElementById("reset").addEventListener("click",()=>{
    num=0
   value.innerText=num;
 })