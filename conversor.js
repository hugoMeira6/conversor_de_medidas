const value = prompt("Escreva o valor em metros:")
const result = parseFloat(prompt("Escolha em qual opção o valor deve ser convertido: " +
"\n1- Milímetro (mm)" + 
"\n2- Centímetro (cm)" +
"\n3- Decímetro (dm)" +
"\n4- Decâmetro (dam)" +
"\n5- Hectômetro (hm)" +
"\n6- Quilômetro (km)"
))

switch(result) {
    case(1):
    alert("O resultado é: " + (value * 1000) + " milímetros.")
    break
    case(2):
    alert("O resultado é: " + (value * 100) + " centímetros.")
    break
    case(3):
    alert("O resultado é: " + (value * 10) + " decímetros.")
    break
    case(4):
    alert("O resultado é: " + (value / 10) + " decâmetros.")
    break
    case(5):
    alert("O resultado é: " + (value / 100) + " centímetros.")
    break
    case(6):
    alert("O resultado é: " + (value / 1000) + " quilômetros")
    break
    default: alert("Opção inválida.")
}

