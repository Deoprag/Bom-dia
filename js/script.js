function carregar() {
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12) {
    // BOM DIA
    msg.innerHTML += `<p>Bom dia!</p>`
    img.src = 'assets/manha.png'
    document.body.style.background = '#b1be2f'
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    msg.innerHTML += `<p>Boa tarde!</p>`
    img.src = 'assets/tarde.png'
    document.body.style.background = '#e2a674'  
} else if (hora >= 0 && hora <= 5){
    // BOA MADRUGADA
    msg.innerHTML += `<p>Boa madrugada!</p>`
    img.src = 'assets/madrugada.png'
    document.body.style.background = '#004794'  
} else {
    // BOA NOITE
    msg.innerHTML += `<p>Boa noite!</p>`
    img.src = 'assets/noite.png'
    document.body.style.background = '#1c3343'
}
}
