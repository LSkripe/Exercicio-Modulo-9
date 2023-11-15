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


        $('a').click(function(){
            console.log(novaAtividade);
            $('<li style= "text-decoration: none"> </li>')
        });

        $('#atividade').val('');

    })

})