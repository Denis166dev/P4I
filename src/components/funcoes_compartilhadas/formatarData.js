export default function formataData(dataEntrada) {
    const data = new Date(dataEntrada);

    // Extrair o dia, mês e ano da data
    const dia = data.getUTCDate();
    const mes = data.getUTCMonth() + 1;
    const ano = data.getUTCFullYear();

    const d = dia <= 9 ? '0' + dia : dia
    const m = mes <= 9 ? '0' + mes : mes
    const dataF = `${d}/${m}/${ano}`;
    return dataF;
}
