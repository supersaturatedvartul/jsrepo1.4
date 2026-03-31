const title = document.getElementById('notes-title');
const notes = document.getElementById('notes');
const submit = document.getElementById('store');
const notpag = document.getElementById('notepages');
submit.addEventListener('click',function () {
    const noteobject = {
    "title":title.value,
    "content":notes.value
}
    localStorage.setItem("Notes",JSON.stringify(noteobject));
    console.log(`The title is ${title.value} and the content is ${notes.value}`);

    const divnote = document.createElement('div');
    const notetitle = document.createElement('h1');
    const notescontent = document.createElement('p');
    const savedNote = JSON.parse(localStorage.getItem('Notes'));
    notetitle.textContent = savedNote.title;
    notescontent.textContent = savedNote.content;
    notpag.appendChild(divnote);
    divnote.appendChild(notetitle);
    divnote.appendChild(notescontent);
})

