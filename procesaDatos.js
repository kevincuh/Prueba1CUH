var fSesion = document.getElementById('formInicioSesion')

fSesion.addEventListener('submit',function(e){
    e.preventDefault()

    var datos = new FormData(fSesion)
    
    //console.log(datos.get('usuario'))
    //console.log(datos.get('contra'))

    var mensaje = document.getElementById("mensaje")

    mensaje.innerHTML = `
            <h4>Datos correctos</h4>
            <p>Usuario: ${datos.get('usuario')}</p>
            <p>Contraseña: ${datos.get('contra')}</p>
    `

})

