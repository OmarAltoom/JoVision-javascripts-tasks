let b = document.getElementById("b");b.addEventListener("click",req);
async function req(){
    try{
    let a = await fetch("https://api.ipify.or");
        let ip = await a.text();
        b.textContent = ip;
    } catch(error){
        window.alert(error);
    }
}
