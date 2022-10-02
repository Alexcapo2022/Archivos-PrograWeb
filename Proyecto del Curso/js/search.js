var buscador = $("#tabless").DataTable();

$("#inputss-search").keyup(function(){
    
    buscador.search($(this).val()).draw();
    
    if ($("#inputss-search").val() == ""){
        $(".contentss-search").fadeOut(300);
    }else{
        $(".contentss-search").fadeIn(300);
    }
})