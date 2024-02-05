// Show liked songs 
const lista_fav = JSON.parse(localStorage.getItem('lista_fav'));

for (i = 0; i < lista_fav.length; i++) {
  document.getElementById(lista_fav[i]).style.display = "flex";
} 
  



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
  
  
  function fotoPerfil1(){
    let imagen = getCookie("foto_perfil" + "_" + localStorage.usuario_login.toString());
    console.log(imagen);
    /*console.log(imagen)*/
    if (imagen != ""){
        document.getElementById("Icono_avatar").src = imagen;
      }
  }


