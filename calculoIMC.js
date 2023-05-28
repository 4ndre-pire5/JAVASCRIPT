console.log("\nCálculo de IMC");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//readline.question('Digite seu peso(kg): ', (peso) => {    \\ usando essa sintaxe já faço a atribuição do valor digitado a variavel
readline.question('\nDigite seu peso(kg): ',function(userInput){
    let peso = userInput;

    //readline.question('Digite sua altura(m): ', (altura) => {
    readline.question('Digite sua altura(m): ',function(userInput){
        let altura = userInput;
        
        let IMC = (parseFloat(peso)/Math.pow(parseFloat(altura), 2));
        //console.log(`Seu IMC é igual a: ${IMC.toFixed(2)}`);
        
        let range;    
        if(IMC <= 18.5 ) range = "Magreza";
        if((IMC > 18.5) && (IMC <= 24.9)) range = "Normal";
        if((IMC > 24.9) && (IMC <= 30)) range = "Sobrepeso";
        if(IMC > 30)  range = "Obesidade";

        console.log(`Seu IMC é classificado como: ${range}\n`);

        readline.close();

    });  
    
});
   
