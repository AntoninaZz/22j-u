function showHelp() {
    let help = document.getElementById("help");
    let btn = document.getElementsByClassName('help')[0];
    if(help.getAttribute('class').includes('hidden')){
        help.setAttribute('class', 'visible');
        btn.setAttribute('class', 'hide help');
    } else {
        help.setAttribute('class', 'hidden');
        btn.setAttribute('class', 'show help');
    }
}