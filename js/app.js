//variables
//constantes
//condicional
//ciclos
//funciones

var defaultWaterAmount;
var waterAmount;
var coffeAmount;

let chemexRatio = waterAmount/15;
let aeropressRatio = waterAmount/16;
let frenchPressRatio = waterAmount/15;
let pourOverRatio = waterAmount/16;

let brewSelection = prompt("Ya sabes que metodo de extraccion quieres?"); 
if(brewSelection == "no"){
    
}
else{
    let brewMethod = prompt("Cual te gustaria? Chemex, Aeropress, Frenchpress o Pour Over");
    switch (brewMethod) {
        case "Chemex":
            break;
    
        case "Aeropress":
            break;
        
        case "Frenchpress":
            break;
        
        case "Pour Over":
            break;
        
        default:
            alert("Selecciona entre Chemex, Aeropress, Frenchpress o Pour Over")
            break;
    }  
}