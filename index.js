// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Excesso de peso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade classe 1";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade classe 2";
    } else {
        return "Obesidade classe 3";
    }
}

// Array para armazenar os dados dos usuários
var usuarios = [];

// Coletando informações dos usuários até que o usuário cancele
while (true) {
    var nome = prompt("Digite o nome do usuário (ou clique em Cancelar para encerrar):");
    
    // Se o usuário cancelar, sair do loop
    if (nome === null) {
        break;
    }

    var peso = parseFloat(prompt("Digite o peso do usuário (em kg):"));
    var altura = parseFloat(prompt("Digite a altura do usuário (em metros):"));

    // Verificar se os valores inseridos são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        continue;
    }

    var imc = calcularIMC(peso, altura);
    var classificacao = classificarIMC(imc);

    // Armazenar os dados do usuário
    usuarios.push({
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc,
        classificacao: classificacao
    });
}

// Verificar se foram coletados dados de algum usuário
if (usuarios.length > 0) {
    // Apresentar informações de cada usuário
    console.log("Informações dos usuários:");
    usuarios.forEach(function(usuario) {
        console.log("Nome:", usuario.nome);
        console.log("IMC:", usuario.imc.toFixed(2));
        console.log("Classificação:", usuario.classificacao);
        console.log("-------------");
    });

    // Encontrar o usuário com o maior IMC
    var usuarioMaiorIMC = usuarios.reduce(function(prev, current) {
        return (prev.imc > current.imc) ? prev : current;
    });

    // Calcular a média dos IMCs
    var somaIMC = usuarios.reduce(function(total, usuario) {
        return total + usuario.imc;
    }, 0);
    var mediaIMC = somaIMC / usuarios.length;

    // Apresentar resumo
    console.log("Resumo:");
    console.log("Quantidade de usuários coletados:", usuarios.length);
    console.log("Usuário com maior IMC:", usuarioMaiorIMC.nome, "com IMC:", usuarioMaiorIMC.imc.toFixed(2));
    console.log("Média dos IMCs dos usuários:", mediaIMC.toFixed(2));
} else {
    console.log("Nenhum dado de usuário foi coletado.");
}
