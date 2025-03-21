const nome="Karen Pedroso";
let nome2 = "";
let pessoaDefault={
    nome: "Karen Pedroso",
    idade:"22",
    trabalho:"Programadora"
}

let nomes = ["Maria Eltz", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
    nome: "Karen Pedroso",
    idade:"22",
    trabalho:"Programadora"
    },
    {
    nome: "Maria Silva",
    idade:"25",
    trabalho:"UX/UI Designer"
    }
];


function alterarNome(){
    nome2="Maria Silva";
    console.log("Valor alterado;");
    console.log(nome2);
}

 function recebeEalteraNome(novoNome){
    nome2= novoNome;
    console.log("Valor alterado recebendo um nome;");
    console.log(nome2);
 }

function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa){
    pessoas.push (pessoa);
}

function imprimirPessoa(){
    console.log("-------IMPRIMIR PESSOAS-----");
    pessoas.forEach ((item)=>{
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoa();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho:"Porteiro"
});

imprimirPessoa();


//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
    //nome: "Maria Silva",
    //idade:"25",
   // trabalho:"UX/UI Designer"
//});


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();
