$(document).ready(function(){
    $('a').click(e => {e.preventDefault()})
    function carregarInicio(){
        $('body').append(
            $('<div>').addClass('apresentacao').addClass('conteudo-principal').append(
                $('<h1>').text('Bem vindo ao Valorant Info!')
            )
        );
    };
    function removerEstiloSelecionadoMenu(){
        $('.main-menu li').each(function () {
            $(this).removeClass('selected')
        });
    }
    function carregarItemMenu (tipo) {
        console.log('carregando função de ' + tipo)
    }
    
    function carregaAgentes() {
        $.ajax({
            url : 'https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR',
            method : 'GET'
        }).done(function(e){
            let agentes = e.data;
            $('.conteudo-principal').empty();
            $('.conteudo-principal').append($('<div>').addClass('agentes'))
            $('.conteudo-principal').append($('<div>').addClass('infoAgentes'))
            agentes.forEach(agente => {
                $('.agentes').append(
                    $('<div>').addClass('card').addClass('agente')
                    .append(
                        $('<img>').attr('src', agente.displayIcon)
                    )
                    .append(
                        $('<input>').attr('type','hidden').val(agente.displayName)
                    )
                    .append(
                        $('<div>').addClass('container')
                        .append(
                            $('<div>').addClass('display-name').text(agente.displayName)
                        )
                    )
                );
                $('.infoAgentes').append(
                    $('<div>').addClass('infoAgente').text(agente.description).attr('style','display:none;').attr('agente',agente.displayName)
                );
            });
            $('.agente').last().addClass('ultimo-agente');
            $('.agente').click(function () {
                $('.agentes').addClass('agente-selecionado');
                $('.agente').removeClass('agente-displayed');
                $(this).addClass('agente-displayed');
                let agenteClicado = $(this);
                $('.infoAgente').each(function (){
                    $(this).css('display', 'none');
                    if ($(this).attr('agente') == agenteClicado.find('input').val()){
                        $(this).css('display', 'block');
                    }
                })
            })
        })
    }
    function exibirInfoAgente(agente) {
        console.log(e)
    }
    function removeApresentacao () {
        $('.conteudo-principal h1').remove()
        $('.conteudo-principal').removeClass('apresentacao')
    }
    function criaMostrarInforAgente() {
        $('.agente').click(function(){
            exibirInfoAgente(this)
        })
    }
    $('#agentes-button').click(function () {
        removerEstiloSelecionadoMenu();
        $(this).addClass('selected');
        carregaAgentes();
        removeApresentacao();
        criaMostrarInforAgente();
    });
    $('#mapas-button').click(function () {
        removerEstiloSelecionadoMenu();
        $(this).addClass('selected');
        carregarItemMenu(this);
    })
    $('#armas-button').click(function () {
        removerEstiloSelecionadoMenu();
        $(this).addClass('selected');
        carregarItemMenu(this.attr('nome'));
    }
    )
    carregarInicio();
});
