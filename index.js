const convertAmount = function (from, to, amount) {
    if (from === 'USD' && to === 'BRL') {
        const valueInReal = amount * 5.32;
        return valueInReal.toFixed(2);
    } 
    else if (from === 'BRL' && to === 'USD') {
        const valueInDollar = amount / 5.32;
        return valueInDollar.toFixed(2);
    }
    alert("Error on conversion, you just can convert Dollar to Real and Real to Dollar!!!")
    return 0;
}

const updateInput = function($input, value) {
    $input.val(value);
}

$(document).ready(() => {
    const $dollar = $('input[name="dollar"]');
    const $real = $('input[name="real"]');

    $dollar.keyup(function() {
        const valueInReal = convertAmount('USD', 'BRL', $(this).val());
        updateInput($real, valueInReal);
    });

    $real.keyup(function () {
        const valueInDollar = convertAmount('BRL', 'USD', $(this).val());
        updateInput($dollar, valueInDollar);
    });
});