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
                .removeClass("valido")
                .addClass("invalido");
        } else {
            $elem.next()
                .html("")
                .addClass("valido")
                .removeClass("invalido");
        }
    });

    // verificar se há erros;
    var $elementosComErro = $(".invalido");
    if( $elementosComErro.length > 0){
        return;
    }

    var resultado = calcularMedia() ? "Aprovado" : "Reprovado";
    
    // adicionar a linha na tabela
    var $linha = $("<tr></tr>");
    var $tdNome = $("<td></td>").html( $("#nome").val() );
    var $tdNota1 = $("<td></td>").html( $("#nota1").val() );
    var $tdNota2 = $("<td></td>").html( $("#nota2").val() );
    var $tdResultado = $("<td></td>")
            .html( resultado )
            .addClass(resultado.toLowerCase());

    $tdNota1.addClass("direita");
    $tdNota2.addClass("direita");

    $linha.append($tdNome)
          .append($tdNota1)
          .append($tdNota2)
          .append($tdResultado);

    $("#tableNotas tbody")
            .prepend($linha)
            .parent()
            .show();

    arrumarEfeitoZebra();
}

function arrumarEfeitoZebra(){
    $("#tableNotas tbody tr")
        .removeClass("linhaClara linhaEscura");

    $("#tableNotas tbody tr:odd").addClass("linhaClara");
    $("#tableNotas tbody tr:even").addClass("linhaEscura");
}

/// github.com/Falci/uem-js


/**
* Diz se o aluno foi aprovado ou reprovado
*/
function calcularMedia(){
    // var nota1 = document.form.nota1.value;
    var nota1 = parseFloat($("#nota1").val());
    var nota2 = parseFloat($("#nota2").val());

    var media = (nota1 + nota2) / 2;

    return media >= 6;
}







