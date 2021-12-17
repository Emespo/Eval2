//Lancer le dé

    // Je récupère les éléments du DOM dont j'aurai besoin
        let lancer = document.getElementById('charger')
        let actif = document.querySelector('actif');
        actif = Jinx;
        let tempDmgVi = document.getElementById('temp-dmg-vi')
        let tempDmgJinx = document.getElementById('temp-dmg-jinx')

    // Je définis la fonction qui sera appelée lors de mon événement
        function lancerDé()
        {
            /* Je choisis un chiffre au hasard en 1 et 6 ... */
            function entierAleatoire(min, max)
            {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            var result = entierAleatoire(1, 6)

            /* ... qui me permettra de changer l'attribut source de l'image représentant le résultat du dé ... */
            let image = document.getElementById('dice').setAttribute("src", `images/${result}.png`);
            
            /* ... de stocker les dégâts temporaires dans une variable temp-dmg ... */
            if (result != 1) {
                if (actif === Jinx) {
                tempDmgJinx.textContent = parseInt(tempDmgJinx.textContent) + result;
                }
                else {
                tempDmgVi.textContent = parseInt(tempDmgVi.textContent) + result;
                }}
            /* ... Ou de remettre le score à 0 si un joueur tombe sur 1 */    
            else {
            switchPlayer()
            tempDmgJinx.textContent = 0
            tempDmgVi.textContent = 0
            } 
        }  

    // Je place mon event listener sur le bouton du DOM que j'ai récupéré plus haut
        lancer.addEventListener('click', lancerDé);


//Attaquer l'ennemi
    
    // Je récupère les variables dont j'aurai besoin
    
        let attaquer = document.getElementById('attaquer')
        let pvJinx = document.getElementById('pv-jinx')
        let pvVi = document.getElementById('pv-vi')


    // Je définis les fonctions qui seront appelées lors de mon événement

        /* soustraction pv restants moins dégâts temporaires, puis appel des fonctions suivantes */
        function attaque(){
            if (actif === Jinx){
            pvVi.textContent = parseInt(pvVi.textContent) 
            -
            parseInt(tempDmgJinx.textContent);
            tempDmgJinx.textContent= 0;
            parseInt(pvVi.textContent) <= 0  ? (document.getElementById('imageJinx').setAttribute("src", "images/Victoire.png"), document.getElementById('imageVi').setAttribute("src", "images/Défaite.png"), alert ('Veuillez cliquer sur "Nouvelle partie" pour recommencer !')) : switchPlayer();

            } else{
            pvJinx.textContent = parseInt(pvJinx.textContent)
            -
            parseInt(tempDmgVi.textContent);
            tempDmgVi.textContent = 0;
            parseInt(pvJinx.textContent) <= 0  ? (document.getElementById('imageVi').setAttribute("src", "images/Victoire.png"), document.getElementById('imageJinx').setAttribute("src", "images/Défaite.png"), alert ('Veuillez cliquer sur "Nouvelle partie" pour recommencer !')) : switchPlayer();
            }
        }


    /* Je définis la fonction switchPlayer */
        function switchPlayer() {
            actif.classList.remove('actif');
            actif = actif == Jinx ? Vi : Jinx;
            actif.classList.add('actif');
        }


    // Je place mon event listener sur le bouton du DOM que j'ai récupéré plus haut

        attaquer.addEventListener('click', attaque);




//Créer une nouvelle partie    

    // Je récupère les éléments du DOM dont j'aurai besoin
        let newGame = document.getElementById('newgame')

    // Je définis la fonction qui sera appelée lors de mon événement
        function Reset() {
            location.reload();
        }  

    // Je place mon event listener sur le bouton du DOM que j'ai récupéré plus haut
        newGame.addEventListener('click', Reset);

    