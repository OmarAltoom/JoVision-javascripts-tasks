let b = document.getElementById("b");b.addEventListener("click",req);
async function req(){
    try{
    let req = await fetch("https://api.ipify.or");
    if(!req.ok){
        throw new Error("Failed");
    }
        let ip = await req.text();
        b.textContent = ip;
    } catch(error){
        window.alert(error);
    }
}
