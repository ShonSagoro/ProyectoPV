class Usuario{
    constructor(correo, usuario, contrasenia){
        this.correo=correo;
        this.usuario=usuario;
        this.contrasenia=contrasenia;
    }
}

const Registrar=()=>{
    listaUsuarios=JSON.parse(localStorage.getItem("usuarios"));
    let correo=document.getElementById("txtCorreoR").value;
    let usuario=document.getElementById("txtUserR").value;
    let contrasenia= document.getElementById("txtPassR").value;
    let contraseniaR= document.getElementById("txtPassRC").value;
    if(correo!='' && usuario!='' && contrasenia!=''){
        if(contrasenia==contraseniaR){
            document.querySelector('#txtCorreoR').value="";
            document.querySelector('#txtUserR').value="";
            document.querySelector('#txtPassR').value="";
            document.querySelector('#txtPassRC').value="";
            alert("Bienvenido "+usuario);
            const registroUsuario= new Usuario(correo, usuario, contrasenia);
            listaUsuarios.push(registroUsuario);
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
            window.location.assign("inicioSesion.html");
        }else{
            texto="Las contraseñas no coiciden, vuelva a intentarlo";
            document.getElementById("validacionRegistro").innerHTML=texto;
        }
    }else{
        alert("ingrese TODOS sus datos antes de registrase");
    } 
}
