var vitorias = 33;
var derrotas = 11;
var saldoVitorias = 0;
let nivel = "";

main()

function main ()
{
    saldoVitorias = parseInt(vitorias - derrotas)
    nivel = classificadorNivel(saldoVitorias)
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
}

function classificadorNivel(saldo)
{
    if (saldo <= 10)
        return "Ferro"
    if (saldo >= 11 && saldo <= 20)
        return "Bronze"
    if (saldo >= 21 && saldo <= 50)
        return "Prata"
    if (saldo >= 51 && saldo <= 80)
        return "Ouro"
    if (saldo >= 81 && saldo <= 90)
        return "Diamante"
    if (saldo >= 91 && saldo <= 100)
        return "Lendario"
    if (saldo >= 101)
        return "Imortal"
}