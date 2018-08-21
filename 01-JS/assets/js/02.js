// -- Déclarer un tableau indexé
var monTableau  = [];
var myArray     = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Jonathan";
monTableau[2] = "Elies";
monTableau[3] = "Layla";

console.log(monTableau); // -- Affiche toutes les données du tableau
console.log(monTableau[1]); // Jonathan
console.log(monTableau[3]); // Layla

var nosPrenoms = [
    "Luc", 
    "Sabuj", 
    "Jean-Philippe", 
    "Alpha", 
    "Kévin"
];

console.log(nosPrenoms);

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 28
};

console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.nom);

var annuaireDesApprenants = [
    ["Hugo", "LIEGEARD", "0783 97 15 15"],
    ["Luc", "JOINVIL", "XXXX XX XX XX"],
    { 
        prenom: "Arnaud", 
        nom: "DOHOU", 
        tel: "XXXX XX XX XX" 
    },
    { 
        prenom: "Momo", 
        nom: "AIDOUNI", 
        tel: "XXXX XX XX XX"
    },
];

console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1][0]);
console.log(annuaireDesApprenants[1][1]);
// -- Ce n'est pas très pratique !!!
console.log(annuaireDesApprenants[2].prenom);
console.log(annuaireDesApprenants[2].nom);

console.clear();

var Contacts = [
    {
        prenom : "Hugo",
        nom: "LIEGEARD",
        coordonnees : {
            email: "wf3@hl-media.fr",
            tel : {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: "0783 97 15 15"
            },
            adresse: {
                rue: "35 Rue Jules Michelet",
                cp: "92700",
                ville: "Colombes",
                pays: {
                    code : "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom : "Rodrigue",
        nom: "NOUEL",
        coordonnees : {
            email: "rodrigue@hl-media.fr",
            tel : {
                fixe: "0596 145 569",
                fax: "0596 896 452",
                port: "0696 07 04 34"
            },
            adresse: {
                rue: "Quartier Sainte-Thérèse",
                cp: "97200",
                ville: "Fort-de-France",
                pays: {
                    code : "MQ",
                    nom: "Martinique"
                }
            }
        }
    },
    {
        prenom : "Elies",
        nom: "KEDIM",
        coordonnees : {
            email: "elies.k@hl-media.fr",
            tel : {
                fixe: "",
                fax: "",
                port: "07 89 45 12 56"
            },
            adresse: {
                rue: "Au Paradis",
                cp: "77777",
                ville: "Eden Ville",
                pays: {
                    code : "PA",
                    nom: "3ème Ciel"
                }
            }
        }
    }
];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

/* -----------------------------
        ~ ~ CONSIGNE ~ ~

    Réaliser une structure JSON
    permettant de stocker des
    recettes de cuisine.
----------------------------- */

var receipes = [
    {
        name: 'Tiramisu',
        category: 'Desserts',
        subCategory: 'Gateaux',
        price: 'Abordable',
        difficulty: 'Facile',
        plate: 8,
        starRating: 4.98462123,
        photoUrl: 'https://www.monlien.fr/verslaphoto.jpg',
        videoUrl: 'https://www.monlien.fr/verslavideo.mp4',        cooking: {
            preparation: '30min',
            time: '',
            temp: ''
        },
        ingredients: [
            {
                name: 'Sucre',
                quantity: 80,
                unit: 'g',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Café Expresso',
                quantity: 15,
                unit: 'cl',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Chocolat Cacao Amer',
                quantity: '1',
                unit: 'cuillère à soupe',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            },
            {
                name: 'Canelle',
                quantity: '1',
                unit: 'pincée',
                imgUrl: 'https://www.monlien.fr/versingredient.jpg'
            }
        ],
        instructions: [
            {
                name: 'Séparer les blancs des jaunes d\'oeufs.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Mélanger les jaunes avec le sucre roux et le sucre vanillé.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            },
            {
                name: 'Ajouter le mascarpone au fouet.',
                imgUrl: 'https://www.monlien.fr/versletape.jpg'
            }
        ]
    }
];

/* -------------------------------
        AJOUTER UN ELEMENT
-------------------------------- */

var Couleurs = ["Rouge", "Jaune", "Vert"];

console.clear();
console.log(Couleurs);

// -- push me permet d'ajouter un élément a la fin du tableau.
Couleurs.push('Orange');

// -- unshift le rajoute au début.
Couleurs.unshift('Bleu');

console.log(Couleurs);

/* -------------------------------------------
    RECUPERER ET SORTIR LE DERNIER ELEMENT
------------------------------------------- */

/**
 * La fonction pop() me permet de supprimer un ou plusieurs
 * élements de mon tableau et d'en récupérer la valeur.
 */
var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

/**
 * La même chose est possible avec le premier élément en utilisant
 * shift().
 * 
 * La fonction splice() vous permet de faire sortir un ou plusieurs
 * éléments.
 */
