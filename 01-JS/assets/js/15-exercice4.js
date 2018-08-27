var membres = [
    {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
    {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
  ];

  // -- Récupération des différents éléments
  const pseudo            = document.getElementById('pseudo');
  const age               = document.getElementById('age');
  const email             = document.getElementById('email');
  const mdp               = document.getElementById('mdp');
  const submit            = document.getElementById('submit');
  const Bienvenue         = document.getElementById('Bienvenue');
  const InscriptionForm   = document.getElementById('InscriptionForm');

  const pseudoError   = document.getElementsByClassName('pseudoError')[0];
  const ageError      = document.getElementsByClassName('ageError')[0];

  // -- ETAPE 1 & 3

  pseudo.addEventListener('input', function  () {

      // console.log(pseudo.value);
      for ( let i = 0 ; i < membres.length ; i++ ) {

          // console.log( membres[i] );
          if ( pseudo.value === membres[i].pseudo ) {

              pseudoError.style.display = "block";
              submit.disabled = true;
              Bienvenue.textContent = '';

              break;

          } else {
              
              pseudoError.style.display = "none";
              submit.disabled = false;
              Bienvenue.textContent = 'Bienvenue ' + pseudo.value;
          }
      }

  });

  // -- ETAPE 2

  const majoriteLegale = 18;
  age.addEventListener('change', function () {

      if ( age.value >= majoriteLegale ) {

        ageError.style.display = "none";
        submit.disabled = false;

      } else {

          ageError.style.display = "block";
          submit.disabled = true;

      }

  });

// -- ETAPE 4

InscriptionForm.addEventListener('submit', function (e) {

    // -- Stopper la redirection HTTP
    e.preventDefault();

    // -- Créer un Objet membre à ajouter au tableau
    const membre = {
        'pseudo': pseudo.value,
        'age': age.value,
        'email': email.value,
        'mdp': mdp.value
    };

    // -- Ajout du membre dans le tableau
    membres.push(membre);
    console.log(membres);

    // -- Paragraphe de confirmation
    const p = document.createElement('p');
    p.innerHTML = "Merci " + pseudo.value + " !<strong>Tu es maintenant inscrit.</strong><br><br><u>Voici la liste de nos membres :</u>";
    document.body.appendChild(p);

    // -- Générer la liste des membres
    const ul = document.createElement('ul');
    for( let i = 0 ; i < membres.length ; i++ )  {

        let li = document.createElement('li');
        li.textContent = membres[i].pseudo + " : " + membres[i].age + " ans";
        ul.appendChild(li);
 
    }

    // -- Affichage sur la page
    document.body.appendChild(ul);
 
});