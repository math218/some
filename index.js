const params = new URLSearchParams(window.location.search);
const mensaje = params.get("mensaje");
if(mensaje != "invite") {
    window.location.href = "index2.html"
}
function troll() {
    for(i =1;1++;i < 3) {
        alert("en serio")
    }
}