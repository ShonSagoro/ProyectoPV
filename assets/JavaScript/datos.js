class Usuario{
    constructor(correo, usuario, contrasenia){
        this.correo=correo;
        this.usuario=usuario;
        this.contrasenia=contrasenia;
    }
}
const botonCerraSesion = document.querySelector('#cerrar-sesion');
const listaUsuarios=[new Usuario("Shon@gmail.com","admin","root"),new Usuario("Kristell@gmail.com","Kristell",22709),new Usuario("UnoCrew@gmail.com","Juan",52300), new Usuario("RegokuDona@gmail.com","Gerardo",93379)]; //declarar objeto
localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
console.log(JSON.parse(localStorage.getItem("usuarios")));


if(localStorage.getItem('sesion')){
    document.querySelector('#inicio-nombre').innerHTML = localStorage.getItem('sesion');
    document.querySelector('#inicio-sesion').remove();
    document.querySelector('#registro').remove();
}else{
    document.querySelector('#cerrar-sesion').remove();
    document.querySelector('#inicio-nombre').remove();
    document.querySelector('#user-logo').remove();
}

botonCerraSesion.addEventListener('click',()=>{
    localStorage.removeItem('sesion');
    alert("Sesion cerrada");
    window.location.assign("index.html");
})

//funcion trim(): elimina espacios vacios a una variable

