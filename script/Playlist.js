

/* Función que desplega las opciones de canciones */
function desplegarOpciones() {
    var busquedas = document.getElementById('busquedas');    
    if (busquedas.style.display == "block") { // Si cajaMenu se esta viendo, lo escondemos
        busquedas.style.display = "none";
    }
    else { // Si cajaMenu no se esta viendo, lo enseñamos
        busquedas.style.display = "block";
    }	
  }
  
  
/* Función que busca las canciones */
function Search() {
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        //se esconden si no coincide
        li[i].style.display = "none";
    }
}
}

/* Función que desplega las opciones para añadir música */
function desplegarAñadirMusica() {
    var busquedas = document.getElementById('desplegable');    
    if (busquedas.style.display == "block") { // Si cajaMenu se esta viendo, lo escondemos
        busquedas.style.display = "none";
    }
    else { // Si cajaMenu no se esta viendo, lo enseñamos
        busquedas.style.display = "block";
    }	
}

/* Función que selecciona los name de las canciones con el checkbox */
document.querySelector('#btn_check').addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="cancion"]:checked');
    let values = [];
    let nom_list = document.getElementById('title_list').value;
    let descrip = document.getElementById('description').value;
    
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    let list_created = true;
    localStorage.setItem('titulo_list_new', nom_list);
    localStorage.setItem('descripcion_new_list', descrip);
    localStorage.setItem('values_list', JSON.stringify(values));
    localStorage.setItem('list_created', list_created);
});


/*document.querySelector('#btn').addEventListener('click', (event) => {
    let checkboxes = document.querySelectorAll('input[name="cancion"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        hola = JSON.parse("[cancion17, cancion18]");
        console.log(hola);
        values.push(JSON.parse(checkbox.value));
    });
    console.log(values);
    alert(values);
}); */ 


document.addEventListener('DOMContentLoaded', () => {
  
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
      document.getElementById("Icono_avatar1").src = imagen;
    }
}


  
