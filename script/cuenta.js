document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('text').addEventListener('click', () => {
      document.body.classList.toggle('dark_theme');
  
      localStorage.setItem(
        'theme',
        document.body.classList.contains('dark_theme') ? 'dark_theme' : 'light_theme'
      );
    });
  
    if (localStorage.getItem('theme') === 'dark_theme') {
      document.body.classList.add('dark_theme');
    }
  });


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
      document.getElementById("Icono_avatar1").src = imagen;
    }
}


document.getElementById("nombre_us").innerHTML = getCookie("nombre_usuario" + "_" + localStorage.usuario_login.toString()); // Igualamos el valor de el contenedor mediante su id al valor de todos los campos de registro correspondientes a las cookies del usuario