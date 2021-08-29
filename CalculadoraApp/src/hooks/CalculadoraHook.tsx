import React, { useState } from 'react'

export const CalculadoraHook = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('')

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('');
    }

    const agregarNumero = (numeroNuevo: string) => {
        if (numero === '0') {
            if (numeroNuevo === '.')
                setNumero(numero + numeroNuevo);
            else
                setNumero(numeroNuevo);
        }
        else
        if (numeroNuevo != '.') { 
            setNumero(numero + numeroNuevo);
        }else{
            if (!numero.includes('.')) {
                setNumero(numero + numeroNuevo);
            }
        }
    }

    const sumar = () => {
        if (!numeroAnterior.includes('+')) {
            if (numeroAnterior.includes('-')) {
                setNumeroAnterior(numeroAnterior.replace('-', '+'));
            } else if (numeroAnterior.includes('*')) {
                setNumeroAnterior(numeroAnterior.replace('*', '+'));
            } else if (numeroAnterior.includes('/')) {
                setNumeroAnterior(numeroAnterior.replace('/', '+'));
            } else {
                setNumeroAnterior(numero + '+');
                setNumero('0');
            }
        }
    }

    const restar = () => {
        if (!numeroAnterior.includes('-')) {
            if (numeroAnterior.includes('+')) {
                setNumeroAnterior(numeroAnterior.replace('+', '-'));
            } else if (numeroAnterior.includes('*')) {
                setNumeroAnterior(numeroAnterior.replace('*', '-'));
            } else if (numeroAnterior.includes('/')) {
                setNumeroAnterior(numeroAnterior.replace('/', '-'));
            } else {
                setNumeroAnterior(numero + '-');
                setNumero('0');
            }
        }
    }

    const multiplicar = () => {
        if (!numeroAnterior.includes('*')) {
            if (numeroAnterior.includes('-')) {
                setNumeroAnterior(numeroAnterior.replace('-', '*'));
            } else if (numeroAnterior.includes('+')) {
                setNumeroAnterior(numeroAnterior.replace('+', '*'));
            } else if (numeroAnterior.includes('/')) {
                setNumeroAnterior(numeroAnterior.replace('/', '*'));
            } else {
                setNumeroAnterior(numero + '*');
                setNumero('0');
            }
        }
    }

    const dividir = () => {
        if (!numeroAnterior.includes('/')) {
            if (numeroAnterior.includes('-')) {
                setNumeroAnterior(numeroAnterior.replace('-', '/'));
            } else if (numeroAnterior.includes('*')) {
                setNumeroAnterior(numeroAnterior.replace('*', '/'));
            } else if (numeroAnterior.includes('+')) {
                setNumeroAnterior(numeroAnterior.replace('+', '/'));
            } else {
                setNumeroAnterior(numero + '/');
                setNumero('0');
            }
        }
    }

    const del = () => {
        const num = numero.slice(0, -1);
        setNumero(num);
        console.log(numero);
        if (numero.length == 1) {
            setNumero('0');
        }
    }

    const cambiarSigno= () => {
        setNumero( (parseFloat(numero) * -1) + '');
    }

    const result = () => {

        if (numero != '') {

            const num = numeroAnterior.slice(0, -1);
            switch (numeroAnterior[numeroAnterior.length - 1]) {
                case '+':
                    setNumero((parseFloat(num) + parseFloat(numero)) + '');
                    setNumeroAnterior(' ');
                    break;
                case '-':
                    setNumero((parseFloat(num) - parseFloat(numero)) + '');
                    setNumeroAnterior(' ');
                    break;
                case '*':
                    setNumero((parseFloat(num) * parseFloat(numero)) + '');
                    setNumeroAnterior(' ');
                    break;
                case '/':
                    setNumero((parseFloat(num) / parseFloat(numero)) + '');
                    setNumeroAnterior(' ');
                    break;
            }
        }
    }

    return {
        numero,
        numeroAnterior,
        agregarNumero,
        sumar,
        restar,
        multiplicar,
        dividir,
        del,
        cambiarSigno,
        limpiar,
        result
    }
}
