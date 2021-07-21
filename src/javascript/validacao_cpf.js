function verificarCPF() {
    limpar();
    let cpf = document.getElementById("cpfInput").value;
    let soma = 0;
    let resto = 0;
    let status = "";

    if (cpf.length === 0) {
        return document.getElementById("resultadoValidacao").innerHTML = "Digite um número de CPF!";
    }

    if (
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999"
    ) {
        document.getElementById("resultadoValidacao").innerHTML = "Este CPF <u>não existe!</u>";
        status = "errado";
        imagemValidacao(status);
        return;
    }

    for (let i = 0; i < 9; i++) {
        soma = soma + parseInt(cpf[i] * (10 - i), 10);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf[9], 10)) {
        document.getElementById("resultadoValidacao").innerHTML = "Este CPF <u>não existe!</u>";
        status = 'errado';
        imagemValidacao(status);
        return;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma = soma + parseInt(cpf[i] * (11 - i), 10);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf[10], 10)) {
        document.getElementById("resultadoValidacao").innerHTML = "Este CPF <u>não existe!</u>";
        status = 'errado';
        imagemValidacao(status);
    } else {
        document.getElementById("resultadoValidacao").innerHTML = "Este CPF é <b>válido</b>.";
        status = 'certo';
        imagemValidacao(status);
    }
}

function imagemValidacao(status) {
    const div = document.getElementById("imagemValidacao");
    const image = document.createElement("img");
    image.src = `assets/images/${status}.png`;
    div.appendChild(image);
}

function limpar() {
    document.getElementById("imagemValidacao").innerHTML = ""
}

