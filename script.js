let arraypessoas = []; //array vazio -cadastro pessoas

function calcular() {
    //pegar o valor dos campos
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    // console.log(nome,altura,peso);

    //validar os dados
    if (nome == "" || altura == "" || peso == "") {
        alert('Preencha todos os campos');
        return false;
    }


    //gerar o imc

    let imc = geraIMC(altura, peso);


    // console.log(imc); //teste no log//
    //gerar a situação


    let situacao = geraSituacao(imc);


    //cadastrar o imc // push no array

    let pessoa = {// quando é criada uma vareavel com o mesmo nome da 
        nome,
        altura,
        peso,
        imc,
        situacao: situacao
    }
    arraypessoas.push(pessoa);
    //exibir os dados - mostrar os dados na tela com template
    exibeResultado();//chama afuncao

    //exibir os dados //mostrar os dados na tela com template
}

function geraIMC(altura, peso) {
    return peso / (altura * altura);
}


function geraSituacao(imc) {
    if (imc < 18.5) {
        return 'Magreza severa'//mensagem que vai aparecer pro usuario

    } else if (imc >= 18.5 && imc <= 24.99) {
        return 'Peso normal';

    } else if (imc >= 25 && imc <= 29.99) {
        return 'Acima do Peso';

    } else if (imc >= 30 && imc <= 34.99) {
        return 'Obsedidade I';

    } else if (imc >= 35 && imc <= 39.99) {
        return 'Obsedidade II';

    } else {
        return 'Cuidado!!'
    }

}

function exibeResultado() { // colocando a craze se xonsegui colocar a vareavel do java script
    let template = '';

  

for (let i = 0; < arraypessoas .length. i ++ ); {
         template += `<td>João</td>
         <td>${arraypessoas.[i].nome}</td>
        <td>${arraypessoas.[i].altura}</td>
        <td>${arraypessoas.[i].peso}</td>
        <td>Peso Normal </td>
        </tr>`//acumula linhas de tabela
}
document.getElementById(' cadastro').innerHTML = template;
}