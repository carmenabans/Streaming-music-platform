let lista_fav = JSON.parse(localStorage.getItem('lista_fav'));


document.addEventListener('DOMContentLoaded', () => {
  for (i = 0; i < lista_fav.length; i++ ){
    document.getElementById(lista_fav[i]).className = "bi bi-heart-fill";
  }
});




function dar_like(heart_id, heart) {
    let lista_fav = JSON.parse(localStorage.getItem('lista_fav'));
    if (lista_fav.includes(heart_id)) {
      //remove it
      let arrayWithoutid = lista_fav.filter(function (heart) {return heart !== heart_id;});
      localStorage.setItem('lista_fav', JSON.stringify(arrayWithoutid));
      //change icon
      heart.className = "bi bi-heart";
    } else {
      //add it to list
      lista_fav.push(heart_id);
      localStorage.setItem('lista_fav', JSON.stringify(lista_fav));
      //change icon
      heart.className = "bi bi-heart-fill";
    }
  }



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


  
//funcion de play en search bar
function play1() {
    var img = document.getElementById('play1');
    if (img.src.indexOf('play')!=-1) {
        document.getElementById('play1').src  = '../ej/images/pause.png';
        document.getElementById("audio1").controls = true;
        document.getElementById("audio1").style.display='block';
        document.getElementById("audio1").load();
    }
     else {
       document.getElementById('play1').src = '../ej/images/play.png';
       document.getElementById("audio1").controls = false;
       document.getElementById("audio1").pause();
       document.getElementById("audio1").style.display='none';
      } 
  }

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


function fotoPerfil(){
  let imagen = getCookie("foto_perfil" + "_" + localStorage.usuario_login.toString());
  console.log(imagen);
  /*console.log(imagen)*/
  if (imagen != ""){
      document.getElementById("Icono_avatar").src = imagen;
  }
}

  document.querySelectorAll(".copy_link").forEach(copyLinkContainer => {
  const inputField = copyLinkContainer.querySelector(".copy_link_input");
  const copyButton = copyLinkContainer.querySelector(".copy_link_button");
  const text = inputField.value;

  inputField.addEventListener("focus", () => inputField.select());

  copyButton.addEventListener("click", () => {
    inputField.select();
    navigator.clipboard.writeText(text);
  });
});

function compartir() {
  var element = document.getElementById("copiar");
  if (element.style.display == "flex") {
    element.style.display = "none";
  }

  else {
    element.style.display = "flex";
  }
}

function compartir2() {
  var element = document.getElementById("copiar2");
  if (element.style.display == "flex") {
    element.style.display = "none";
  }

  else {
    element.style.display = "flex";
  }
}

function compartir3() {
  var element = document.getElementById("copiar3");
  if (element.style.display == "flex") {
    element.style.display = "none";
  }

  else {
    element.style.display = "flex";
  }
}

function compartir4() {
  var element = document.getElementById("copiar4");
  if (element.style.display == "flex") {
    element.style.display = "none";
  }

  else {
    element.style.display = "flex";
  }
}

function compartir5() {
  var element = document.getElementById("copiar5");
  if (element.style.display == "flex") {
    element.style.display = "none";
  }

  else {
    element.style.display = "flex";
  }
}

function compartir6() {
  var element = document.getElementById("copiar6");
  if (element.style.display == "flex") {
    element.style.display = "none";
  }

  else {
    element.style.display = "flex";
  }
}



