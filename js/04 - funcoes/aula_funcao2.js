function escrevaMeuNome(nome) {
    return console.log(`My name is ${nome}`);
}

escrevaMeuNome('Erik');
escrevaMeuNome('Ruan');

function digiteSuaIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    }
    else {
        console.log ('Você é menor de idade');
    }
}

digiteSuaIdade(17);