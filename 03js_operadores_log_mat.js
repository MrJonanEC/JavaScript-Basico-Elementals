//********** OPERACIONES *******   
//Para esta practica hemos escrito de forma *cualquiera* la declaracion de variables, tenemos los mismos resultados
//TEXTO
let nombre = 'Jon';
let apellido = 'Moreta';
let nombre_concatenado = 'Jon'+' '+'Moreta';      //Concatenación SOLO para string o char
let nombre_completo = nombre+' '+apellido;        //Concatenacion mediante el simbolo +
console.log(nombre_concatenado, nombre_completo)


let passwordFacebook = 'MrJonath4n47';
var escrito = 'estaesmicontraseña';
_acceso = passwordFacebook == escrito;
console.log(passwordFacebook,"==", escrito, _acceso)


//NUMERICOS
let num1 = 2;
var num2 = 3;
_resultado = num1 + num2;                       //Operaciones + - / * 
console.log(num1,"+", num2, _resultado)         
$comparacion = num1 > num2;                     //Comparaciones < =<  ==  !=   >  =>   
console.log(num1,">", num2, $comparacion)       //La comparacion da como resultado un Valor Boobleano True/False



//NUMERICOS LOGICOS         and&& or|| xor^ not!  (not~  este invierte con signo) 
_A = 6;
var B = 15;
let C = 1;
$D = 1;

_X = _A && B;                         //El resultado será el valor mas bajo o cercano al 0 y será 
var Y = C || $D;                      //OPERACION C OR D
let Z= !C && $D                       //OPERACION NOT C AND D
console.log(_A, 'AND', B, '=', _X)          
console.log(C, 'OR', $D, '=', Y)
console.log(!C, 'AND', $D, '=', Z)
