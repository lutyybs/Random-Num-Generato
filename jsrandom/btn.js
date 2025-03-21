function fff(el){
    let menu = document.querySelector('#menu');
    let window = document.querySelector('.window');
    menu.classList.toggle('bx-x');
    window.classList.toggle('open');
}

function ttt(el){
    var c = Math.floor(Math.random() * 50)+1;
    document.getElementById('dom').innerHTML = c;
}