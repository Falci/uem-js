$(function(){

    $("#log").html("Começando bem!");

    // 1) selecionar o formulário
    // 2) monitorar o submit
    // 3) executar função de validação

    //  1               2             3
    $("#formNotas").on('submit', validarForm)

});


function validarForm(event){
    event.preventDefault();

    // 1) pegar os inputs
    $(".obrigatorio").each(function(i, elem){
        var $elem = $(elem);// sem aspas

        // 2) verificar se o valor é vazio
        if($elem.val() === ""){
            $elem.next()
                .html("Este campo é obrigatório")
                .addClass("invalido")
        }
    });


    // 3) para as notas: verificar se é valor entre 0 e 10

}



/// github.com/Falci/uem-js
