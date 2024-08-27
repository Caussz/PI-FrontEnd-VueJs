function formatStudentName(inputString) {
    const [matricula, nome] = inputString.split(' - ');

    const nomeFormatado = nome
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');

    return {
        matricula: matricula.trim(),
        nomeFormatado: nomeFormatado
    };
}

export default { formatStudentName }