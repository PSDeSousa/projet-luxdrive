// JavaScript : on attend que le formulaire soit soumis
document.getElementById('formulaire').addEventListener('submit', function(event) {
    //  Par défaut, le navigateur veut envoyer le formulaire et recharger la page
    // preventDefault() empêche cela : on reste sur la page, ce qui est utile pour faire du JS
    event.preventDefault();
    //  event.target représente l'élément HTML qui a déclenché l'événement
    // Ici, c'est le <form> lui-même
    const form = event.target;
    
    //  On récupère la valeur du champ "prenom"
    // form.prenom = <input name="prenom"> (grâce à l’attribut name)
    // .value permet d'obtenir ce que l'utilisateur a saisi
    const prenom = form.prenom.value;
    const nom = form.nom.value;
    const birthDate = form.jour + " " + form.mois + " " + form.annee;
    let genre = document.querySelector('input[name="genre"]:checked');

    if(genre){
        console.log("genre" + genre.value);
    }else{
        alert("Selectioner un genre svp !");
    }

    const coordonnee = form.coordonnee.value;
    //bouton submit
    //let submit = document.getElementById('submit');
    //submit.addEventListener('click',);
    //  On affiche les valeurs dans la console (dev tools du navigateur)
    console.log("Prénom :", prenom);
    console.log("nom :", nom);
    console.log("date de naissance :", birthDate);
    console.log("coordonnées :", coordonnee);
    });