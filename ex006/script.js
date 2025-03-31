var peso = Number(prompt("Digite seu peso: "))
var altura = Number(prompt("Digite sua altura"))

var imc = peso / Math.pow(altura, 2)

if(imc < 18.5) {
    alert(`IMC ${imc} - Abaixo do peso`)
}else if(imc <= 24.9) {
    alert(`IMC ${imc} - Peso normal`)
}else if (imc <= 29.9) {
    alert(`IMC ${imc} - Sobrepeso`)
}else {
    alert (`IMC ${imc} - Obesidade`)
}