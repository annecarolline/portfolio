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

function criarOuAtualizarGraf(dadosChart,idChart) {
    const chartStatus = Chart.getChart(idChart); // Get existing chart instance by canvas ID

    if (chartStatus !== undefined) {
        chartStatus.destroy(); // Destroy it if it exists
    }

    let delayed;

    // Create a new chart
    const ctx = document.getElementById(idChart).getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: dadosChart,
        options: {
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
            }
        }
    });
}

const labels1 = ['Javascript','MySQL','PHP','Postgres','JQuery','CSS','Git','Composer','Outras'];
const dados1 = {
    labels: labels1,
    datasets: [{
        label: 'Principais habilidades em %',
        data: [12, 16, 18, 18, 12, 10, 8, 6, 2],
        backgroundColor: [
        'rgba(208, 73, 212, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(215, 59, 46, 0.7)',
        'rgba(34, 259, 94, 0.7)'
        ],
        borderColor: '#fff',
        borderWidth: 1
    }]
}

const labels2 = ['React.js','Vue.js','Oracle','SQL Server','Docker','Python','C#','Node','Redis','MongoDB','Postman','PhpUnit','Google Cloud','NPM'];
const dados2 = {
    labels: labels2,
    datasets: [{
        label: 'Outras habilidades em %',
        data: [7, 7, 7, 8, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7],
        backgroundColor: [
        '#FF6467',
        '#FF8904',
        '#FFB93B',
        '#FDC745',
        '#9AE630',
        '#05DF72',
        '#31D492',
        '#38D5BE',
        '#42D3F2',
        '#21BCFF',
        '#51A2FF',
        '#7C86FF',
        '#A684FF',
        '#C27AFF',
        '#E12AFB'
        ],
        borderColor: '#fff',
        borderWidth: 1
    }]
}

criarOuAtualizarGraf(dados1,'chart1');
criarOuAtualizarGraf(dados2,'chart2');

/**
   * Aplica o efeito glitch ao elemento HTML fornecido.
   * @param {HTMLElement} el
*/
function glitch(el) {
    // Salva o texto original
    if (!el.dataset.glitch) el.dataset.glitch = el.innerText;

    // Separa o texto em palavras
    const text = el.dataset.glitch;
    const words = text.split(' ');

    // Acha o tamanho da maior palavra, para definir quando parar o interval
    const stop = Math.max(...words.map((w) => w.length));

    // Limpa o interval anterior, se existir
    if (el.dataset.interval) clearInterval(Number(el.dataset.interval));

    // Mínimo de vezes que uma letra anima
    let min = 5;

    let iterations = 0;

    const interval = setInterval(() => {
        // Reconstroi o texto a cada intervalo com números aleatórios
        el.innerText = words
            .map((word) => {
              return word
                .split('')
                .map((letter, index) => {
                  // retorna a letra ou o número aleatório.
                  // cria um efeito de onda na animação com o ||
                  if (iterations > index + min || index > iterations) {
                    return letter;
                  } else {
                    return Math.floor(Math.random() * 10);
                  }
                })
                .join('');
            })
            .join(' '); // junta as palavras

        el.dataset.interval = String(interval);

        iterations++;
        // Para quando o total de iterações for maior que a maior palavra
        if (iterations >= stop + min) {
            clearInterval(Number(el.dataset.interval));
            el.innerText = text; // Volta ao estado inicial
        }
    }, 95); // Velocidade da animação
}

const glitchEl = document.querySelectorAll('.ef-glitch');
glitchEl.forEach((el) => {
    el.addEventListener('mouseover', () => {
        glitch(el);
    });
});