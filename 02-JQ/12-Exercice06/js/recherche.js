/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/

// -- Chargement du DOM ...
$(function() {
	
    // -- 1. Ecouter la saisie de l'utilisateur
    $('#search').on('change', function(){

        // -- 2. Recuperation de la valeur saisie
        const search = $(this).val();
        console.log(search);

        // -- 3. Récuperer la liste des contacts depuis l'API
        $('.resultat').slideUp();
        $('.resultat').empty();

        $.ajax('https://jsonplaceholder.typicode.com/users')
        .done(function(users){

            // console.log(users);

            // -- 4. On parcours le tableau d'utilisateurs
            
            for(let i = 0; i < users.length; i++){
                //console.log(users[i]);

                // -- 5. Récupération de l'utilisateur
                var user = users[i];

                // -- 6. Je filtre mon tableau.
                                
                if(search === user.username ||search === user.name || search === user.email || search === user.phone ){

                    $(`
                        <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${user.name} </p>
                                <p>Username : ${user.username} </p>
                                <p>Email : ${user.email} </p>
                                <p>Téléphone : ${user.phone} </p>
                            </div>
                        </div>
                    `).appendTo($('.resultat'));
                    
                    
                } // -- Fin du if
                
            } // -- Fin du for()
            
            $('.resultat').unmark().mark(search);
            $('.resultat').slideDown();

        }); // -- Fin du $.ajax

    }); // -- Fin du search

}); // -- Fin du function