
// Pedir un numero al usuario y ver 
// la tabala de multiplicar
// anteriores al numero digitado
// Ejemplo  Usuario = 3
// Tabla 1, Tabla 2, Tabla 3

let num = Number(prompt("Señor usuario, ingrese un número para multiplicar"))
for (let i = 1; i<=num; i++) {
    console.log(`La tabla del ${i}`);
        for (let j = 1; j<=10; j++) {
            console.log(`${i} X ${j} = ${i*j}`);
    }
    
}
