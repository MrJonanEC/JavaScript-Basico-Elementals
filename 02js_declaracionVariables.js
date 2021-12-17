//**********VARIABLES EN JS*******     

nombreusuario = "Jonathan";         //NO se recomienda hacerlo de esta forma
var user_name = 'Eduardo';          //es el mas usado RECOMENDADO
let nom_utilisateur = "Joseph";     //menos usado, mas complejo

nombreusuario = 'Mirian';
user_name = "Carolina";
nom_utilisateur = "Michael";

var estado ;            //para una variable booleana
estado = true;

const PI = 3.141592;                //CONST  no permite modificar el valor inicial
// PI = 23656.25698;    esto no se podría hacer para este tipo de variable


//hay que tener en cuenta que las variables NO pueden comenzar con @  ni ningun Numero
//Para esto usamos estas dos opciones   _  $
// OJO!!!! SIEMPRE QUE LAS UTILICEMOS LLEVARAN EL  _  $
_variable01 = 23568.12;
$variable02 = false;
_variable03 = "string o texto";
$variable04 = [_variable01,$variable02,_variable03];

var Jonathan = {
    "nombre_usuario": 'Jonathan',
    "score": 1200.00,
    "tiempo": 2,
    "adulto": true,
    "langues": ['fr', 'en', 'pt', 'es']
}


console.log(nombreusuario, user_name, nom_utilisateur, estado, PI, $variable04, Jonathan)      
//Abrimos en el navegador el index.html, Ispeccionamos -->Console, y revisamos QUE NOS ARROJA



