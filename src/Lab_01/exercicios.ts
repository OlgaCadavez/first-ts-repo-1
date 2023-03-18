// Open terminal (powershell)
// npx tsc
// node build/exercicios.js

export function exercicio2_calculateRosesAndTulips(roses: number, tulipes: number, rosesPrice: number, tulipesPrice: number): number {

    let total = roses * rosesPrice + tulipes * tulipesPrice;

    return total;
}




export function exercicio3_calculateVolume(radius: number, height: number): [number] {

    let volume = 3.14 * radius * radius * height * 1000;

    return [volume];
}



export function soma(numb1: number, numb2: number): [number] {

    let soma = numb1 + numb2;

    return [soma];
}


export function exercicio4_calculatePerimetro(ladoA: number, ladoB: number): number {

    let perimetro = 2 * ladoA + 2 * ladoB;

    if (perimetro == 0)
        throw new RangeError('Perimetro must not equal zero');

    return perimetro;
}

export function exercicio5_calculateHipotenusa(catetol: number, cateto2: number): number {

    let hipotenusa: number = 0;

    if (catetol == 0 || cateto2 == 0)
    {
        throw new RangeError('Not possible calculate hypotenuse');
    }
    else
    {
        hipotenusa = (catetol * catetol + cateto2 * cateto2) ** (1 / 2);
    }

    return hipotenusa;
}

console.log("");

