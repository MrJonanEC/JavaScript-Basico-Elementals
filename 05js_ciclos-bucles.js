//********** CONDICIONES *******  

//**** WHILE ****
//(1)Repetir n veces un Texto
var contador = 10;
while (contador >= 0){
    console.log('While que se Repite',contador);
    contador--;                        //otra alternativa contador1 = contador1 - 1;
}

var contador1 = 0;
while (contador1 <= 10){
    console.log('While que se Repite',contador1);
    contador1++;                                    //otra alternativa contador1 = contador1 + 1;
}


//**** Do...WHILE ****
//(2)Repetir n veces un Texto
let j = 0; 
do { 
    j++; 
    console.log('Veces Repetidas Do..While', j); 
} while (j < 5);



//**** FOR ****
//(3)Repetir n veces el contenido de un vector

var nombres = ['Jonathan','Michael','Marcos','Nerea'];      
for(var i=0; i<nombres.length; i++){                        //Desde la posicion 0
    console.log('Hola',nombres[i]);
}

var apellidos = ['Raspiest','Bauman','Chamorro','Fradosky'];
for(var i=apellidos.length-1; i>=0; i--){           //Desde la ultima posicion
    console.log('Hola',apellidos[i]);
}

