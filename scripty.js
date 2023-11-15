$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const novaAtividade = $('#atividade').val();

        const novoItem = $('<li> </li>');
        $(`
            <a class="concluido">
                ${novaAtividade}
            </a>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');


        $('li').click(function(){
            console.log(novaAtividade);
            $('<li class="text-decoration:line-through"> </li>')
        });

        $('#atividade').val('');

    })

})