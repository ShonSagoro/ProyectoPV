 //declarar objeto
let texto;

const ValidarSesion=()=>{
    listaUsuarios=JSON.parse(localStorage.getItem("usuarios"));
    let usuario=document.getElementById("txtUser").value;
    usuario=ValidarNombre(usuario, listaUsuarios);
    let contrasenia=document.getElementById("txtPass").value;
    contrasenia=ValidarContrasenia(contrasenia,listaUsuarios);
        
    if(usuario!=-1&&contrasenia!=-1){
        document.querySelector('#txtUser').value="";
        document.querySelector('#txtPass').value="";
        localStorage.setItem("sesion", usuario);
        alert("Bienvenido de nuevo: "+usuario+" !!");
        window.location.assign("index.html");
    }else{
        texto="El usuario o la contraseña estan incorrectos";
        document.getElementById("validacionInicioSesion").innerHTML=texto;
    }
    
    
}

const ValidarNombre=(usuarioV, listaUsuarios)=>{
    for(i=0;i<listaUsuarios.length;i++){
        if(usuarioV==listaUsuarios[i].usuario){
            return usuarioV;
        }
    }
        return -1;

}

const ValidarContrasenia=(contrasenia, listaUsuarios)=>{
    for(i=0;i<listaUsuarios.length;i++){
        if(contrasenia==listaUsuarios[i].contrasenia){
            return contrasenia;
        }
    }
    return -1;
}


