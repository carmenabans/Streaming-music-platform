function startTime() {
    const date = new Date();
    document.getElementById("hora").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {startTime()}, 1000);
}

// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 = {
    label: "Horas de uso",
    data: [3, 3, 7, 1, 5, 7.5, 0.5], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: '#0098DD', // Color de fondo
    borderColor: '#0098DD', // Color del borde
    borderWidth: 1,// Ancho del borde
};

new Chart($grafica, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});

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
  
  