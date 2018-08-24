/*---------------------------------------------
        LA MANIPULATION DES CONTENUS 🚸
---------------------------------------------*/

var l = function(e) { console.log(e) }
l = e => console.log(e)

// -- Je souhaite récupérer mon lien Google... Comment procéder ?

const google = document.getElementById('google');
l(google);

// -- Maintenant, je souhaite accéder aux informations de ce lien...

    // -- A : Le lien vers lequel pointe la balise
    l( google.href );

    // -- B : l'ID de la Balise
    l( google.id );

    // -- C : La classe de la Balise
    l( google.className );

    // -- D : Le texte de la balise
    l( google.textContent );

    /**
     * Maintenant, je souhaite modifier le texte de mon lien !
     */

     google.textContent = "Mon lien vers GooOoOoOooooOogle !";

     /* ---------------------------------
        AJOUTER UN ELEMENT DANS MA PAGE
     ----------------------------------*/

     /**
      * Nous allons procéder en deux étapes :
      * 
      * 1. La fonction document.createElement() va permettre
      * de générer un nouvel élément dans le DOM ; que je
      * pourrai modifier par la suite avec les méthodes
      * que nous venons de voir...
      * 
      * PS : Ce nouvel élément est placé en mémoire !
      * 
      * 2. L'ajouter à la page.
      * 
      */

// --Définition de l'élément
var span = document.createElement('span');

// -- Si je souhaite lui donner un ID
span.id = "monSpan";

// -- Si je souhaite lui attribuer du contenu
span.textContent = "Mon Beau Texte en JS !";

// -- Je l'ajoute à la page
google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

var h1 = document.createElement('h1');
var a  = document.createElement('a');
a.textContent = "Le PoleS c'est Génial !";
a.href = "#";
h1.appendChild(a);
document.body.appendChild(h1);
a.style.color = "red";
a.style.textDecoration = "none";