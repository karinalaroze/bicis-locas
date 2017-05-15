function validateForm(){
	/* Escribe tú código aquí */
 var nombre = document.getElementById("name").value;
 var apellido = document.getElementById("lastname").value;
 var email = document.getElementById("input-email").value;
 var contrasenia = document.getElementById("input-password").value;
 var tag = document.getElementsByTagName('select')[0].selectedIndex;

 if (nombre.length==0){
 	var errorNombre = document.createElement('span');
 	errorNombre.innerHTML= "No esta correcto";
 	document.getElementById("nom").appendChild(errorNombre);
 	return false;
 }

 if (apellido.length==0){
 	var errorApellido= document.createElement('span');
 	errorApellido.innerHTML= "No esta correcto";
 	document.getElementById("ape").appendChild(errorApellido);
 	return false;
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