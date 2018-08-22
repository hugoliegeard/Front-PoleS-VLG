/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// -- 1. Initialisation des Variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();

// -- 2. Création d'une fonction
function identity() {

    // -- 3. Je demande à l'utilisateur son Prénom
    var prenom = prompt("Hello ! What is your name ?","<Saisir votre Prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    // -- 4. Je lui demande son age
    var age = parseInt(prompt("Hello" + prenom + " ! How old are you ?","<Saisir votre Age>"));
    console.log(age);
    console.log(typeof age);

    // -- 5. Déduire l'année de naissance et l'afficher dans un alerte
    var anneeDeNaissance = anneeActuelle - age;
    alert("AMAZING ! So you were born in " + anneeDeNaissance);

    // -- 6. Récapitulatif dans la page
    document.write("Hello " + prenom + " you're " + age + " years old !");

}

// -- 7. Executer la fonction
identity();