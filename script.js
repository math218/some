const manejarCookies = {
  // Establecer una cookie
  setCookie: (nombre, valor, dias = 7) => {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    const expira = `expires=${fecha.toUTCString()}`;
    document.cookie = `${nombre}=${valor};${expira};path=/`;
  },

  // Obtener el valor de una cookie
  getCookie: (nombre) => {
    const nombreEQ = `${nombre}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(nombreEQ)) {
        return cookie.substring(nombreEQ.length, cookie.length);
      }
    }
    return null;
  },

  // Eliminar una cookie
  eraseCookie: (nombre) => {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};

let intentos = parseInt(manejarCookies.getCookie('intentos')) || 3;
const contrasenaInput = document.getElementById("text");
const boton = document.getElementById("boton");

boton.addEventListener('click', () => {
  if (contrasenaInput.value === "") {
    alert("No has escrito una contraseña");
  } else {
    if (intentos <= 0) {
      manejarCookies.setCookie("intentos", 0, 5);
      alert("No tienes intentos restantes");
      alert("Vuelve en 5 días o contacta al administrador");
    } else {
      const contrasena = contrasenaInput.value;
      if (contrasena === "あ") {
        window.location.href = "index2.html?mensaje=seguro";
      } else {
        intentos--;
        manejarCookies.setCookie("intentos", intentos, 5);
        alert(`Te quedan ${intentos} intentos`);
      }
    }
  }
});

addEventListener("keydown", function(event) {
  if (event.shiftKey && event.ctrlKey) {
    manejarCookies.eraseCookie("intentos");
    alert("Se han eliminado los intentos");
  }
  else if (event.altKey && event.shiftKey) {
    try {
    await navigator.clipboard.writeText("あ");
    }
    catch (error) {
      console.error(error);
      alert(error);
  }
});
