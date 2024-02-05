//icorreo = document.getElementById("correo")

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


function fotoPerfil2(){
    let imagen = getCookie("foto_perfil" + "_" + localStorage.usuario_login.toString());
    console.log(imagen);
    /*console.log(imagen)*/
    if (imagen != ""){
        document.getElementById("Icono_avatar").src = imagen;
    }
}

function modifCookie(nombre_h, nombre_c){ // Funcion que nos va a permitir modificar el valor de las cookies del usuario que ha iniciado sesion
    
    let nuevo =  document.getElementById(nombre_h).value; // Variable asociada con el valor nuevo que introduce el usuario
    nombre_v = getCookie(nombre_c); // Variable asociada con el valor de la cookie correspondiente al usuario que ha iniciado la sesion
    
    if (nombre_v != nuevo){ // Si el valor introducido es distinto al valor que ya tenia la cookie
        setCookie(nombre_c, "", 0); // Borramos el valor de la cookie 
        setCookie(nombre_c, nuevo, 365); // Introducimos el nuevo valor de la cookie para ese usuario 
    }
    else{ // En caso contrario 
        return 
    }
}



function checkCookie(e){ // Funcion checkCookie, que tiene un evento para garantizar que cambie de pagina dentro de nuestra aplicacion al recargar
    modifCookie ("nombre_us", "nombre_usuario" + "_" + localStorage.usuario_login.toString()); // Llamamos a la funcion modifCookie con todos los nombre de las cookies y sus respectivos valores corrspondientes al usuario que ha iniciado sesio, esto lo obtenemos mediante localStorage.usuario_login
    modifCookie ("nueva_contra", "nueva_contra" + "_" + localStorage.usuario_login.toString()); // El uso de localStorage, nos permite obtener el numero de usuario correspondiente. Esta variable definida en esta linea se crea al iniciar sesion; asi garantizamos que se modifiquen los valores del usuario correcto (el que ha iniciado sesion)
    modifCookie ("nombre", "nombre" + "_" + localStorage.usuario_login.toString());
    modifCookie ("apellidos", "apellidos" + "_" + localStorage.usuario_login.toString());
    modifCookie ("correo", "email" + "_" + localStorage.usuario_login.toString());
    /*modifCookie ("conf_correo", "conf_correo" + "_" + localStorage.usuario_login.toString());*/
    modifCookie ("fecha", "fecha" + "_" + localStorage.usuario_login.toString());
    modifCookie ("foto_perfil", "foto_perfil" + "_" + localStorage.usuario_login.toString());

    e.preventDefault();
    window.location.href = "./Home.html"; //Redirigimos a los usuarios a la pagina de perfil

}


// Para que aparezcan los datos del usuario correspondiente, que ha iniciado sesion. Hacemos que el identificador (numero) sea el localStorage.usuario_login. 


document.getElementById("nombre_us").value = getCookie("nombre_usuario" + "_" + localStorage.usuario_login.toString()); // Igualamos el valor de el contenedor mediante su id al valor de todos los campos de registro correspondientes a las cookies del usuario
document.getElementById("nueva_contra").value = getCookie("nueva_contra" + "_" + localStorage.usuario_login.toString());
document.getElementById("nombre").value = getCookie("nombre" + "_" + localStorage.usuario_login.toString());
document.getElementById("apellidos").value = getCookie("apellidos" + "_" + localStorage.usuario_login.toString());
document.getElementById("correo").value = getCookie("email" + "_" + localStorage.usuario_login.toString());
/*document.getElementById("conf_correo").value = getCookie("conf_correo" + "_" + localStorage.usuario_login.toString());*/
document.getElementById("fecha").value = getCookie("fecha" + "_" + localStorage.usuario_login.toString());
document.getElementById("foto_perfil").value = getCookie("foto_perfil" + "_" + localStorage.usuario_login.toString());




function fotoPerfil1(){
    let imagen = getCookie("foto_perfil" + "_" + localStorage.usuario_login.toString());
    console.log(imagen);
    /*console.log(imagen)*/
    if (imagen != ""){
        document.getElementById("Icono_avatar").src = imagen;
        document.getElementById("Icono_avatar1").src = imagen;
      }
  }