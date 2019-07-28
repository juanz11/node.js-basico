const http = requiere('htpp');

function responderPeticion(request,response){
	response.end('Hola mundo');
̣}

let server = http.createserver(responderPeticion);




