const list = ['This is the first combination','This is the second one','You still clicking the button.','Ok,you win',"Repeat"]

const text = document.getElementById('text')
const change = document.getElementById('changer')

let count = 0
change.onclick = function() {
    if (count>=list.length) {
        count = 0
        text.textContent = "This is the Text you want to change"
    }
    else {
        text.textContent = list[count]
        count++
    }
}