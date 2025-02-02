
setInterval(displayDate, 1000);

function displayDate(){
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    document.getElementById("dev").innerHTML = hour + " : " + min + " : " + sec;
}
