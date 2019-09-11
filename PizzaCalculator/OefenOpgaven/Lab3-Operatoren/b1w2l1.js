var deTafelVan = prompt("Van wlek getal wilt u de tafel weten?");
var curTafel = 1;
var deSom;

for (i = 0; i < 10; i++) {
    deSom = deTafelVan * curTafel;
    document.write(deTafelVan + " * "+ curTafel + " = "+ deSom); 
    document.write("<br />"); 
    curTafel++;
}
//zorgt dat de tafels en de volgende berekening los van elkaar liggen
document.write("<br /> <br /> het 2de deel");

var berekeningOp3 = prompt("Welk getal moet de bassis zijn voor de berekening van het 2de deel?");

var deSom2 = (((berekeningOp3 + 6) * 10) / 5) - 12;

document.write("(((" + berekeningOp3 + " + 6 ) * 10 ) / 5) - 12" + " = "+ deSom2 + "<br />");

