/* --------------------------------
        LES BOUCLES 💀 👻️         
--------------------------------- */

/**
 * Pour i = 0 ; Tant que i est strictement
 *  inférieur ou égale à, 10 ; alors j'incrémente i de 1.
 */
for( let i = 0 ; i <= 10 ; i++ ) {
    document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
}

document.write("<hr>");

// -- Avec la boucle while

var j = 0;
while( j <= 10) {
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');
    // -- ATTENTION A NE PAS OUBLIER L'INCREMENTATION !
    j++;
}

/* -----------------------------
            EXERCICE
------------------------------ */

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];

/**
 * CONSIGNE : Grâce à une boucle FOR  ou autre..., affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

 var nb = Prenoms.length;
 for( let i = 0 ; i < nb ; i++ ) {
     console.log(Prenoms[i]);
 }

 console.log('---');
 
 var j = 0;
 while( j < Prenoms.length ) {
     console.log(Prenoms[j]);
     j++;
    }
    
    console.log('---');
    Prenoms.forEach(afficheUnPrenom);

    // -- ATTENTION A LA PERFORMANCE

    function afficheUnPrenom(prenom, i) {
        console.log(i + ' ' + prenom);
    }