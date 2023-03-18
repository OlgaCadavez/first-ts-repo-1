import { exercicio2_calculateRosesAndTulips } from '../../lab_01/exercicios';

describe('Testing the Calculate the Price Flowers', () => {
    test('5 rosas a 1 euros cada uma e 6 tulipas a 2 euros cada um ', () => {
        // Arranges
        let roses: number = 5;
        let tulipes: number = 6;
        let rosesPrice: number = 1;
        let tulipesPrice: number = 2;
        let expectedtotal: number = 17;

        // Act
        let total = exercicio2_calculateRosesAndTulips(roses, tulipes, rosesPrice, tulipesPrice);

        // Assert
        expect(total).toBe(expectedtotal);
    });
});


import { exercicio4_calculatePerimetro } from '../../lab_01/exercicios';

describe('Testing Calcular Perimetro', () => {
    test('ladoA igual a 5 e ladoB igual a 4', () => {
        // Arranges
        let ladoA: number = 5;
        let ladoB: number = 4;
        let expectedperimetro: number = 18;

        // Act
        let perimetro = exercicio4_calculatePerimetro(ladoA, ladoB);

        // Assert
        expect(perimetro).toBe(expectedperimetro);
    });

    test('ladoA equal zero and ladoB equal zero should raise an exception', () => {
        expect(() => {
            exercicio4_calculatePerimetro(0, 0);
        }).toThrow('Perimetro must not equal zero')
    });
});

import { exercicio5_calculateHipotenusa } from '../../lab_01/exercicios';

describe('Calculate hypotenuse', () => {
    test('cateto1 igual 3 e cateto2 igual 4', () => {
        // Arranges
        let cateto1: number = 3;
        let cateto2: number = 4;
        let exceptedhipotenusa: number = 5;

        // Act

        let hipotenusa = exercicio5_calculateHipotenusa(cateto1, cateto2);

        // Assert
        expect(hipotenusa).toBe(exceptedhipotenusa);
    });

  test('cateto1 equal 0 or cateto2 equal 0', () => {
        expect(() => {
            exercicio5_calculateHipotenusa(0, 4);
        }).toThrow('Not possible calculate hypotenuse')
    });
});


