//********** CONDICIONES *******  

//CONDICIONES DE TEXTO
var contrasenaFB = 'MrJonath4n47';
var intento01 = 'miconstrasena';
var intento02 = 'MrJonath4n47';
var acceso;

var verificar = contrasenaFB == intento02;
if (verificar == true){              //Primera Forma de hacerlo CORRECTA
    acceso = 'Contraseña correcta';
    console.log(acceso)
} else{
    acceso = 'Contraseña incorrecta';
    console.log(acceso)
}               
 
if (contrasenaFB != intento01){          //de otra forma: Cuando NO ES IGUAL
    acceso = 'Contraseña incorrecta';
    console.log(acceso)
}

if (contrasenaFB == intento02){          //de otra forma: Cuando ES IGUAL
    acceso = 'Contraseña Correcta';
    console.log(acceso)
}


var tarjeta = 'debito';
switch(tarjeta){
    case 'credito':
        console.log('CREDITO Recargo del 9%')
        break;
    case 'debito':
        console.log('DEBITO Recargo del 6%')
        break;
    default: 
        console.log("PAGO EFECTIVO"); 
        break;  
}

//CONDICIONES NUMÉRICAS OPERACIONALES
//Calificaciones: [>70] Sigue Practicando [>30] Practica mas - OTRO: pide perdon y vete

var puntuacion = 80;

if(puntuacion >= 70){
    console.log('Sigue Practicando')
} else if(puntuacion >= 30){
    console.log('Practica más')
} else{
    console.log('Pide perdon y vete')
}


var tarjeta = 2 ;
switch(tarjeta){
    case 1:
        console.log('Seleccionaste OPCION 1');
        break;
    case 2:
        console.log('Seleccionaste OPCION 2');
        break;
    case 3:
        console.log('Seleccionaste OPCION 3');
        break;  
}


var edad = 11;
edad = prompt ('Por favor introduce edad:');            //Introduces un valor en pantalla
if (edad =="") { alert ('No has introducido edad'); }   //Imprime en Interfaz  ALERT
edad = Number(edad);                                    //Convertimos a valor numerico
        switch (edad) {
            case 0: alert ("Menor de edad"); break;
            case 17: alert ("Menor de edad");break;
            case 18: alert ("Está justo en la mayoría de edad"); break;
            case 65: alert ("Está en la edad de jubilación"); break;
            default: alert ("Edad sin importancia"); break;
        }
