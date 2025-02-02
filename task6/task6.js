document.getElementById("b1").addEventListener("click",div3);
document.getElementById("b2").addEventListener("click",addingNumbers);
document.getElementById("b3").addEventListener("click",add_3);
document.getElementById("b4").addEventListener("click",range);
document.getElementById("b5").addEventListener("click",sort);

let numbers = [];

function div3(){
    create();
    let division3 = [];
    for(var i in numbers){
        if(numbers[i]%3 == 0){
            division3.push(numbers[i]);
            delete numbers[i];
        }
    }
    /* i can use filtering 
    {let division3 = numbers.filter(num => num % 3 === 0);}
    {numbers = numbers.filter(num => num % 3 !== 0);}
    */
    console.log("division by 3 :", division3);
}

function addingNumbers(){
    create();
    extendArr();
    console.log("the new array is : " , numbers);
}

function add_3(){
    create();
    for(var i in numbers){
        numbers[i] += 3;
    }
    console.log("the array after adding 3 : " , numbers);
}

function range(){
    create();
    const part = numbers.slice(20,41);
    console.log("the numbers between 20 and 40 : " , part)
}

function sort(){
    create();
    shuffleArray(numbers);
    console.log("the array after shuffle : " , numbers);
    sorting(numbers);
    console.log("the array sorting : " , numbers);
}

function create(){
    numbers = [];
    for(var i = 0;i <= 100;i++){
        numbers.push(parseInt(i));
    }
}

function extendArr(){
for(var i = 101;i <= 150;i++){
numbers.push(i);
}
}

function shuffleArray(array) {      
    for (let i = array.length - 1; i >= 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
}

function sorting(array){
    const checkNumbers = (num1, num2) => num1 - num2;
    array.sort(checkNumbers);
    array.reverse();
}