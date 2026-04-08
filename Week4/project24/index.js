const input = document.getElementById('userinput');
const searchbtn = document.getElementById('searchbtn');
const userimg = document.getElementById('userimg');
const username = document.getElementById('username');
const userbio = document.getElementById('userbio');
const following = document.getElementById('userfollowing');
const followers = document.getElementById('userfollowers')
const login = document.getElementById('loginname');
const results  = document.querySelector('.results');
const mainurl = document.getElementById('url');

searchbtn.addEventListener('click',function() {
    let userin = input.value.trim();
    if (userin.length === 0 || userin === '') {
        alert("Please Enter a Valid Name");
    }
    fletcher(userin);
});

async function fletcher(name) {
    try {
        let request = await fetch(`https://api.github.com/users/${name}`);
        if (request.status === 404) {
            let p = document.createElement('p');
            p.textContent = "No user with Such Name Found!!"
            if (results.firstChild) {
            results.removeChild(results.firstChild);
            }
            results.appendChild(p);
            results.classList.add('errorcard');
            return;
        }
        let data = await request.json()
        username.textContent = data.name;
        login.textContent = data.login;
        if (data.bio !== null) {
            userbio.textContent = data.bio;
        }
        let url = data.avatar_url;
        console.log(url);
        userimg.innerHTML = `<img src=${url} alt='User Img' height=200px width=200px style="border-radius:50%">`
        followers.textContent = 'Followers: ' + data.followers;
        following.textContent = 'Following: ' +data.following
        mainurl.innerHTML = `<a href="${data.html_url}" target='_blank'>Check out the Github: ${data.name}</a>`
        results.classList.add('resultcard');
    } catch (error) {
        let p = document.createElement('p');
        p.textContent = error.message;
        if (results.firstChild) {
        results.removeChild(results.firstChild);
        }
        results.appendChild(p);
        results.classList.add('errorcard');
    }
}
