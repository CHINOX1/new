window.addEventListener("load",()=>{
    console.log("hola ");
    document.getElementById("btnagregar"),addEventListener("click",()=>{
        console.log("le diste al btn")
        // recupero los elementos del formulario
        let enombre=document.getElementById("nombre");
        let edirector=document.getElementById("director");
        let eano=document.getElementById("ano");
        let evalor=document.getElementById("valor");
        let egenero=document.getElementById("genero");
        let emayoredad=document.getElementById("mayoredad");
        //recupera contenido
        let vnombre=enombre.value;
        let vdirector=edirector.value;
        let vano=eano.value;
        let vvalor=evalor.value;
        let vgenero=egenero.value;
        // en radio y check se pone checked
        let vmayoredad=emayoredad.checked;

        console.log(vnombre)
        console.log(vdirector)
        console.log(vano)
        console.log(vvalor)
        console.log(vgenero)
        console.log(vmayoredad)
        
        let peliculas ={
            Nombre:vnombre,
            Director:vnombre,
            ANO:vano,
            Valoracion:vvalor,
            Genero:vgenero,
            Mayoredad:vmayoredad
    
        };
        console.log(peliculas)


    })
})