document.addEventListener('DOMContentLoaded', function () {
    // Seletores voltados para o painel de Controle Biológico
    const botaoControle = document.getElementById('btn-controle-biologico');
    const painelManejo = document.getElementById('painel-manejo-pragas');

    // Alternar a exibição do painel de controle de pragas
    botaoControle.addEventListener('click', function () {
        botaoControle.classList.toggle('rotacao-icone');
        painelManejo.classList.toggle('exibir-painel');

        // Correção da acessibilidade: convertendo o booleano explicitamente para string
        const estaExpandido = botaoControle.getAttribute('aria-expanded') === 'true';
        botaoControle.setAttribute('aria-expanded', String(!estaExpandido));
    });
    
    // Controles de monitoramento e dados
    const btnAumentarDados = document.getElementById('btn-aumentar-dados');
    const btnDiminuirDados = document.getElementById('btn-diminuir-dados');
    const btnModoNoturno = document.getElementById('btn-modo-noturno'); // Antigo alto-contraste, útil para campo à noite

    let escalaVisual = 1;

    // Aumentar o tamanho do texto do monitoramento
    btnAumentarDados.addEventListener('click', function () {
        escalaVisual += 0.1;
        document.body.style.fontSize = `${escalaVisual}rem`;
    });

    // Diminuir o tamanho do texto do monitoramento
    btnDiminuirDados.addEventListener('click', function () {
        // Evita que a fonte diminua demais e fique ilegível
        if (escalaVisual > 0.5) {
            escalaVisual -= 0.1;
            document.body.style.fontSize = `${escalaVisual}rem`;
        }
    });

    // Alternar para modo leitura noturna (comum em monitoramento de campo)
    btnModoNoturno.addEventListener('click', function () {
         document.body.classList.toggle('modo-campo-noturno');
    });
});