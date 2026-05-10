const usuarioCorreto = "admin";
const senhaCorreta = 123;

let usuarioDigitado = prompt("Informe seu usuário:");
let senhaDigitada = prompt("Digite sua senha (apenas números):");

if (!usuarioDigitado || !senhaDigitada) {
    alert("Login cancelado ou campos vazios. Por favor, preencha todos os dados.");
} 
else {
    let senhaNum = Number(senhaDigitada);

    if (usuarioDigitado !== usuarioCorreto || senhaNum !== senhaCorreta) {
        alert("Usuário ou senha incorretos. Tente novamente.");
    } 
    else {
        window.alert("Login realizado com sucesso! Bem-vindo, " + usuarioCorreto + ".");
        window.location.href="../Htmls/camera.html";
    }
}

