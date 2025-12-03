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

document.querySelector('#muda-tema-cor').addEventListener('click',mudaCorTema);
//document.querySelector('#muda-tema-cor').removeEventListener('click',mudaCorTema);


const ctx = document.getElementById('myChart');
const labels = ['Javascript','MySQL','PHP','Postgres','JQuery','CSS','Git'];
const dados = {
    labels: labels,
    datasets: [{
        label: 'Principais habilidades técnicas',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
        'rgba(208, 73, 212, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(227, 162, 243, 1)',
        'rgb(255, 205, 86)',
        'rgb(153, 102, 255)',
        'rgb(75, 192, 192)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 159, 64)'
        ],
        borderWidth: 1
    }]
}

let delayed;

new Chart(ctx, {
    type: 'bar',
    data: dados,
    options: {
        indexAxis: 'y',
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});