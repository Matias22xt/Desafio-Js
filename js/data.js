// Declaracion de Clase, creacion de objetos y array
class Adornos {
    constructor(id,modelo, medidas, imagen, precio,) {
         this.id = id
         this.modelo = modelo
         this.medidas = medidas
         this.imagen = imagen
         this.precio = precio
          }
}

const adorno1 = new Adornos (1,'Arco Iris', `5 unidades-15cm x 10cm.`, 'src="./img/arcoiris.jpeg"' , 3500,)
 const adorno2 = new Adornos (2,'Espejos',`40cm x 40cm.`, 'src="./img/espejo.jpeg"', 5500,)
 const adorno3 = new Adornos (3,'Llaveros', `5 unidades-15cm.`, 'src="./img/llavero.jpeg"', 2500,)
