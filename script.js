function menuBolsafamilia() {
  let usuarios = []; // Array para armazenar os usuários cadastrados
  let escolha; // Variável para controlar a escolha do menu

  do {
    escolha = prompt(`
      Escolha uma opção sobre o Bolsa Família:
      1. Cadastrar
      2. Verificar cadastro
      3. Sair
    `);

    switch (escolha) {
      case "1":
        cadastrarUsuario(usuarios);
        break;
      case "2":
        verificarCadastro(usuarios);
        break;
      case "3":
        alert("Saindo... Obrigado por usar nosso sistema.");
        break;
      default:
        alert("Opção inválida! Tente novamente.");
        break;
    }
  } while (escolha !== "3");
}

function cadastrarUsuario(usuarios) {
  // Coleta as informações do usuário
  let nome = prompt("Digite seu nome:");
  let nis = prompt("Digite seu número do NIS:");
  let renda = parseFloat(prompt("Digite sua renda mensal (em reais):"));

  if (isNaN(renda) || renda < 0) {
    alert("Renda inválida. Cadastro não concluído.");
    return;
  }

  // Verifica se o NIS já está cadastrado
  let usuarioExistente = usuarios.find((usuario) => usuario.nis === nis);
  if (usuarioExistente) {
    alert("Número do NIS já cadastrado.");
    return;
  }

  // Adiciona o usuário ao array
  usuarios.push({ nome, nis, renda });
  alert("Cadastro realizado com sucesso!");
}

function verificarCadastro(usuarios) {
  if (usuarios.length === 0) {
    alert("Nenhum usuário cadastrado.");
    return;
  }

  let nis = prompt("Digite o número do NIS para verificar o cadastro:");
  let usuario = usuarios.find((usuario) => usuario.nis === nis);

  if (usuario) {
    alert(`
      Cadastro encontrado:
      Nome: ${usuario.nome}
      NIS: ${usuario.nis}
      Renda mensal: R$ ${usuario.renda.toFixed(2)}
    `);
  } else {
    alert("Nenhum cadastro encontrado para o NIS informado.");
  }
}

// Chama a função principal
menuBolsafamilia();