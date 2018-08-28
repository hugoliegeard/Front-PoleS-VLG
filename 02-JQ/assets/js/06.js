/* -----------------------------------------------
        LES SELECTEURS D'ENFANTS JQUERY
----------------------------------------------- */

$(function() {

    l = e => console.log(e);

    // -- Je souhaite selectionner toutes les divs de ma page
    l( $('div') );

    // -- Je souhaite sélectionner la balise nav de ma page
    l( $('#menu') );

    // -- En partant du menu, je souhaites, tous les éléments descendants direct (enfants) qui sont dans "nav".
    l( $('#menu').children() );

    // -- Parmi ces descendants, uniquement l'élément "ul"
    l( $('#menu').children("ul") );
    
    // -- En partant du "ul", je souhaite récupérer tous les éléments "li"
    l( $('#menu').children("ul").find('li') );
    l( $('#menu').find('li') );

    // -- Je souhaite récupérer UNIQUEMENT le 2ème élément "li"
    l( $('#menu').find('li').eq(1) );
    
    // -- Je souhaite connaitre le voisin immediat de mon "menu"
    l( $('#menu').next() );
    l( $('#menu').next().next() ); // Le voisin du voisin
    l( $('#menu').prev() ); // Le voisin d'avant

    l( $('#menu').parent() ); // -- Les parents

});