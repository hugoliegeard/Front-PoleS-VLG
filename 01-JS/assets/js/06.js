/* ----------------------------
        LES FONCTIONS 😍
---------------------------- */

/**
 * Déclarer une fonction
 * NB : Cette fonction ne retourne aucune valeur
 * et ne prend pas de paramètres.
 */

function bonjour() {
    alert('Bonjour !');
}

/**
 * Je vais executer ma fonction "bonjour" et
 * déclencher ses instructions.
 */
bonjour();

// function nomDeMaFonction( argument 1, argument 2, argument n ) {
//     Les instructions
// }

function ditBonjour( prenom, nom ) {
    console.log(prenom);
    document.write('Bonjour <strong>' + prenom + ' ' + nom + '</strong> !');
}

// -- Executer une fonction avec des arguments
ditBonjour('Hugo', 'LIEGEARD');

/* ----------------
    EXERCICE :
    Créez une fonction permettant d'effectuer l'addition
    de deux nombre (nb1 et nb2).
---------------------------------- */

function addition( nb1, nb2 ) {
    return nb1 + nb2;
}

console.log( addition(10, 5) );