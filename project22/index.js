const key = "Replace_this_with_your_api_key";
const container = document.querySelector('.container');

async function fetcher() {
    let request = await fetch(`https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=${key}`);
    let data = await request.json();

    data.articles.forEach(element => {
    let p = document.createElement('p');
    p.textContent = element.title;
    container.appendChild(p);
});
}


fetcher();