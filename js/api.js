function getAgentes (){
    $.ajax({
        'url' : 'https://valorant-api.com/v1/agents',
        'type' : 'GET',
        'language' : 'pt-br'
    }).done(function(e){
        return e.data;
    })
}
function getAgenteByID(id){

}