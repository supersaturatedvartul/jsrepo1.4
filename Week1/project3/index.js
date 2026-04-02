const change = document.getElementById('color')

let count = 0
// change.onclick = function() {
//     count++
//     if (count==1) {
//         document.body.style.background = "blue";
//     }
//     else if (count==2) {
//         document.body.style.background = "red";
//     }
//     else if (count == 3) {
//         document.body.style.background = "yellow"
//     }
//     count = count %3
// }

color = ['red','blue','green']

change.onclick = function() {
    document.body.style.background = color[count]
    count = (count+1) % color.length
}