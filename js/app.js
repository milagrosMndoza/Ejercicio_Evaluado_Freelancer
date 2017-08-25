/*
 * Archivo principal de JS
 */
/*var modal = document.getElementById("modalId");
var modalImagen = document.getElementById("img01");
var captText = document.getElementById("caption");
var imagenes = [];
var spans = [];
for (var i = 0; i < 6; i++) {
    imagenes[i] = document.getElementsByClassName("mostrar")[i];
    imagenes[i].addEventListener("click", desplegar);
}

function desplegar() {
    modal.style.display = "block";
    modalImagen.src = this.src;
    captText.innerHTML = this.alt;
}
for (var i = 0; i < 6; i++) {
    spans[i] = document.getElementsByClassName("close")[0];
    spans[i].addEventListener("click", cerrar);
}

function cerrar() {
    modal.style.display = "none";
}*/


/*
 * Archivo principal de JS
 */
 var menu = document.getElementsByClassName("nav")[0];
 var tituloNav = document.getElementsByClassName("titulo")[0];
 var barra = document.getElementsByTagName("li")[0];
 var barra2 = document.getElementsByTagName("li")[1];
 var barra3 = document.getElementsByTagName("li")[2];
var modal = document.getElementById("modalId");
var modalImagen = document.getElementById("img01");
var captText = document.getElementById("caption");
var imagenes = [];
var spans = [];

for (var i = 0; i < 6; i++) {
    imagenes[i] = document.getElementsByClassName("mostrar")[i];
    imagenes[i].addEventListener("click", desplegar);
}

function desplegar() {
    modal.style.display = "block";
    modalImagen.src = this.src;
    captText.innerHTML = this.alt;
}
for (var i = 0; i < 6; i++) {
    spans[i] = document.getElementsByClassName("close")[0];
    spans[i].addEventListener("click", cerrar);
}

function cerrar() {
    modal.style.display = "none";
}


 function scroll (event){
   var scroll=window.pageYOffset || document.body.scrollTop;
   console.log(scroll);
   if(scroll>3){
     menu.style.paddingTop = "12px";
     menu.style.paddingBottom = "12px";
     tituloNav.style.fontSize = "18px";
   }
   if(scroll>712){
      console.log(barra);
     barra.classList.add("pestana");
   }else{
     barra.classList.remove("pestana");
   }
   if(scroll>1566 ){
     barra2.classList.add("pestana");
     barra.classList.remove("pestana");
   }else{
     barra2.classList.remove("pestana");
   }
   if(scroll>2111){
     barra3.classList.add("pestana");
     barra2.classList.remove("pestana");
   }else{
     barra3.classList.remove("pestana");
   }
   if(scroll<3){
     menu.style.paddingTop = "25px";
     menu.style.paddingBottom = "25px";
     tituloNav.style.fontSize = "35px";
   }
 }
 window.addEventListener("scroll",scroll);


/*Para mi formulario*/
var inputs= document.getElementsByClassName('formulario_input');
for(var i=0; i< inputs.length; i++){
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length>1){
            this.nextElementSibling.classList.add("fijar");
            
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}


