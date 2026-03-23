let numero=document.getElementById ("numero")
let boton=document.getElementById ("boton")
let resultado=document.getElementById("resultado")

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