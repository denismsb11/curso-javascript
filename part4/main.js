/* AJAX é uma requisição assincrona feita em um back-end
Traz novas informações do servidor sem atualziar a página */

var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.github.com/users/denismsb11') 
xhr.send(null)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}
