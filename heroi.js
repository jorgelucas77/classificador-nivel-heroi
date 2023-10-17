while (true) {
    var nameHero = prompt("Digite o nome do seu herói: ");
    var xpHero = parseFloat(prompt("Qual o xp do seu herói: "));
    var nivel = '';

    switch (true) {
        case xpHero < 1000:
            nivel = "Ferro";
            break;
        case xpHero >= 1000 && xpHero < 2000:
            nivel = "Bronze";
            break;
        case xpHero >= 2000 && xpHero < 5000:
            nivel = "Prata";
            break;
        case xpHero >= 5000 && xpHero < 7000:
            nivel = "Ouro";
            break;
        case xpHero >= 7000 && xpHero < 8000:
            nivel = "Platina";
            break;
        case xpHero >= 8000 && xpHero < 9000:
            nivel = "Ascendente";
            break;
        case xpHero >= 9000 && xpHero < 10000:
            nivel = "Imortal";
            break;
        case xpHero >= 10000:
            nivel = "Diamante";
            break;
        default:
            nivel = "Desconhecido";
            break;
    }

    alert(`O Herói de nome ${nameHero} está no nível ${nivel}`);
    var outroHeroi = prompt("Quer saber a classificação de outro Herói: [S/N]").toUpperCase();

    if (outroHeroi === "N") {
        alert("Até a Próxima");
        break;
    }
}
