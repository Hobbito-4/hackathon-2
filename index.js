//ejercicio 0

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];

const usersMapped = users.map((date) => {
    return {
        fullname: `${date.name} ${date.surname}`,
        id: date.id
    }
})

console.log(usersMapped)


    

    



// ejercicio 1
let fruits = ["Apples", "Pear", "Orange", "grapes"];// insertar un nuevo valor en la "copia"
let shoppingCart = fruits;shoppingCart.push("Banana");// ¿Qué hay en las frutas?
console.log( fruits.length ); // 5 
// ejercicio 2
let music = [ "jazz", "Blues"];
console.log(music);
music.push("Rock-n-Roll");
console.log(music);
music.splice(1,1, "classics");
console.log(music);
music.splice(0,1);
console.log(music);
music.unshift("rap", "reggae");
console.log(music);
//ejercicio 3
/*let numA = prompt ("ingrese un número")
let numB = prompt ("ingrese otro número")

let sumar = function (a,b) {
let sumatoria= parseInt(a) + parseInt(b);
return sumatoria
}
*/

// ejercicio 4
let arr = [5, 3, 8, 1];
let filtered = arr.filter(arr => ( 1 <= arr && arr<= 3 ));
console.log(filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)
    //ejercicio 5
    let  frontend = ["HTML", "JavaScript", "CSS"];
console.log(  frontend );   
frontend.sort();
console.log(  frontend ); 
//ejercicio 6   
function Calculator() {

    this.methods = {
    
    "-": (a, b) => a - b,
    
    "+": (a, b) => a + b
    
    };
    
    this.calculate = function(str) {
    
    let split = str.split(' '),
    
    a = +split[0],
    
    op = split [1],
    
    b = +split[2];
    
    if (!this.methods [op]  || isNaN(a) || isNaN(b)) {
    
    return NaN;
    
    }
    
    return this.methods [op](a, b);
    
    };
    
    this.addMethod("*", (a, b) => a * b);
    this.addMethod("/", (a, b) => a / b);
    this.addMethod("**", (a, b) => a ** b); {
    
    this.methods [name] = func;
   
    };
    
    }
  

//ejercicio 7
/*Let mensaje;
if (login == 'Empleado') {
mensaje = 'Hola';
} else if (login == 'Director') {
mensaje = 'Saludos';
} else if (login == '') {
mensaje = 'Sin inicio de sesión';
} else {
mensaje = '';
}*/

var Empleado = true,
   
    access = Empleado ? "hola" : "error";

console.log(access);
var director = true,
   
    access = director ? "saludos" : "error";

console.log(access);
var x = false,
   
    access = x ? "hola" : "error de inicio de sesion";

console.log(access)

