$(function(){

    // validar o formulario
    $("#formCidade").validate({
        errorClass: "invalido",
        errorElement: "span",
        rules: {
            estado: {required: true},
            cidade: {required: true},
            nota:{
                required: true,
                min: 0,
                max: 10
            }
        },
        messages: {
            estado: "Selecione o estado",
            cidade: {
                required: "Selecione a cidade"
            },
            nota: {
                required: "Informe uma nota",
                min: "O valor precisa ser maior ou igual a 0",
                max: "O valor precisa ser menor ou igual a 10"
            }
        }
    });





    // elem = HTML (input)
    $("[data-mascara]").each(function(i, elem){
        var $elem = $(elem); // transforma em jQuery
        var mascara = $elem.data("mascara");

        $elem.mask(mascara)
    
    });

    // registrar funções que serão executadas em todos as
    // chamadas ajax
    $(document).ajaxStart(function(){
        $.blockUI({message: "Carregando"});

    }).ajaxStop($.unblockUI);

    // 1) carregar a lista de estados por ajax
    $.ajax({
        url: "http://iad.falci.me/curso/ajax/estado.json",
        dataType: "json",
        success: function(lista){
            var $estado = $("#estado");

            // foreach
            for(var index in lista){
                var item = lista[index];

                $option = $("<option></option>");
                $option.val( item.id )
                       .html( item.nome );

                $estado.append( $option );
            }

            bindEstado();
        }
    });

});

function bindEstado(){
    $("#estado").on("change", function(){
        // carregar lista de cidades;
        var estadoSelecionado = $("#estado").val();

        carregarCidades(estadoSelecionado);

    });

}

function carregarCidades(estadoSelecionado){
    var $cidade = $("#cidade").html("")
            .attr("disabled","disabled")
            .addClass("loading")
            .append("<option>Carregando...</option>");
    

    $.ajax({
        url: "http://iad.falci.me/curso/ajax/cidade.json",
        dataType: "json",
        data: {
            estado: estadoSelecionado
        },
        success: function(listaCidade){
            $cidade.removeAttr("disabled").html("")
                   .removeClass("loading");

            for(var i in listaCidade){
                var item = listaCidade[i];
                var $op = $("<option />")
                                .val( item.id )
                                .html( item.nome );

                $cidade.append($op);
            }
        }
    });

}
