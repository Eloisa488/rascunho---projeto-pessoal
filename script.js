const usuario = {}
const usuariosNome = []
const usuariosNis = []
const usuariosSalario = []
let option = ''

function cadastrar(nome, nis, salario) {
    nome = prompt('Escreva seu nome:')
    nis = prompt('Digite seu nis:')
    salario = prompt('Quanto vale sua renda mensal?')

    usuariosNome.push(usuario.nome = nome)
    usuariosNis.push(usuario.nis = nis)
    usuariosSalario.push(usuario.salario = salario)
}

function mostrarCadastro() {
    let listaDeUsuarios = ''

    for (let i = 0; i < usuariosNome.length; i++) {
        listaDeUsuarios += `${i + 1}º Usuário: ${usuariosNome[i]},`
        listaDeUsuarios += ` Nis: ${usuariosNis[i]},`
        listaDeUsuarios += ` Renda mensal: ${usuariosSalario[i]}\n`
    }

    alert(listaDeUsuarios)
}

function mostrarMenu(menu) {
    menu = `Bem vindo(a) ao bolsa família!
    Escolha uma das opções abaixo:
        
    1- Cadastrar
    2- Verificar cadastro
    3- Sair`

    return prompt(menu)
}

do {
    option = mostrarMenu()
    switch (option) {
        case '1':
            cadastrar()
            break
        case '2':
            mostrarCadastro()
            break
        case '3':
            alert('Saindo... Obrigado por usar meu projeto.')
            break
        default:
            alert('Opção inválida!')
    }
} while (option !== '3')

