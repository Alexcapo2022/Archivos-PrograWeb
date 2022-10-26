const express = require("express")
const bodyParser = require("body-parser")

const PUERTO = 4444

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true 
}))


// Endpoints
/*una forma en la que el servidor bva reaccionar a una peticion web */
//1.TIPO DE PETICION
//2.Ruta (Identificador del endpoint)
//3. Funcion callback (funcion a ejecutar dada la peticion HTTP)
//rep: Representa a la petición
//resp: Respuesta del servidor
app.get("/", (req,resp)=>{
    console.log("Llego una peticion HTTP GET (/)")
    resp.send("<h1>Hola PW<h1>")
})

//Path parameter: El servidores recibe parametros por el path
app.get("/alumno/:cod/:nom", (req,resp)=>{
    const codigo = req.params.cod
    const nombre = req.params.nom

    resp.send(`<div>
    Nombre: ${nombre}
    </div>
    <div>
    Codigo: ${codigo}
    </div>`)

})

//Query parameter
//URL:/alumno-query?cod=20192659&nom=Alex&nombre=valor
app.get("/alumno-query",(req,resp)=>{
    const codigo = req.query.cod
    const nombre = req.query.nom
    resp.send(`<h1>Query parameter request </h1>
    <div>
    Nombre: ${nombre}
    </div>
    <div>
    Codigo: ${codigo}
    </div>`)
})

//Recibiendo la data de forma cruda(raw)- descargar insomnia
app.post("/alumno",(req,resp) => {
    console.log(req.body)
    const nombre = req.body.nombre
    const codigo = req.body.cod

    const respuesta = `<h1> Peticion HTTP Post (raw) </h1>
    <div>
    Nombre: ${nombre}
    </div>
    <div>
    Codigo: ${codigo}
    </div>`

    resp.send(respuesta)
})

//Formularios HTTP
app.get("/alumno-form",(req,resp) => {
    resp.send(
        `<form method="post" action="/alumno-post" >
            <input type="text" name="cod" />
            <input type="text" name="nom" />
            <input type="submit" value="Enviar" />
        </form>`
    )
})

app.post("/alumno-post",(req,resp) => {
    console.log(req.body)
    const nombre = req.body.nom
    const codigo = req.body.cod

    const respuesta = `<h1> Peticion HTTP Post (Formulario HTTP) </h1>
    <div>
    Nombre: ${nombre}
    </div>
    <div>
    Codigo: ${codigo}
    </div>`

    resp.send(respuesta)
})

app.listen(PUERTO, () => { 
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})
