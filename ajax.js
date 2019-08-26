const get = function (url) {

    let promesa = new Promise(function (resolve,reject) {

        let ajax = new XMLHttpRequest()
        ajax.open("GET",url)
        ajx.onload = ???
        ajax.onerror = ?????
        ajax.send()

    })

}

/* Modelo final */
get("https://api.myjson.com/bins/1giaf3").then(function () {

})