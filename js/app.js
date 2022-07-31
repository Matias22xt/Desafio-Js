// ARRAYS-MÉTODOS

 let productos = ["Arco Iris",
                  "Llaveros",
                    "Espejos",
                     "Animales"] ;
 
                     alert(productos); 
 let resultado = productos.push ("Lámparas");   
                     alert(productos);               
 


//CICLOS
for (let i = 001; i <= 005; i++) {
    let nombreIngresado = prompt("Ingresar nombre completo:");
    alert("Usuario  N° "+i+" Nombre: "+nombreIngresado);
}
//FUNCIONES - VARIABLES

    function sumar(numero1, numero2)
     {
         return numero1 + numero2
     }
    
     {  let numero1 = 1150;
        let numero2 = 170;
        let resultado = sumar(numero1, numero2);
         alert("Valor producto (Incluye IVA) $" + (resultado));
     }
    
//CONDICIONALES - VARIABLES
   { var nombre, edad;
    nombre = prompt ('Por favor introduce tu nombre completo:');
    if (nombre =="") { alert ('No has introducido ningún nombre.'); }
    else { alert ('Hola '+nombre + '. Bienvenido/a a nuestra Tienda, que te diviertas.'); }
    edad = prompt ('¿Que edad tienes?');
    edad = Number(edad);
    if (edad >=1 && edad < 18) {alert ('Eres menor de edad, deberás ser supervisado/a por un adulto.');}
    else if (edad >=18 && edad <=100) {alert ('Fuiste registrado/a con éxito.');}
    else {alert ('No has introducido un valor válido de edad. ( '+edad+')');}
    }
    

    

    



    

     