// Rick Lugtigheid
//  Opdracht: Pizza Calculator

//Note: De prijzen zijn van new YorK Pizza: https://www.newyorkpizza.nl/ ik heb de prijs van de pizza BBQ piri piri 


// alle Variabelen
var smallPizzaAmount = prompt("Hoe veel kleine pizza's wilt U bestellen?");
var mediumPizzaAmount = prompt("Hoe veel medium pizza's wilt U bestellen?");
var largePizzaAmount = prompt("Hoe veel grote pizza's wilt U bestellen?");

var smallPizzaPize = 6.95;
var mediumPizzaPrize = 8.99;
var largePizzaPrize = 11.49;

var prijsTotaal = 0;
var som = 0;

//toon het aantal pizza's je hebt besteld, bereken en toon de prijzen
document.write("Aantal small pizza's: " + smallPizzaAmount + ", wat u betaald is: €" + (som = smallPizzaAmount * smallPizzaPize) + "<br /><br />");
prijsTotaal += som;

document.write("Aantal medium pizza's: " + mediumPizzaAmount + ", wat u betaald is: €" + (som = mediumPizzaAmount * mediumPizzaPrize) + "<br /><br />");
prijsTotaal += som;

document.write("Aantal grote pizza's: " + largePizzaAmount + ", wat u betaald is: €" + (som = largePizzaAmount * largePizzaPrize) + "<br /><br /><br />");
prijsTotaal += som;

//Toon de totale prijs
document.write("Totaal: €" + prijsTotaal);