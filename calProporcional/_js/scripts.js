const dataPlanos = [
    { id: 1, plano: 250, valor: 110 },
    { id: 2, plano: 350, valor: 130 },
    { id: 3, plano: 450, valor: 160 },
    { id: 4, plano: 500, valor: 144.33 },
    { id: 5, plano: 600, valor: 210 },
    { id: 6, plano: 700, valor: 177.67 }
];

function enviarFormulario(event) {
    event.preventDefault();

    // Obter valores selecionados
    const planoAtualSelecionado = document.getElementById('planoAtual').value;
    const planoNovoSelecionado = document.getElementById('planoNovo').value;
    const vencimentoSelecionado = document.getElementById('vencimento').value;
    

    // Obter preço do plano atual e plano novo com base no ID
    const precoPlanoAtual = obterPrecoDoPlano(planoAtualSelecionado);
    const precoPlanoNovo = obterPrecoDoPlano(planoNovoSelecionado);

    // Criar uma nova janela/página para exibir o resultado
    const novaJanela = window.open('', '_blank');
    novaJanela.document.write('<h1>Opções Selecionadas:</h1>');
    novaJanela.document.write('<p>Plano Atual: ' + precoPlanoAtual + '</p>');
    novaJanela.document.write('<p>Plano Novo: ' + precoPlanoNovo + '</p>');
    novaJanela.document.write('<p>Vencimento: ' + vencimentoSelecionado + '</p>');
}

function obterPrecoDoPlano(planoId) {
    const plano = dataPlanos.find(item => item.id === parseInt(planoId, 10));
    return plano ? plano.valor : 'Não encontrado';
}