// ES5
//var nombre = "Julian Solo"
window.nombre = window.prompt("Ingrese su nombre")

// ES6
let email = prompt("Ingrese se email")
const hoy = prompt("Ingrese la fecha de hoy")

console.log(nombre)
console.log(email)
console.log(hoy)

////////////////////////////////////////7777

//ES5
//function saludar(){
//	alert("Hola, soy " + nombre + "... gracias por venir!")
//}

window.saludar = () => { //<-- Arrow Function
	window.alert("Hola, soy " + window.nombre + "... gracias por venir!")
}

//ES6
const saludar = function(){
	window.alert(`Hola, mi correo es ${email}... escribanme!`)
}

///////////////////////////////////////////////////////////////

//ES5
window.document.querySelector("h1").onclick = saludar

//ES6
window.document.querySelector("h2").onclick = function(){
	console.log("El objeto this es...")
	console.log(this)

	this.style.backgroundColor = "red"
}