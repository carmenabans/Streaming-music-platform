let lista_fav = ["the_loneliest", "as_it_was"];
localStorage.setItem('lista_fav', JSON.stringify(lista_fav));


function alerta() {
  alert("Inicia sesión o registrate para poder empezar a disfrutar de tus temazos");
}

function inicioSesion() {
  var cajaMenu = document.getElementById('popup1');    
  if(cajaMenu.style.display == "block") { // Si cajaMenu se esta viendo, lo escondemos
      cajaMenu.style.display = "none";
  }
  else { // Si cajaMenu no se esta viendo, lo enseñamos
      cajaMenu.style.display = "block";
  }
}

function registroRS() {
  var cajaMenu = document.getElementById('popup2');    
  if(cajaMenu.style.display == "block") { // Si cajaMenu se esta viendo, lo escondemos
      cajaMenu.style.display = "none";
  }
  else { // Si cajaMenu no se esta viendo, lo enseñamos
      cajaMenu.style.display = "block";
  }
}

function registro() {
  var cajaMenu = document.getElementById('popup3');    
  if(cajaMenu.style.display == "block") { // Si cajaMenu se esta viendo, lo escondemos
      cajaMenu.style.display = "none";
  }
  else { // Si cajaMenu no se esta viendo, lo enseñamos
      cajaMenu.style.display = "block";
  }
}

var modal = document.getElementById('popup-content');  
/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
  
  if (localStorage.getItem('theme') === 'dark_theme') {
    document.body.classList.add('dark_theme');
  }
});



// Establecemos las fucniones setCookie y getCookie para poder llevar a cabo el checkCookie que sera la funcion que sera llamada en este sign_in.js
function setCookie(cname, cvalue, exdays) { // Parametros que recibe la funcion, nombre valor y dias de expiracion
  const d = new Date(); // Creamos constante para establecer la fecha de expiracion de la cookie
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; //Creamos la cookie con su nombre, valor y tiempo de expiracion correspondiente
}

function getCookie(cname) {  //Solo le pasamos el parametro nombre
  let name = cname + "="; // Creamos variable para obtener el nombre
  let ca = document.cookie.split(';'); // Creamos segunda variable para dividir
  for(let i = 0; i < ca.length; i++) { 
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ""; // Obtenemos el valor de la cookie
}


function numeroUsuarios(){  // Funcion que nos hemos creado con el objetivo de crear una plataforma multiusuario
  if (localStorage.num_usuarios){ // Creamos una "variable" local con localStorage, lo que nos permite mantener esta variable aunque se refreseque la pagina u otro tipo de situaciones. Se mantiene en el sistema por asi decirlo
    localStorage.num_usuarios = Number(localStorage.num_usuarios)+1; // Si ya hay numero de usuario, incrementamos el numero de usuario a 1
    return localStorage.num_usuarios; // Retornamos el numero de usuario con el fin de añadir dicho valor en el checkCookie para reconocer cada dato de cada usuario 
  }

  else{ // En caso de no haber ningun usuario porque es el primero...
    localStorage.num_usuarios = 1; // ..., hacemos que el valor numerico de la variable localStorage.num_usuarios, sea igual a 1 
    return localStorage.num_usuarios; // Retornamos el numero de usuario con el fin de añadir dicho valor en el checkCookie para reconocer cada dato de cada usuario 
  }
}

function comprobarCorreo(){ // Funcion que tiene como objetivo comprobar si el correo ya existe
  sessionStorage.correo = 1; // Creamos una variable que solo se mantiene en la sesion en la que se encuentra, es decir, si se cambia de sesion, el valor de sessionStorage.correo se convertira en su valor inicial
  
  while (Number(sessionStorage.correo) <= Number(localStorage.num_usuarios)){ // Mientras que el valor de la sesion sea menor que el valor (numero de usuarios) del sistema 
    let c_correo = getCookie("email"+"_"+ sessionStorage.correo.toString()); // Cogemoos el valor del email del primer usuario 
    let n_correo = document.getElementById("correo").value; // Cogemos el correo escrito por el usuario en el input

    if (c_correo != n_correo){ // Si son distintos entonces aumentamos el valor del sessionStorage en 1 
      sessionStorage.correo = Number(sessionStorage.correo)+1;
    }

    else if ((c_correo == n_correo) && (sessionStorage.correo == 1)){
      return 1;
    }

    else if (c_correo == n_correo){ // En el caso de ser iguales retornamos un cero, que sera utilizado en la funcion checkCookie
      alert(c_correo.value);
      alert(n_correo.value);
      alert("He llegado");
      return 0;
    }

    else if (sessionStorage.correo > localStorage.num_usuarios){ // Puede darse el caso en el que el correo no exista, retorna un 1 y se va a la funcion checkCookie
      return 1; 
    }
  }
}

function checkCookie(e) {  // Le añadimos la "e" de evento para que se vaya a otra pagina al recargar

  let comprobacion = comprobarCorreo(); // Pasamos a variable el valor de comporbacion (0 ó 1)
  if (comprobacion == 0){ //Si el correo ya existe
    alert("Este correo electronico ya existe en la aplicacion"); // Como es igual no se puede agregar 
    e.preventDefault(); 
    window.location.href = "./Home_No_Cuenta.html"; // Redireccionamos a la misma pagina 
  }
  else{ // en caso de que el correo no exista
    let contador_usuario = numeroUsuarios(); // Creamos variable que recoja el numero de usuario a introducir para que sea multiusuario
    if (contador_usuario <= 1000){ // Hemos decidido que el maximo de personas que va a poder soportar la aplicacion es de 1000 (se puede aumentar al numero que se quiera en este caso)
        setCookie("nombre_usuario" + "_" + contador_usuario.toString(), nombre_us.value, 365); // Establecemos todas las cookies con el mismo nombre + "_" + numero de usuario, el valor y valor para la expiracion. Asi con todos los requerimientos del formulario
        setCookie("nueva_contra" + "_" + contador_usuario.toString(), nueva_contra.value, 365);
        setCookie("nombre"+ "_" + contador_usuario.toString(), nombre.value, 365);
        setCookie("apellidos" + "_" + contador_usuario.toString(), apellidos.value, 365);
        setCookie("email" + "_" + contador_usuario.toString(), correo.value, 365);
        /*setCookie("conf_correo" + "_" + contador_usuario.toString(), conf_correo.value, 365);*/
        setCookie("fecha" + "_" + contador_usuario.toString(), fecha.value, 365);
        setCookie("foto_perfil" + "_" + contador_usuario.toString(), foto_perfil.value, 365);
        setCookie("lista_song_fav" + "_" + contador_usuario.toString(), [], 365);
        setCookie("lista_artistas_fav" + "_" + contador_usuario.toString(), ["Hola", "hola2"], 365);
        contador_usuario += 1; // Aumentamos el contador en uno por cada usuario creado
        e.preventDefault();
        alert("Cuenta creada correctamente, Inicie Sesion para entrar en la aplicacion")
        window.location.href = "./Home_No_Cuenta.html"; // Redireccionamos a iniciar sesion para que el usuario se pueda meter en la pagina
      }

    else{ // Si se supera el valor que hemos decidido de 1000 usuarios, da un mensaje de que se va a seguir trabajando. Y redireccion a la pagina principal
      alert("Nuestra pagina web no esta diseñada para soportar tantos usuarios, trabajaremos para arreglarlo")
      e.preventDefault();
      window.location.href = "./Home_No_Cuenta.html"
     }
  }  
}


/* Log in */


function comprobarDatos(){ // Funcion creada con el objetivo de comprobar si el correo electronico y la contraseña se corresponde con el de algun usuario
  sessionStorage.correo = 1; // Creamos una variable que solo se mantiene en la sesion en la que se encuentra, es decir, si se cambia de sesion, el valor de sessionStorage.correo se convertira en su valor inicial
  
  
  while (Number(sessionStorage.correo) <= Number(localStorage.num_usuarios)){ // Mientras que el valor de la sesion sea menor que el valor del sistema 
    let c_correo = getCookie("email"+ "_" + sessionStorage.correo.toString()); // Cogemoos el valor del email que hay en las cookies 
    let c_contrasena = getCookie("nueva_contra" + "_" + sessionStorage.correo.toString()); // Cogemos el valor de la contraseña de la cookie
    let n_correo = document.getElementById("correo1").value; // Cogemos el correo escrito por el usuario 
    let n_contrasena = document.getElementById("contrasena").value; // Cogemos la contraseña escrita por el usuario 

    if ((c_correo != n_correo && c_contrasena != n_contrasena) || (c_correo != n_correo && c_contrasena == n_contrasena) || (c_correo == n_correo && c_contrasena != n_contrasena)){ // Si no coinciden ambos datos, tanto correo como contraseña de usuario, sumamos 1
      sessionStorage.correo = Number(sessionStorage.correo)+1;
    }

    else if (c_correo == n_correo && c_contrasena == n_contrasena){ // Si coincide el correo y la contraseña del usuario 
      localStorage.usuario_login = sessionStorage.correo.toString(); // Creamos una variable local, que va apermitor identificar al usuario que inicia sesion pasandole el numero del sessionStorage donde se ha producido la igualdad
      return 0; // Valro de retorno para el checkCookie
    }

    else if (sessionStorage.correo > localStorage.num_usuarios){ // En el caso en el que que no coincida ningun correo y contraseña 
      alert ("Hay mas session Storage que local Storage"); // Indicamos exceso de capacidad 
      return 1; // Retornamos un 1, que sera utilizado para la funcion checkCookie
    }
    
  }
}

function checkCookie1(e) {  // El "e" event sirve para que pueda ir a otra pagina al recargar 
  let comprobacion = comprobarDatos(); // Creamos variable donde se almacena si se recibe un 1 o un 0

  if (comprobacion == 0){ // Si coinciden ambos valores, se añadira un mensaje de bienvenida y el nombre del usuario
    alert("Bienvenido " + getCookie("nombre_usuario" + "_" + localStorage.usuario_login.toString()));
    e.preventDefault();
    window.location.href = "./Home.html"; // Redirigimos cuando termina la funcion a la pagina inicial de usuario
  }

  else{ // En caso de no coincidir los valores de correo y contraseña, se alertara de que uno de los dos valores estan mal
    alert("El correo electronico especificado o la contraseña no estan dados de alta");
    e.preventDefault();
    window.location.href = "./Home_No_Cuenta.html"; // Redirigimos al usuario a la misma pagina por si quiere volver a intentarlo
  }
}