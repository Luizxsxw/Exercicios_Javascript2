function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin@admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "index.html";
    }else{
        alert("Usuário ou senha incorretos");
    }
}