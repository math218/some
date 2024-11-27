const mensaje = `invite`;
const url = `index.html?mensaje=${encodeURIComponent(mensaje)}`
addEventListener("keydown", function(event) {
    
    if (event.ctrlKey && event.shiftKey) {
        event.preventDefault();
        window.location.href = url;
    }
})
addEventListener("keydown", function(event) {
    console.log(event.key)
})