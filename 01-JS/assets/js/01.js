// alert('Mon fichier JS fonctionne !');

// Deux slash pour faire un commentaire uniligne

/*

    Ici, je peux faire un commentaire
    sur plusieurs lignes.

    RACCOURCI :
    SHIFT + ALT + A

*/

// -- 1 : Déclarer une variable JS
var Prenom;

// -- 2 : Affecter une Valeur
Prenom = "Hugo";

// -- 3 : Afficher la valeur de ma variable dans la console
console.log(Prenom);

/*------------------------------------------------
| ~ ~ ~ ~ ~ ~ LES TYPES DE VARIABLES ~ ~ ~ ~ ~ ~ |
------------------------------------------------*/

// -- typeof, me permet de connaitre le type de ma variable.
console.log(typeof Prenom);

// -- Déclaration et affectation d'un nombre.
var Age = 40;

// -- Connaitre son type
console.log(typeof Age);

/* --------------------------------------------------------------
|                   LA PORTEE DES VARIABLES                     |
|                                                               |   
|   Les variables déclarées directement à la racine du fichier  |   
|   JS sont appelées : variables GLOBALES.                      |   
|                                                               |   
|   Elles sont disponible dans l'ensemble de votre document,    |   
|   y compris dans les fonctions.                               |   
|                                                               |   
|   ###                                                         |   
|                                                               |   
|   Les variables déclarées à l'intérieur d'une fonction sont   |   
|   appelées : variables LOCALES.                               |   
|                                                               |   
|   Elles sont disponibles UNIQUEMENT dans le scope de la       |   
|   fonction.                                                   |   
|                                                               |   
\--------------------------------------------------------------*/   

// -- Les Variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens ( VRAI / FAUX )
var unBoolean = false; // true
console.log(unBoolean);
console.log(typeof unBoolean);

// -- Les Constantes

/**
 * La déclaration CONST permet de créer une constante accessible
 * UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée
 * par des réaffectations ultérieures. Une constante ne peut pas
 * être déclarée à nouveau...
 */

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// Je ne peux pas faire cela...
// USER = "Hugo";
// TypeError : Assignment to constant variable.

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/**
 * La fonction parseInt() pour retourner un Entier
 * à partir de mon string.
 */

 //  -- Pour convertir un Entier
 unNombre = parseInt(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

//  -- Pour convertir un Float
 unNombre = "12.55";
 unNombre = parseFloat(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

//  -- Pour convertir un nombre entier ou float en string
unNombre = 10;
var monString = unNombre.toString();
console.log(monString);
console.log(typeof monString);
