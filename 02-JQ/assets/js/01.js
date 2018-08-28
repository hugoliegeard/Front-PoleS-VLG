/* -------------------------------------------------------------------

                        LA DISPONIBILITE DU DOM 🤠

        A partir du moment, ou mon DOM, c'est à dire, l'ensemble
        de l'arborescence de ma page HTML est complètement chargé ;
        je peux commencer à utiliser jQuery.

        Je vais mettre l'ensemble de mon code dans une fonction,
        qui sera appelée AUTOMATIQUEMENT ! Par jQuery lorsque le
        DOM sera entièrement défini.

        3 façons de faire :

-------------------------------------------------------------------- */

jQuery(document).ready(function() {
   // -- Ici, le dom est entièrement chargé; je peux procéder à mon code. 
   // ..
   // ..
   // ..
   // ..
});

// -- 2ème méthode
$(document).ready(function() { });

// -- 3ème méthode
$(function() {
    // ...
});

// -- 4ème méthode en ES6
$(()=>{
    // alert("Bienvenue dans ce cours JQ !");
    
    // -- En JS
    document.getElementById('texteEnJQ').innerHTML = "<strong>Mon texte en JS</strong>";

    // -- En JQ
    $('#texteEnJQ').html("Elies est trop fort ");

});


