document.querySelector('#muda-tema-cor').addEventListener('click',mudaCorTema);
    
function mudaCorTema(){ 
    const elemento = document.querySelector(':root');
    const botao = document.querySelector('#muda-tema-cor');
    console.log(elemento.className);
    
    if (elemento.classList.toggle("light")){
        botao.setAttribute('src','./img/beach-umbrella.gif');
        botao.setAttribute('alt','Mudar tema para escuro.');
        document.querySelector('.bt-tema-cor .tooltiptext').innerHTML = 'Clique para mudar o tema para escuro.';
    }
    if (elemento.classList.toggle("dark")){
        botao.setAttribute('src','./img/night.gif');
        botao.setAttribute('alt','Mudar tema para claro.');
        document.querySelector('.bt-tema-cor .tooltiptext').innerHTML = 'Clique para mudar o tema para claro.';
    }
}