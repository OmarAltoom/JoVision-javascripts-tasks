
document.getElementById("button").addEventListener("click",submit);
function submit(){
let obj = {
name: document.getElementById("name").value,
age: document.getElementById("age").value,
time: Date().toString()
};
const {name,age,time} = obj;//bc its object i use {} but if i use array i will use [] in deconstruction
alert("Your name is: " + name + "\n\rYour age is: " + age + "\n\rtimstamp: " + time);
}