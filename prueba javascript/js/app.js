// let nombre= "Basilisco"
// let curso= "ASIR"
// let edad=13

// edad+=10
// edad=edad+10 
// edad=++ (lo mismo)

// let edad=11

// if (edad > 17) {
//     console.log("puede beber")
    
// }
// else{ 
//     if (edad > 12) {
//     console.log("puede tomar cafe")
//     }
//     else console.log("no puede toomar cafe")
// }


// // cadena=""
// cadena = edad > 17 ? "puede beber" : "no puede beber";
// console.log(cadena)
// console.log(cadena)
// (esta manera es mas corta)

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")

// bucle
// let num=0
// while (num<=10) {
//     console.log(num)
//     num++
// }

// let num=1
// for(num=0;num<10;num++){
//     console.log(num)
// }




// variable
let numero=document.getElementById ("numero1")
let numero2=document.getElementById ("numero2")
let solucion=document.getElementById("solucion")

let run=document.getElementById("run")

// al pulsar  el boton Run, los dos numeros de la variable se multiplican y se muestran en la consola, y tambien debajo de las variables
// tambien las puede sumar con parseInt() (en las dos variables que quieras sumar)
run.addEventListener("click", (e) => {
    let num=(numero.value)
    let num2=(numero2.value)
let cadenaTotal=""
    for(let i=0;i<num2;i++){
        cadenaTotal=cadenaTotal+num+ "<br>"
        
        console.log("i vale:" +i+": "+num)
    }
    solucion.innerHTML=cadenaTotal
})


//  console.log(num2)
//     console.log(solu) 







