let b = document.getElementById("b");b.addEventListener("click",req);
async function req(){
    
    let a = await fetch("https://api.ipify.org");
        let ip = await a.text();
        b.textContent = ip;
}
