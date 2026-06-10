console.log("Hello")

const first=1;
const second=2;
console.log(first);
console.log(second);
const str="bharu"
console.log(str)
const fruits = ["apple","banana","grapes"]
console.log(fruits[0])
fruits[1]="orange"
console.log(fruits[1])
const arr = [1,"bharu",false,2.4]
console.log(arr[1])
console.log(arr)
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
const fourth = document.getElementById("ptag")
fourth.innerHTML = "This is my fourth class"

function newfunction(){
     console.log("hi iam bharu and your ?")
}
const input =document.getElementById("eventListener")
const output =document.getElementById("Ptag")
input.addEventListener("input",()=>{
    output.textContent =input.value
})

 const newvar = document.createElement("h1")
 newvar.textContent="i like blue colour";
 document.body.appendChild(newvar);

 newvar.remove()

 