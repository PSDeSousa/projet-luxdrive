//Appeler le fichier JSON 
fetch("luxdrive_site_data_full.json")
    .then(function(response){
        if (!response.ok) {
        throw new Error("Erreur : le fichier JSON n’a pas pu être chargé.");
        }
        return response.json();
    })
    .then(function(data){
        //infos site
        let siteName = data.siteInfo.name;
        let description = data.siteInfo.description;
        //Navigation
        document.title = siteName;
        let navContainer = document.getElementById("navigation-bar");
        for (i = 0; i < data.navigation.length; i++){
            let nav = data.navigation[i];
            //crée un li
            let liPage = document.createElement("li");
            //ajoute la classe nav-item au li
            liPage.classList.add("nav-item");
            // indique ce que l'on met dans le li => ici un lien a
            let htmlNav = "<a class='nav-link active' aria-current='page' href='pages" + nav.url + ".html' title='Bienvenu chez LuxDrive'>" + nav.label + "</a>";
            //ajoute le a dans le li
            liPage.innerHTML = htmlNav;
            navContainer.appendChild(liPage);
        }
        //Accueil
        //Banner
        let rep="assets";
        let titleContainer = document.getElementById("home-title");
        titleContainer.textContent = data.pagesContent.Accueil.heroBanner.title ;
        let subtitleContainer = document.getElementById("home-subtitle");
        subtitleContainer.textContent = data.pagesContent.Accueil.heroBanner.subtitle ;
        let ctaContainer = document.getElementById("home-cta");
        ctaContainer.textContent = data.pagesContent.Accueil.heroBanner.cta ;
        let heroContainer = document.getElementById("home-hero");
        heroContainer.style.backgroundImage = "url(" + rep + data.pagesContent.Accueil.heroBanner.image + ")";
        //stats
        let statContainer = document.getElementById("stat-item");
        for (let j = 0; j < data.pagesContent.Accueil.stats.length; j++){
            let divStat = document.createElement("div");
            divStat.classList.add("col-4");
            divStat.classList.add("mt-5");
            let stat = data.pagesContent.Accueil.stats[j];
            
            let htmlStat = "<h3 class='display-8 text-center'>'" + stat.label + "'</h3>";
            htmlStat += "<p class='text-center mt-4'>'" + stat.value + "'</p>";
            divStat.innerHTML = htmlStat;
            statContainer.appendChild(divStat);
        }
        //testimonials
        let testimonialContainer = document.getElementById("home-testimonials");
        for (let k = 0; k < data.testimonials.length; k++){
            let divTestimonial = document.createElement("div");
            divTestimonial.classList.add("carousel-item");
            divTestimonial.classList.add("testimonial-card");
            let testimonial = data.testimonials[k];
            let notation = "";
            let l = 0;
            console.log(testimonial.note);
            while (l < testimonial.note){
                notation = notation + "⭐";
                l++;
            }
            console.log("<h3 class='display-4'>" + testimonial.name + " " + notation + "</h3>");
            let htmlTestimonial = "<h3>" + testimonial.name + " " + notation + "</h3>";
            htmlTestimonial += "<p class='text-md-start mt-3'>" + testimonial.message + "</p>";
            divTestimonial.innerHTML = htmlTestimonial;
            testimonialContainer.appendChild(divTestimonial);
        }
    })


let slide = document.querySelector(".carousel-item");
let back = document.querySelector(".carousel-control-prev");
let forward = document.querySelector(".carousel-control-next");
//variable index
let vIndex = 1;
function afficheImage(nIndex){
    slide.innerHTML = "<img src=" + tabImage[nIndex - 1].source + " alt=" + tabImage[nIndex - 1].alt + ">";
    divTestimonial.classList.add("active");
}
// affiche la première image au chargement
afficheImage(1);
// affiche image précédente au click
back.addEventListener("click",function(){
    if (vIndex === 1){
        vIndex = tabImage.length;
    }else{
        vIndex = vIndex - 1; 
    }
    afficheImage(vIndex);
});
// affiche image suivante au click
forward.addEventListener("click",function(){
    if (vIndex === tabImage.length){
        vIndex = 1;
    }else{
        vIndex = vIndex + 1;
    }
    afficheImage(vIndex);
});