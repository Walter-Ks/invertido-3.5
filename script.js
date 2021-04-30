


const calcular = document.getElementById('calcular');



function calculando() {
     input1 = document.getElementById('inp1').value;
     input2 = document.getElementById('inp2').value;
     input3 = document.getElementById('inp3').value;
     resultado = document.getElementById('resultado')


    

    if(input1 !== '' && input2 !== '' && input3 !== ''){
    const conta = (((input2 - input1) / input3) / 0.01747).toFixed(2);

    resultado.textContent = conta;
    }else{
        resultado.textContent = "Opsss, faltou informação :| "
    }

}

function op1(){
    const caixa = document.getElementById('check');
    caixa.innerText = "O resultado da conta deve ser posto como NEGATICO no ajuste"
    
}

function op2(){
    const caixa = document.getElementById('check');
    caixa.innerText = "O resultado da conta deve ser posto como POSITIVO no ajuste";
    
}

function op3(){
    const caixa = document.getElementById('check');
    caixa.innerText = "O resultado da conta deve ser posto como NEGATIVO no ajuste"
    
}
function op4(){
    const caixa = document.getElementById('check');
    caixa.innerText = "O resultado da conta deve ser posto como POSITIVO no ajuste"
    
}




calcular.addEventListener('click',calculando);

