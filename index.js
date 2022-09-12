let botonUno=1
let botonDos=2
let botonTres=3
let botonCuatro=4
let botonCinco=5
let botonSeis=6
let botonSiete=7
let botonOcho=8
let botonNueve=9
let botonCero=0
let botonIgual="="
let botonPunto="."
let botonPi=π

let pantalla=document.getElementById("textoPantalla")

const botones = document.querySelectorAll("input");
console.log(botones);

botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        console.log(boton.value);
        agregarAPantalla =boton.value;
        console.log(agregarAPantalla);
        NuevaPantalla=pantalla.innerHTML+agregarAPantalla;
        console.log(NuevaPantalla);
        pantalla.textContent=NuevaPantalla;
        console.log(pantalla)
        
    })
})

//cuentas:

let suma =(num1,num2)=> num1+num2;
let resta =(num1,num2)=> num1-num2;
let multiplicacion =(num1,num2)=> num1*num2;
let division =(num1,num2)=> num1/num2;
