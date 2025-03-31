alert("Coucou");
// 🔁 variable globale qui contiendra les données JSON
let donnees = [];

// 🎯 On récupère le formulaire et la liste UL dans le HTML
let form = document.getElementById('formUtilisateur');
let liste = document.getElementById('listeUtilisateurs');

// On charge le fichier JSON avec fetch
fetch('data.json')
  .then(function(reponse) {
    // On convertit le fichier JSON en tableau JavaScript
    return reponse.json();
  })
  .then(function(data) {
    // On stocke les données dans notre varibla
    donnees = data;

    // On affiche les utilisateurs dans la page
    afficherListe();
  })
  .catch(function(error) {
    // En cas d’erreur, on affiche dans la console
    console.error("Erreur lors du chargement du fichier JSON :", error);
  });
// Fonction pour afficher tous les utilisateurs dans la liste UL
function afficherListe() {
  // 🧹 On vide d’abord le contenu de la liste
  liste.innerHTML = "";

  // On parcourt le tableau de données
  for (let i = 0; i < donnees.length; i++) {
    let utilisateur = donnees[i];

    // On crée un élément LI (ligne de liste)
    let li = document.createElement('li');

    // On construit le contenu HTML avec concaténation
    let contenu = "<strong>" + utilisateur.nom + "</strong> (" + utilisateur.email + ")";
    contenu += " <button onclick='modifier(" + utilisateur.id + ")'>Modifier</button>";
    contenu += " <button onclick='supprimer(" + utilisateur.id + ")'>Supprimer</button>";

    // 🔧 On insère le contenu HTML dans le LI
    li.innerHTML = contenu;

    // On ajoute le LI dans la liste UL
    liste.appendChild(li);
  }
}