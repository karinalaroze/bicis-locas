function validateForm(){
	/* Escribe tú código aquí */
 var nombre = document.getElementById("name").value;
 var apellido = document.getElementById("lastname").value;
 var email = document.getElementById("input-email").value;
 var contrasenia = document.getElementById("input-password").value;
 var tag = document.getElementsByTagName('select')[0].selectedIndex;

 if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
   var span = document.createElement("span");
   var referencia= document.getElementById("name");
   var padre=referencia.parentNode;
    padre.insertBefore(span,referencia);
   var texto = document.createTextNode("Debe ingresar su nombre");
    span.appendChild(texto);
    return span;
    }  
  else {
   var m = /^[a-zA-Z]*$/;
    if(!nombre.search(m)) {
    console.log("letra")
    m = /[a-z]/g;
  }    
   if(!nombre.search(m)){
   var span = document.createElement("span");
   var referencia= document.getElementById("name");
   var padre=referencia.parentNode;
    padre.insertBefore(span,referencia);
   var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
    span.appendChild(texto);
    return span;
    }
  }

 if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
  var span = document.createElement("span");
  var referencia= document.getElementById("lastname");
  var padre=referencia.parentNode;
   padre.insertBefore(span,referencia);
  var texto = document.createTextNode("Debe ingresar su apellido");
   span.appendChild(texto);
  return span;
  }
  else {
  var n = /^[a-zA-Z]*$/;
  if(!apellido.search(n)) {
   console.log("letra")
    n = /[a-z]/g;
    }    
  if(!apellido.search(n)){
   var span = document.createElement("span");
   var referencia= document.getElementById("lastname");
   var padre=referencia.parentNode;
    padre.insertBefore(span,referencia);
   var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
    span.appendChild(texto);
    return span;
    }
  }
 

 if (email.length==0){
 	var errorEmail= document.createElement('span');
 	errorEmail.innerHTML= "No esta correcto";
 	document.getElementById("mail").appendChild(errorEmail);
 	return false;
 }

 if (contrasenia.length==0){
 	var errorContrasenia= document.createElement('span');
 	errorContrasenia.innerHTML= "No esta correcto";
 	document.getElementById("pass").appendChild(errorContrasenia);
 	return false;
 }

 if (tag.length)
 	var errorTag= document.createElement('span');
 	errorTag.innerHTML= "No esta correcto";
 	document.getElementById("tipobici").appendChild(errorTag);
 	return false;
}

function validateMayuscula(evento) {

        palabra = window.event.keyCode;
 
        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){
             
        } else {          
        evento.preventDefault();
        }
}