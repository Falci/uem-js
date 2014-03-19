$(function(){

    $("#botao").on("click", function(){
        mostrarMensagem("Quer café?");

    });


    $("#dob").datepicker();
    $("#tabs").tabs();
    $("#efeitoAccordion").accordion({
        heightStyle: "content"
    });

    $("button").button();
    $("#quadro").draggable();

    var bancoDeDados = ["Fernado", "Maria", "José"];
    $("#autocomplete").autocomplete({
        source: bancoDeDados

    }).on("change", function(){
        if( $(this).val() == "" ){
            $(this).addClass("ui-state-error")
        } else {
            $(this).removeClass("ui-state-error")
        }

    });
});


function mostrarMensagem(texto){
   $("<div />")
        .attr("title", "Mensagem")
        .html(texto)
        .dialog({
            modal: true,
            buttons: {
                Ok: function(){
                    $(this).dialog('close')
                }
            }
        });

}
