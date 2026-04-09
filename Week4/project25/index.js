const input = document.getElementById('inputv');
const searchbtn = document.getElementById('searchbtn');
const hp = document.getElementById('hpstat');
const atk = document.getElementById('atkstat');
const def = document.getElementById('defstat');
const spatk = document.getElementById('spastat');
const spdef = document.getElementById('spdstat');
const speed = document.getElementById('speedstat');
const results = document.querySelector('.results');
const pokename = document.getElementById('pname');

searchbtn.addEventListener('click',function () {
    let name = input.value.trim();
    if (name.length === 0) {
        alert("Please enter name of pokemon");
    }
    else {
        pfetcher(name);
    }
})

async function pfetcher(name) {
    try {
        let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    if (request.status === 404) {
        let p = document.createElement('p');
        p.textContent = "Error Not Found"
        results.innerHTML = '';
        results.appendChild(p);
        results.classList.add('errorcard');
        return;
    }
    let data = await request.json();
    pokename.textContent = data.name;
    hp.textContent = "HP: " +data.stats[0].base_stat;
    atk.textContent = "Attack: " + data.stats[1].base_stat;
    def.textContent = "Defense: " + data.stats[2].base_stat;
    spatk.textContent = "Sp. Attack: " + data.stats[3].base_stat;
    spdef.textContent = "Sp. Defense: " + data.stats[4].base_stat;
    speed.textContent = "Speed: " +data.stats[5].base_stat;
    results.classList.add('resultscard');

    console.log(data);
    console.log(data.name);
    console.log('HP: ' + data.stats[0].base_stat)
    console.log('Attack: ' + data.stats[1].base_stat)
    console.log('Defense: ' + data.stats[2].base_stat)
    console.log('Sp_Atk: ' + data.stats[3].base_stat)
    console.log('Sp_Def: ' + data.stats[4].base_stat)
    console.log('Speed: ' + data.stats[5].base_stat)
    } catch (error) {
        results.innerHTML = '';
        let q = document.createElement('p');
        q.textContent = 'Error: ' + error.message;
        results.appendChild(q);
        results.classList.add('errorcard');
    }
}
