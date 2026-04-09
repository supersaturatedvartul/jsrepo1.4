const pinput = document.getElementById('pname');
const searchbtn = document.getElementById('search');
const pokename = document.getElementById('pokename');
const resultpage = document.querySelector('.results');
const charter = document.querySelector('.chartclass');

searchbtn.addEventListener('click',function() {
    let pkname = pinput.value.trim();
    if (pkname.length === 0) {
        alert("Please enter a name");
    }
    else {
    fetcher(pkname);
    }
})

async function fetcher(name) {
    let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`); 
    if (request.status === 404) {
        let p = document.createElement('p');
        p.textContent = 'No Pokemon with such name.'
        resultpage.innerHTML = '<canvas id="myChart"></canvas>';
        resultpage.appendChild(p);
        resultpage.classList.remove('resultscard')
        resultpage.classList.add('errorcard');
        return;
    }

    let data = await request.json()
    const ctx = document.getElementById('myChart');
    const stats = data.stats || [];

    const labels = stats.map(item => item.stat.name);
    const values = stats.map(item => item.base_stat);

    pokename.textContent = data.name;
    
    if(window.myChart instanceof Chart) {
        window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label:'Stats',
                data:values,
                backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
            }],
        },
        options: {
            indexAxis: 'y',
        }
    })
    resultpage.classList.add('resultscard');
    charter.classList.add('chartset');
    resultpage.classList.remove('errorcard');
}
