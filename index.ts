const tabuada = (array: number[]): string => {

    let saida: string = "";

    for (let j = 0; j < array.length; j++) {
        saida += ` --- TABUADA DE ${array[j]} ---\n`;
        for (let i = 0; i <= 10; i++) {
            saida += `${array[j]} x ${i} = ${array[j] * i}\n`;
        }
        saida += "--------------------- \n";
    }

    return saida;
}


console.log(tabuada([1, 5, 3]));