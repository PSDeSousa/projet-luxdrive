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
        let divTestimonial = document.querySelector(".testimonial-card")
        let back = document.querySelector(".carousel-control-prev");
        let forward = document.querySelector(".carousel-control-next");
        //variable index
        let vIndex = 0;
        function afficheImage(nIndex){
            let testimonial = data.testimonials[nIndex];
            let notation = "";
            let l = 0;
            while (l < testimonial.note){
                notation = notation + "⭐";
                l++;
            }
            let htmlTestimonial = "<h3>" + testimonial.name + " " + notation + "</h3>";
            htmlTestimonial += "<p class='text-md-start mt-3'>" + testimonial.message + "</p>";
            divTestimonial.innerHTML = htmlTestimonial;
            //testimonialContainer.appendChild(divTestimonial);
        }
        // affiche la première image au chargement
        afficheImage(0);
        // affiche image précédente au click
        back.addEventListener("click",function(){
            if (vIndex === 0){
                vIndex = data.testimonials.length-1;
            }else{
                vIndex = vIndex - 1; 
            }
            afficheImage(vIndex);
        });
        // affiche image suivante au click
        forward.addEventListener("click",function(){
            if (vIndex === data.testimonials.length-1){
                vIndex = 0;
            }else{
                vIndex = vIndex + 1;
            }
            afficheImage(vIndex);
        });
           //footer
           let footlinks = document.getElementById("foot-links");
           let footsocials = document.getElementById("foot-socials");
           for (let k = 0; k < data.pagesContent.Accueil.footer.links.length; j++){
               let liLinks = document.createElement("li");
               liLinks.classList.add("col-4");
               liLinks.classList.add("mt-5");
               let links = data.footer.links[j];
               
               let htmlStat = "<li><a href=" + links.url + ">" + links.label + "</a></li>"
               divStat.innerHTML = htmlStat;
               statContainer.appendChild(divStat);
           }
    })