//********** FUNCIONES *******  

function Saludo(nombres){                       //ingresamos una variable en el argumento (también puede quedar vacio)
    console.log('Hola que tal'+' '+nombres);
}
Saludo('Jonathan');


function SumaValores(n1,n2){                       //suma de 2 numeros
    let suma =n1 + n2;
    console.log(n1 +' + '+ n2 +' = '+suma);
}
SumaValores(5,8);

function NombresVector(arreglo){                  //Extrae los nombres de un vector/array      
    for(var i=0; i<arreglo.length; i++){                        
        console.log('Hola ',arreglo[i]);
    }
}
let vectornombres = ['Jon','Marta','Jorge','Xavy','Pato','Caludia','Carlota'];
NombresVector(vectornombres);
