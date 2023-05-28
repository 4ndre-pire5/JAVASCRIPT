console.log('Olá, seja bem vindo ao app...');

function main(){
    let txtNome = 'TESTE';
    console.log(typeof(txtNome));
    console.log(txtNome);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    txtNome = 10;
    console.log(typeof(txtNome));
    console.log(txtNome);

    readline.question('Digite seu nome:\n',function(userInput){
        console.log('\nObrigado ' + userInput);
        console.log('\nObrigdo por usar o app, finalizando...');
        readline.close();
    });
}
main();