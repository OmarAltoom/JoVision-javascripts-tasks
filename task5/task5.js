document.getElementById("b").addEventListener("click",sum);
const numbers = [];
for(var i = 0;i <= 100;i++){
        numbers.push(parseInt(i));
    }
function sum(){
    var result = 0;
    for(let num of numbers){
        if(num%2 == 0)
        result += num;
    }
    document.getElementById("dev").innerHTML = "<br>the result is : " + result;
}