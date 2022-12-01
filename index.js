document.addEventListener("DOMContentLoaded", leitorDeDados());

function leitorDeDados() {
    const campoMassa = document.getElementById("massa");
    let massa = null;
    campoMassa.addEventListener("change", () => massa = campoMassa.value);
    
    const campoAltura = document.getElementById("altura");
    let altura = null;
    campoAltura.addEventListener("change", () => altura = campoAltura.value);

    const botao = document.getElementById("confirma");
    const exibeResultados = document.getElementById("exibeResultados");
    const exibeIMC = document.getElementById("exibeIMC");
    const exibeSituacao = document.getElementById("exibeSituacao");

    botao.addEventListener("click", () => {
        let IMC = (massa / (altura ** 2)).toFixed(2);
        let situacao = usuarioSituacao(IMC);

        exibeIMC.innerText = IMC;
        exibeSituacao.innerText = situacao;
        exibeResultados.hidden = 0;
    });
}

function usuarioSituacao(IMC) {
    if (IMC < 17) {
        return "Muito abaixo do peso";
    }

    else if (IMC < 18.5) {
        return "Abaixo do peso";
    }

    else if (IMC < 25) {
        return "Peso normal";
    }

    else if (IMC < 30) {
        return "Acima do peso";
    }

    else if (IMC < 35) {
        return "Obesidade";
    }

    else if (IMC < 40) {
        return "Obesidade severa";
    }

    else {
        return "Obesidade mórbida";
    }

}