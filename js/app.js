//CICLOS
for (let i = 001; i <= 005; i++) {
    let nombreIngresado = prompt("Ingresar nombre completo:");
    alert("Entrada  N° "+i+" Nombre: "+nombreIngresado);
}
//FUNCIONES - VARIABLES

    function sumar(numero1, numero2)
     {
         return numero1 + numero2
     }
    
     {  let numero1 = 1150;
        let numero2 = 170;
        let resultado = sumar(numero1, numero2);
         alert("Valor entrada(Incluye IVA) $" + (resultado));
     }
    
//CONDICIONALES - VARIABLES
   { var nombre, edad;
    nombre = prompt ('Por favor introduce tu nombre completo:');
    if (nombre =="") { alert ('No has introducido ningún nombre.'); }
    else { alert ('Hola '+nombre + '. Bienvenido a nuestra Discoteca Nocturna, que te diviertas.'); }
    edad = prompt ('¿Que edad tienes?');
    edad = Number(edad);
    if (edad >=1 && edad < 18) {alert ('Eres menor de edad, deberás ser acompañado por un adulto.');}
    else if (edad >=18 && edad <=100) {alert ('Tu lugar ah sido reservado con éxito.');}
    else {alert ('No has introducido un valor válido de edad. ( '+edad+')');}
    }



    

     