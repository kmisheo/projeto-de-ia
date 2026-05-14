// Selecionando os botões pelos IDs
const btnClick = document.getElementById('btn-primario');
const btnColor = document.getElementById('btn-secundario');

// Evento de clique simples
btnClick.addEventListener('click', () => {
    alert('Você clicou no botão primário! 🎉');
});

// Evento para mudar a cor de fundo da página
btnColor.addEventListener('click', () => {
    const cores = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});
