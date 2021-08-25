/* console.log("Condicionales")

let boolean= true;


 */





/* operadores relacionales */
/* 
        "<"     menor que
        ">"     Mayor que
        "<="    Menor o igual
        ">="    Mayor o igual
        "="     igual                           (Un igual es asignacion (como a una vairable o eso))
        "=="    igual igual                     (dos iguales es comparacion de valor)
        "==="   igual igual igual               (Comparacion de valor y el tipo de dato)(para que sea true tiene que ser excatamente igual)
        "!=="   distinto a igual igual          (invierte el valor)(negacion "not" nos va a convertir en lo contrario de lo que sea la afirmacion)
        "!==="  distinto a igual igual igual
        %        Operador de modulo


*/

/* Operadores logicos */

/* 
        "&"     AND
        "||"    OR


*/





/* let edad= 17;


if(edad > 23){
    console.log("mayor")
}
else{
    console.log("menor")
}
 */


/* 
let respuesta= prompt("Ingrese edad")
console.log(respuesta)

if(respuesta >= 18){
    alert("Podes manejar")
    console.log("podes manejar")
}
else{
    alert("no podes manejar")
    console.log("no podes manejar")
}

 */
/* 
    let edad=  17
    let valor= 54

    OR, o "||" evalua las condiciones y devuelve true si alguna se cumple
    OR si la primera es verdadera deja de analizar
    if (edad >= 18 || valor <= 54){ 
console.log("verdadero")
}
else{
    console.log("Falso")
}


&& evalua las dos condiciones y tienen que ser iguales

if (edad >= 18 && valor <= 54){ 
console.log("verdadero")
}
else{
    console.log("Falso")
}


*/
/* 
let respuesta= prompt("1.PIEDRA || 2.PAPEL || 3.TIJERA")
console.log(respuesta)

/* if (respuesta = 1){
    console.log("Salio papel, perdiste")
    alert ("Salio papel, perdiste")

}
else if (respuesta => 3){
    console.log("Salio piedra, perdiste")
    alert ("Salio piedra, perdiste")
}
else{
    console.log("Salio tijera, perdiste")
    alert("Salio tijera, perdiste")
}
 */
/*

let answer= prompt("Ingrese edad")
console.log(answer)

if(answer > 18){
    alert("Podes manejar")
    console.log("podes manejar")
}
else if( answer = 18 ){
    alert("PODES MANEJAR")
    console.log("PODES MANEJAR")
}
else{
    alert("no PODES MANEJAR")
    console.log("PODES MANEJAR")    
} */

/* PIEDRA PAPELO O TIJERAS **************************************************************************************************************/
/*
 let respuesta= prompt("1.PIEDRA || 2.PAPEL || 3.TIJERA")
 let aleatorio= console.log(Math.round(Math.random()*(3-1)+1))
console.log (respuesta)
console.log  (typeof respuesta) 

if (aleatorio == 1){
    console.log("Papel")
}
else if(aleatorio == 2){
    console.log("Piedra")
}
else if (aleatorio == 3){
    console.log("Tijera")
}

if(respuesta === "Piedra" || respuesta === "piedra" || respuesta === "pierda" || respuesta == 1 && aleatorio == 1 ){
        
    alert("Salio papel, perdiste ")
    console.log("Salio papel, perdiste ") 
}


else if(respuesta === "Papel"  || respuesta === "papel" || respuesta === "papeñ" || respuesta == 2){
    alert("Salio tijera, perdiste ")
    console.log("Salio tijera, perdiste ")
}
else if(respuesta === "Tijera" || respuesta === "Tijeras" || respuesta === "tijera" || respuesta === "tijeras" || respuesta == 3){
    alert("Salio piedra, perdiste ")
    console.log("Salio piedra, perdiste ")
}
else if(respuesta != 3 || respuesta != 2 || respuesta != 1){
    alert("Perdiste por ingresar un numero invalido")
    console.log("Perdiste por ingresar un numero invalido")
}
else {
    alert("Perdiste por abandono")
    console.log("Perdiste por abandono") 
}  */
/* PIEDRA PAPELO O TIJERAS **************************************************************************************************************/
/*MATH**************************************************************************************************************/
/*
let a= 2.90
let b= 2
console.log(Math)
console.log(Math.PI)
console.log(Math.abs(a))/* el valor absoluto no respeta los signos (por eso sale 2.90 y no -2.90) */
/*console.log(Math.ceil(a))/* redondea para arriba *//*
console.log(Math.floor(a))
console.log(Math.round(a))/* redondea bien */
/*console.log(Math.sqrt(25))/* da la raiz cuadrada del numero que ponga en los parentesis */
/*console.log(Math.random()*100)/* numero random dentro del 0 y 1(se lo puede multiplicar por 100 para que de entero) */
/*console.log(Math.round(Math.random()*100))/* aca ya los suelta redondeados */
/*console.log(Math.pow(3,2))/* el primero es la base *//* el segundo la potencia */
/*console.log(Math.round(Math.random()*(10-1)+1))/* numeros random dentro de un rango */


/*
let Nombre  ="Gael"
let Apellido="Paez"
let edad    ="16"
console.log(`Hola ${Nombre} ${Apellido} tu edad es ${edad}` )*//*  con backticks `` */

/*MATH**************************************************************************************************************/


/* BUENOS DIAS BUENAS TARDES BUENAS NOCHES **************************************************************************************************************/
/*
let hora = prompt("Ingrese su hora local")
console.log(hora)

if( /* hora >= 0600 || hora <= 1300 || *//* hora >= "00:06" || hora <= "12:00"  )  {
console.log("Buenos dias")

}
else if (/* hora >= 1301 || hora <= 1800 || */ /*hora >= "13:01" || hora <= "18:00"){
    console.log("Buenas tardes")

}
else{
    console.log("Buenas noches")

}*/



/* BUENOS DIAS BUENAS TARDES BUENAS NOCHES **************************************************************************************************************/




/* Realizar un programa que pida al usuario 2 numeros y determinar cual es el mayor(Hacer todas las pruebas posibles) Comprobar que siempre sean números.*/
/*let respuesta1= prompt("Ingrese un numero")
console.log(respuesta1)
let respuesta2= prompt("Ingrese otro numero")
console.log(respuesta2)

if(respuesta1 != 0,1,2,3,4,5,6,7,8,9 || respuesta2 != 0,1,2,3,4,5,6,7,8,9){
    console.log("INGRESE NUMEROS, LETRAS NO")

}
else{
    if(respuesta1 > respuesta2){
        console.log(respuesta1, "es mayor que", respuesta2)
    }
    else if(respuesta1 < respuesta2){
        console.log(respuesta2, "es mayor que", respuesta1)
    }
    else if(respuesta1 == respuesta2){
        console.log(respuesta2, "y", respuesta1, "Son iguales")
    }
}
*/
/*
console.log("Arrays")
const myArray =  new Array(3)/* 3 es el tamaño *//*
const myArray2=  [5,6,0.9,4,"hola", true,{num:3}]         /* este es el que vamos a usar *//* este y el de arriba son formas distintas de hacerlo */
/*
console.log(myArray)
console.log(myArray2.length)
console.log(myArray2[2])/* muestra el dato que esta en la posicion del valor del numero ingresado */
//console.log(myArray2.push(true))/* Agrega el valor agragado("true en este caso") al final del array */
//myArray2.unshift(HOLA) /* AGREGA CONTENIDO AL PRINCIPIO "HOLA" en este caso */
//myArray2.shift()/* ELIMINA EL PRIMER ELEMENTO DEL ARRAY */
//myArray2.pop(myArray2)/*Elimina el elemnto del final */

/*const URL="google.com"; /* const de Constante */
/*console.log(URL)*/ /*
URL="youtube.com" /* da error porque es una constante */
/*
let array =[ "pablo", "benjamin", "ricardo", "lucas", "juan", 1,6, true]
array.push(54,67, "ramiro", false)
console.log(array)
console.log(array.sort)/*"ordena" de cierta forma*/




//1- Crear un array vacio y rellenarlo con números aleatorios con el metodo correspondiente.
        //- Mostrar el array por consola.
/*
let random1=(Math.round(Math.random()*(10-1)*3))
let random2=(Math.round(Math.random()*(2+3)*2))
let random3=(Math.round(Math.random()*(1000-2)+3))
let random4=(Math.round(Math.random()*(10-1)+1))
let random5=(Math.round(Math.random()*(100-1)+1))

const Array = [random1,random2,random3,random4,random5]
console.log(Array);
*/



/*
let array=[];

array.length = 5;
console.log(array);
for (i = 0, longitud = array.length; i < longitud; i++) {
    let num= Math.floor(Math.random() * 100);
    array[i] = num;
    console.log(array[i])
}

*/
/*
4- Crea un array vacio.
-Definir el tamaño del array por medio de un prompt
-Introducir los nombres de mis compañeros/as de curso. por el prompt y pintarlos por consola.
*/ 


let array=[];
let respuesta1 = prompt("Ingrese tamaño del array");                            //Pide el tamaño del array 
console.log(respuesta1);                                                        //Imprime la respuesta por consola
/*if( respuesta1 = NaN){
    alert("error")
}*/

array.length = respuesta1;                                                      //le asigna el valor del prompt al lenght del array

parseInt(respuesta1)


if  (respuesta1 > 1){

    for ( i = 0, longitud = array.length; i < longitud; i++){                   //hace toda la tramoya para que ande
        array.push((prompt("Ingrese nombre de los campañeros")));               //pushea al array todo lo que sea ingresado por el prompt 
    }
    
    console.log(array);                                                         //imprime el array
    }

if  (respuesta1 == 1){
    array.push(prompt("Ingrese nombre del compañertio"));
    console.log(array)
}

//arreglar lo que se duplica, si se ingresa que el array tiene largo 2, en realidad va a ser 4
//con el shift no funciona


isNaN(/* una variable */);/* se fija si no es un numero */

prompt("Ingrese un numero","5");/* queda el 5 en el input */


console.warn("¡Cuidado!");
console.error("Error falso");

parseFloat();//puede convertir un string a comaflotante(float)
parseInt();

//Funciones

function sape(){ //escribo la funcion
    
    console.log("SAPE");
    console.warn("SAPE");
    console.error("SAPE");

}

sape();         //llama a la funcion



let saludo = () => {       //funcion flecha 

    console.log("Saludo")

};

salduo = () =>  {           //funcion flecha de otra manera

    console.log("saludo")

};


let saludo = (nombre) =>{ //lo que esta entre parentesis son los parametros

    console.log("Hola " + nombre); //saluda a el nombre

};

let funcionFlecha = nombre => {
    console.log("para pasar un solo parametro " + nombre);
};

let funcionFlecha = (nombre = "Humano") => {    //igualo el parametro a Humano porsi no me pasan ningun parametro y para que no diga undefined
    console.log("para pasar un solo parametro " + nombre);
};

