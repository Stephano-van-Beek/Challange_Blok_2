let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ____Omdat dit een tekst is, data type string, dus tussen ""__________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype __integer__________ waarom? ___omdat het een getal is zonder decimalen_________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ___Omdat je een variabele eerst moet declareren. Op het moment van declareren wordt de naam en eventueel ook het datatype van de variabele vastgelegd in het geheugen van de computer._________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen ____17__________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____getName________ de waarde noemen we een Any_________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een __pop up bericht_____ op het scherm met de tekst __vul je naam in hier, echt doen!_______ deze tekst staan op regel __17_____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ___ja________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _______Zodra je klikt op de afbeelding verstopt de afbeelding en komt er een ander tevoorschijn.____________ en waar wordt deze in je HTML aangeroepen? __regel 23__________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ____regel 25 bij img id en onclick_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ______GetElementbyId is een methode om met javascript elementen te selecteren._GetElemtbyId kan alleen gebruikt worden bij Id attributen. ____________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _______Zodra je nog een keer op de afbeelding klikt kom weer de eerste afbeelding tevoorschijn.____________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____32_________ en wanneer wordt deze aangeroepen ___zodra je klikt op de button________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan __regel 2 van javascript____________ en waar komt de waarde van getal vandaan? ____regel 32 html. Er staat (5) tussen haakjes.________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ___querySelector is een methode om met javascript elementen te selecteren. QuerySelector kan zowel class als Id attributen gebruiken.  ________________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ________Wat de functie is in dit geval, is zodra ik op de button klik, de class die .som heeft wordt veranderd naar het "antwoord"._____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _____Dan wordt het getal met een andere waarde opgeteld________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____44_________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ___regel 44 "this"__________ en waar komt de waarde van kleur vandaan? _____orange_______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _____30px_______ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _____________________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ____Een functie voor een naam type met de waarde myStr_______ en wanneer gebeurt dat ___Als je een stringt maakt kan je een quote typen_______ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ______Dan komt de pop up niet meer aan het begin wanneer je de site opent._____________ vul je antwoord in op de lijn.