function jourtravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1;
    var jour = date.getDate();

    var joursFeries2020 = [
        "2020-01-01", // Jour de l'An
        "2020-04-13", // Lundi de Pâques
        "2020-05-01", // Fête du Travail
        "2020-05-08", // Victoire 1945
        "2020-07-14", // Fête nationale
        "2020-08-15", // Assomption
        "2020-11-01", // Toussaint
        "2020-11-11", // Armistice 1918
        "2020-12-25" // Noël
    ];

    var estFerie = joursFeries2020.includes(date.toISOString().split('T')[0]);
    var jourSemaine = date.getDay();
    var estWeekend = jourSemaine === 0 || jourSemaine === 6;

    if (estFerie) {
        console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié.");
    } else if (estWeekend) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end.");
    } else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé.");
    }
}
