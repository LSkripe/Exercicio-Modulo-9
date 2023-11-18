$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaAtividade = $('#atividade').val();

        const novoItem = $('<li> </li>');
        $(`
            <a>
                ${novaAtividade}
            </a>
        `).appendTo(novoItem);

        $(novoItem).appendTo('#listaTarefas'); // seletor para #listaTarefas

        $('#listaTarefas').on('click', 'li', function(){ // configuração do evento de click na atividade
            $(this).toggleClass('concluido');
        });

        $('#atividade').val('');

    })

})