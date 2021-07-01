export default function Requete(nombre, filliere, puissance, date){
    //Requete(10, "F2", 2, 2021)

    const nbResult = nombre == null ? '' : `&rows=${nombre}`;

    const filliereSelect = {
        F0: "F0+%3A+Total+toutes+fili%C3%A8res",
        F1: "F1+%3A+Thermique+non+renouvelable",
        F2: "F2+%3A+Bio%C3%A9nergies",
        F3: "F3+%3A+Hydraulique",
        F4: "F4+%3A+Eolien",
        F5: "F5+%3A+Solaire",
        F6: "F6+%3A+Autres"
    };
    const choixFilliere = filliere == null ? '' : `&refine.filiere_de_production=${filliereSelect[filliere]}`;

    const plagePuissance = [
        "P0+%3A+Total+toutes+puissances",
        "P1+%3A+%5D0+-+3%5D+kW",
        "P2+%3A+%5D3+-+9%5D+kW",
        "P3+%3A+%5D9+-+100%5D+kW",
        "P4+%3A+%5D100+-+250%5D+kW",
        "P5+%3A+%5D250+-+1000%5D+kW",
        "P6+%3A+%5D1000+-+12000%5D+kW",
        "P7+%3A+%3E+12000+kW"
    ];
    const choixPuissance = puissance == null ? '' : `&refine.plage_de_puissance_injection=${plagePuissance[puissance]}`

    const choixDate = date == null ? '' :`&refine.date=${date}`

    return `https://data.enedis.fr/api/records/1.0/search/?dataset=nb-clients-prod&q=&sort=date${nbResult}${choixFilliere}${choixPuissance}${choixDate}`

}