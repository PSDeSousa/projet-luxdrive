// JavaScript : on attend que le formulaire soit soumis
document.getElementById('formulaire').addEventListener('submit', function(event) {
    // 🛑 Par défaut, le navigateur veut envoyer le formulaire et recharger la page
    // preventDefault() empêche cela : on reste sur la page, ce qui est utile pour faire du JS
    event.preventDefault();
    // 🎯 event.target représente l'élément HTML qui a déclenché l'événement
    // Ici, c'est le <form> lui-même
    const form = event.target;
    
    // 📥 On récupère la valeur du champ "prenom"
    // form.prenom = <input name="prenom"> (grâce à l’attribut name)
    // .value permet d'obtenir ce que l'utilisateur a saisi
    const prenom = form.prenom.value;
    
    // 📧 Même chose pour l'email
    const email = form.email.value;
    
    // 🖨️ On affiche les valeurs dans la console (dev tools du navigateur)
    console.log("Prénom :", prenom);
    console.log("Email :", email);
    });