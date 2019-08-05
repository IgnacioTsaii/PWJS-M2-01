const crearProducto = (n, s, p, d) => { // <-- Argumentos

	let elProducto = new Object()
	elProducto.nombre = n
	elProducto.stock = s
	elProducto.precio = p
	elProducto.disponible = d

	// Metodos (Que hace...)
	elProducto.mostar = function(){
		window.document.write(`<p> Hay ${this.stock} unidades de
								 ${this.nombre} que valen ARS ${this.precio} </p>`)
	}

	return elProducto
} 

//////////////////////////////////////////////////////////////////////////////////////////

 //Usando variables
 let nombre = "Cafe Torrado"
 let stock = 600 
 let precio = 85.65
 let disponible = false 

//Usando Arrays
 let productoUno = ["Jugo de Naranja",480,15.45,true]

 //Usando objetos
 let productoDos = {
 	nombre : "Agua con Gas",
 	stock : 100,
 	precio : 175.60,
 	disponible : true
 }

 let productoTres = new Object() // <-- Objeto diferido 
 productoTres.nombre = "Alfajores de Maicena"
 productoTres.stock = 150
 productoTres.precio = 50.75
 productoTres.disponible = false

 let productoCuatro = crearProducto("Te Rojo", 900, 74.25, false) // <-- Parametros
 let productoCinco = crearProducto("Submarino", 650, 90.50, true)

productoCuatro.mostar()
productoCinco.mostar()

window.document.write(`Hay ${stock} unidades de ${nombre} que valen ARS ${precio} <br>`)

window.document.write(`Hay ${productoUno[1]} unidades de ${productoUno[0]} que valen ARS ${productoUno[2]} <br>`)

window.document.write(`Hay ${productoDos["stock"]} unidades de ${productoDos["nombre"]} que valen
						ARS ${productoDos["precio"]} <br>`)

window.document.write(`Hay ${productoTres.stock} unidades de ${productoTres.nombre} que valen ARS ${productoTres.precio} <br>`)

window.document.write(`Hay ${productoCuatro.stock} unidades de ${productoCuatro.nombre} que valen ARS ${productoCuatro.precio} <br>`)

window.document.write(`Hay ${productoCinco.stock} unidades de ${productoCinco.nombre} que valen ARS ${productoCinco.precio} <br>`)