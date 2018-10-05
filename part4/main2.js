/* Promise (Promessa) são códigos que não influenciam na linha do tempo do código js
Devolver um resultado verdadeiro ou falso em relação a requisição.
Resolver e reject também são funções. Resolver para sucesso e reject para fracasso.
*/

var myPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/denismsb11') 
        xhr.send(null)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    reject('Erro na requisição')
                }
            }
        }

    })
}

myPromise()
.then(function(response){console.log(response)})
.catch(function(error){console.warn(error)})