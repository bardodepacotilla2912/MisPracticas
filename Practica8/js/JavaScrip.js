  let formulario = document.getElementById('formulario');
    let formularioEditar = document.getElementById('formularioEditar');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');
    let idTarea = document.getElementById('idTarea');
    let videos = document.getElementById('videos');
    let audio = document.getElementById('audio');
    let imagenes = document.getElementById('imagenes');
 
    let tareas = [
    {   
        videos : "" ,
        audio : "https://www.youtube.com/watch?v=3v2JNzGKXyU" ,
        imagenes : "/img/gOJO.jpg" ,
        nombre : "Josafat" ,
        fecha : "2023-12-31",
        descripcion : "Hola mundo"
    },
    {   
        videos : "" ,
        audio : "ArchivosMultimedia/mr-loverman-official-lyric-video.mp3" ,
        imagenes : "../img/gOJO.jpg" ,
        nombre : "Abraham" ,
        fecha : "2024-10-21",
        descripcion : "Hola mundo1"

    } ,
    {
        videos : "" ,
        audio : "https://www.youtube.com/watch?v=3v2JNzGKXyU" ,
        imagenes : "../img/gOJO.jpg" ,
        nombre : "Fer" ,
        fecha : "2025-12-27",
        descripcion : "Hola mundo2"
    }];
 
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');
    let btnGuardarEditar = document.getElementById('btnGuardarEditar');
 
    function mostrarTareas(){
        listaTareas.innerHTML = "";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += `
            <div class='row'>
                <div class='col-3 border p-3 text-center'>
                    <video controls>
                          <source src="${ tarea.videos }" type="video/mp4">
                    </video>
                </div>
                <div class='col-3 border p-3 text-center'>
                    <audio controls>
                          <source src="${ tarea.audio }" type="audio/mpeg">
                    </audio>
                </div>
                <div class='col-3 border p-3 text-center'>
                    <img src="${ tarea.imagenes }" alt="img">
                </div>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-4 border p-3'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${ indice })">Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${ indice })">Borrar</button>
                </div>
            </div>
            `;
        });
    }
 
    mostrarTareas();
 
    let editarTarea = (indice) => {
        
        nombreEditar.value = tareas[indice].nombre;
        fechaEditar.value = tareas[indice].fecha;
        descripcionEditar.value = tareas[indice].descripcion;
        idTarea.value = indice;
    }
 
    formularioEditar.addEventListener("submit", (e)=>{
        e.preventDefault();
        let indice = idTarea.value;
        tareas[indice].nombre = nombreEditar.value;
        tareas[indice].fecha = fechaEditar.value;
        tareas[indice].descripcion = descripcionEditar.value,
        tareas[indice].videos = videosEditar.value,
        tareas[indice].audio = audioEditar.value,
        tareas[indice].imagenes = imagenesEditar.value
        mostrarTareas();
        cerrarModalEditar();
    });
 
    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value,
            videos: videos.value,
            audio: audio.value,
            imagenes: imagenes.value
        }
        tareas.push(datos);
        mostrarTareas();
    }
    
    let cerrarModal = ()=> {
        btnGuardar.setAttribute("data-bs-dismiss","modal");
        btnGuardar.click();
    }
 
    let cerrarModalEditar = ()=> {
        btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
        btnGuardarEditar.click();
    }
 
    let borrarTarea = (indice)=> {
        tareas.splice(indice,1);
        console.log(tareas);
        mostrarTareas();
    }
 
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        agregarDatos();
        cerrarModal();
        formulario.reset();
    });