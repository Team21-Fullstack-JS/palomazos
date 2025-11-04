//REALIZA UN FETCH A LA API, RECIBE EL PATH AL QUE DESEA ACCEDER Y
//EL TIPO DE SOLICITUD QUE DESEA IMPLEMENTAR

/**Params:
 * path: ruta a la que se desea acceder
 * req: tipo de solicitud que se desea realizar
 * body: arreglo con los datos que se desean enviar (solo para POST y PUT)
 * token: token de autenticación
 * */
export function requestApi(path, req, body, token) {

    const API = "https://hiram-oci-mty.duckdns.org/palomazos-api/v1"; //Base de la API a consumir
    // const API = "http://localhost:4005/v1";

    const bodyData = (req === "POST" || req === "PUT") ? body : {};

    if( req === "GET" ) {
        //path y tipo de solicitud
        return fetch(API + path, {
            //Se concatena api y path
            mode: "cors",
            method: req, //tipo de petición
            headers: new Headers({
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": token,
            }),
        });
    }
    else if( req === "POST" || req === "PUT" ) {
        console.log(bodyData);
        return fetch(API + path, {
            mode: "cors",
            method: req,
            body: JSON.stringify(bodyData),
            headers: new Headers({
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": token,
            }),
        });
    }
    else if(req === "DELETE")
    {
        return fetch(API + path, {
            //Se concatena api y path
            mode: "cors",
            method: req, //tipo de petición
            headers: new Headers({
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": token,
            }),
        });
    } else {
        throw new Error("Tipo de petición no soportada");
    }
}