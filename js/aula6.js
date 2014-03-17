$(function(){

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

        }
    });

});


