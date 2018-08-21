/* ------------------------------
        LA CONCATENATION 🐥
------------------------------ */ 

var DebutDePhrase = "Aujourd'hui ";
var DateDuJour = new Date();
var SuiteDePhrase = ", sont présent : ";
var NombreDeStagiaire = 10;
var FinDePhrase = " apprenants.<br>";

/**
 * Nous souhaitons maintenant, grâce à la concaténation,
 * afficher le tout en une phrase sur notre page !
 */

document.write( DebutDePhrase + DateDuJour.getDate() + '/' + (DateDuJour.getMonth() + 1) + '/' + DateDuJour.getFullYear() + SuiteDePhrase + NombreDeStagiaire + FinDePhrase );