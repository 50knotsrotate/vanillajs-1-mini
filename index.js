var count = 0;
var counter = document.getElementById('counter')
var body = document.getElementsByTagName('body')[0]
var main = document.getElementsByTagName('main')[0]

let buttons = document.getElementsByTagName('button')

function increase() {
    count++
    counter.innerHTML = count
}

function decrease() {
    count--
    counter.innerHTML = count
}

function reset() {
    count = 0
    counter.innerHTML = count
}

function selectTheme(theme) {
    body.className = theme
    main.className = theme;

    for (let button of buttons) {
        button.className = theme
    }



}