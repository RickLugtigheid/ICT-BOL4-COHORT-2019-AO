
// Naam: Rick Lugtigheid
//Opleiding: Applicatie en media ontwikkeling

//Maakt een popup
alert("Beste gebruiker, U dien 3 vragen te beantwoorden om deze site verder te gebruiken.");

//zorgt dat er vragen komen om te beantwoorden en zorgt dat de gebruiker ze kan beantwoorden
var vn = prompt('Wat is U voornaam?') + " ";

var an = prompt("Wat is U achternaam?");

var leeftijd = prompt("Wat is U leeftijd?");

//Schrijft de gegeven informatie op de site
document.write("Naam: " + vn + an);

document.write(', leeftijd: ' + leeftijd);