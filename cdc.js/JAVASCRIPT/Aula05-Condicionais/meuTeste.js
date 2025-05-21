// NOTAS
// 10: Excelente

// 9: Ótimo

// 7 ou 8: Bom

// 5 ou 6: Regular

// 0 a 4: Insuficiente

// Fora disso: Nota inválida

// Sequencia Lógica
// 10 → resposta específica

// 9 → resposta específica

// 8 ou 7 → mesma resposta

// 6 ou 5 → mesma resposta

// 4, 3, 2, 1, 0 → mesma resposta

const avaliacao = 14;
let nota;

switch (avaliacao) {
    case 10:
        nota = "Excelente";
    break;
    case 9:
        nota = "Ótimo";
    break;
    case 8:
    case 7:
        nota = "Bom";
    break;;
    case 6:
    case 5:
        nota = "Regular";
    break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        nota = "Insuficiente";
    break;
    default:
        nota = "Nota Inválida";
    break;
}
