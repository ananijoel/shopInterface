export function convertirDate(dateString) {
    // Créer un objet Date à partir de la chaîne de caractères
    const dateParts = dateString.split('/');
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    // Tableau des noms de mois en français
    const mois = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    // Obtenir le jour, le mois et l'année
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();

    // Retourner la date formatée
    return `${jour} ${moisNom} ${annee}`;
}

export function updatePrixTotal(quantity,price) {
    let prixTotale = parseInt(quantity) * parseFloat(price)
    return prixTotale
}

