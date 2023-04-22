$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-__'
    })

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            cep: 'CEP inválido ou não preenchido',
            cpf: 'CPF inválido ou não preenchido',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            console.log(camposInvalidos)
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos a serem revisados.`)
            } else {

            }
        }
    })

})