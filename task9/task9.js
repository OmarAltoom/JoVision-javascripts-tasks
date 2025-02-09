document.getElementById("b").addEventListener("click",req);
function req(){
    let fetchh = fetch("https://api.ipify.org/");
    fetchh.then(d => {
        console.log(d);
    });
}