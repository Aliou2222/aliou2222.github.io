// imprimir en pantalla un numero aleatorio del 1 al 8
// function dameNumero(max){
//     let numero=Math.floor(Math.random() * max) + 1

//     return numero
// }


// NUMEROS ALEATORIOS
// let veces=1
// let numeros=[]
// let aqui=document.getElementById("solucion")
// while(veces<=6){
//     veces++
//     let variable=dameNumero(49)
//     if (numeros.indexOf(variable)>-1){

//     }
//     else numeros.push(variable)
// }
// console.log(numeros)


// Cifrado cesar
// let abece="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// // // los dos de abajo son lo mismo
// let frase="casa"
// // // let fraseArray=["c", "a", "s", "a"]
// // // console.log(frase[0]) //c
// // // console.log(frase[3]) //a
// let paso=3

// let nuevaFrase=""
// for(i=0; i<frase.length;i++){
//     console.log("voy a buscar la letra: " +frase[i])
//     let posicion=abece.indexOf(frase[i])
//     console.log("Esta en la posicion: "+ posicion)
//     // devuelve la neva letra que sera posicion + paso
//     let nuevaPosicion=posicion+paso
//     let nuevaLetra=abece[posicion + paso]
//     nuevaFrase=nuevaFrase+nuevaLetra
    
// }
// console.log("Su nuevaFrase es: " +nuevaFrase)



// generador de contraseñas seguras
// let caracteres = "abcdefghijklmnopqrstuvwxyz";
// let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let caracteresNumeros = "0123456789";
// let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

// function numeroAleatorio(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let num=numeroAleatorio(0,9)
// let letraEspecial=caracteresEspeciales[num=numeroAleatorio(0,30)]
// let password=num+letraEspecial
// console.log(password)