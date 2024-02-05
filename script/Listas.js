document.addEventListener('DOMContentLoaded', () => {
  
  if (localStorage.getItem('theme') === 'dark_theme') {
    document.body.classList.add('dark_theme');
  }
});



//icorreo = document.getElementById("correo")
let values_lista = JSON.parse(localStorage.getItem('values_list'));
let descrip = localStorage.getItem('descripcion_new_list');
let nom_list = localStorage.getItem('titulo_list_new');
let list_created = localStorage.getItem('list_created');

if (list_created == 'true') {
  document.getElementById('playlist_nueva').style.display = "block";
}

document.getElementById('nom_lista').innerHTML = nom_list;
document.getElementById('descripción_nueva').innerHTML = descrip ;

for (i = 0; i < values_lista.length; i++) {
  document.getElementById(values_lista[i]).style.display = "block";
  document.getElementById('smells_like_teen_spirit').style.display = "block";
  document.getElementById('sweet_child_o_mine').style.display = "block";
}




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
        document.getElementById("Icono_avatar1").src = imagen;
      }
  }