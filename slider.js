// Função para validar login
function validarLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  
  if (usuario === "teamtomodachi" && senha === "0000") {
    // Se o nome de usuário e senha estiverem corretos, redireciona
    // Substitua com o link da página que deseja redirecionar, ou remova a linha para não redirecionar.
    window.location.href = "SEU_NOVO_LINK_AQUI";  // Substitua pelo novo URL
  } else {
    // Se estiver incorreto, exibe uma mensagem de erro
    alert("Nome de usuário ou senha incorretos!");
  }
}
