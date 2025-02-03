let b = document.getElementById("b");b.addEventListener("click",req);
function req(){
    let fetchh = fetch("https://api.ipify.org");
    fetchh.then(d => b.textContent = d.text());
    
}