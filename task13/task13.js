
document.getElementById("button").addEventListener("click",submit);
async function submit(){
    try{
    let TN = document.getElementById("name").value;
    let response = await fetch("https://api.agify.io/?name=" + TN);
    let namej = await response.json();
    if(!response.ok){
        throw new error("not found");
    }
    let obj = {
        name: namej.name,
        age: namej.age
    };
    let {name,age} = obj;
    alert("the name is: " + name + "\n\rthe age is: " + age);
    } catch(error){
        alert(error);
    }        
}