//DOM manupulation


function selectBox() {
    var select = document.getElementById("selectbox")
    var selected = select.options[select.selectedIndex].value;

    alert("The color selected is : " + selected);
}


function radioSelect() {
    var opt_1 = document.getElementById("options1");
    var opt_2 = document.getElementById("options2");
    var opt_3 = document.getElementById("options3");

    if (opt_1.checked == true)
        alert("The Car select to use is : " + opt_1.value);
    else if (opt_2.checked == true)
        alert("The Car select to use is : " + opt_2.value);
    else if (opt_3.checked == true)
        alert("The Car select to use is : " + opt_3.value);
    else
        alert("Nothing is selected... ");
}

function buttonClick() {
    var str = document.getElementById("name").value;
    alert("The username inputed is : " + str);
}



/*function buttonClick() {
    document.getElementById("test").innerHTML = "Eddy Mendes";
}*/







/*
// Create Objects in JS

//Method 2 to create objects usinc metodo construtor

function Cars(car_brand, car_model, price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.teslaautopilot = function() {
        document.write("<h3>This is Car has autopilot : <br> Brand : " + car_brand + "<br> Model : " + car_model + "<br> Price : " + price + "</h3> <br>");
    }
}

var c1 = new Cars("Tesla", "Model 3", 3500);
var c2 = new Cars("BMW", "X7", 5000);
c1.teslaautopilot();

*/


// Method 1 to create objects
/*
var Car = {
    car_brand: "Tesla",
    car_model: "Model 3",
    price: 3500,

    teslaautopilot: function() {
        return "This car has a auto Pilot";
        //document.write("<h3>Auto pilot is activate</h3>")
    }

}
 // Car.teslaautopilot();
document.write("<h3>" + Car.teslaautopilot() + "</h3>");
*/

/*
    var car_brand = "tesla";
    var car_model = "Model 2";
    var price = 5000;

    function teslaautopilot() {
        document.write("<h3>Auto pilot is activate</h3>");
    }

    teslaautopilot();


*/

/*var $num1 = 3;
var $num2 = 9;

var $x;
var $result;
var day = 0;
*/

/*
function resultado(a, b) {
    $result = a * b;
    return $result;
}

$x = resultado($num1, $num2);
document.write("<h3>" + $x + "</h3>");



while ($num1 < 10) {
    document.write("<h3>" + $num1 + "</h3>");
    $num1 = $num1 + 2;

}


// derivador de 2
// X+=2 --> x=x+2
for ($x = 2; $x <= 10; $x += 2) {
    document.write("<h3>" + $x + "</h3>");
}



// For Loop ==> for (Inicializacao; condicao; incrimentacao/decrementacao)
//impirmir multiplicacao de 5
for ($x = 1; $x <= 10; $x++) {
    $result = 5 * $x;
    document.write("<h3>" + $result + "</h3>");
}



// pode receber um string, numero ou bolean
switch (day) {
    case 1:
        document.write("<h3>Domingo</h3>");
        break;
    case 2:
        document.write("<h3>Segunda</h3>");
        break;
    case 3:
        document.write("<h3>Terca</h3>");
        break;
    case 4:
        document.write("<h3>Quarta</h3>");
        break;
    case 5:
        document.write("<h3>Quinta</h3>");
        break;
    case 6:
        document.write("<h3>Sexta</h3>");
        break;
    case 7:
        document.write("<h3>Sabado</h3>");
        break;


    default:
        document.write("<h3>Numero Errado! Escolher entre 1 a 7</h3>");
        break;
}




// verificacao numero positivo e par
if ($num1 > 0) {
    document.write("<h3>Numero e positivo</h3>");
    if ($num1 % 2 == 0) {
        document.write("<h3>Numero e Par</h3>");
    } else {
        document.write("<h3>Numero e positivo mas e Impar</h3>");
    }
} else {
    document.write("<h3>Numero e Negativo</h3>");
}


// Verificacao numero positivo, negativo ou nulo
if ($num1 > 0) {
    document.write("<h3>Numero e Pasitivo</h3>");
} else if ($num1 < 0) {
    document.write("<h3>Numero e Negativo</h3>");
} else {
    document.write("<h3>Numero nao e nem positivo nem negativo</h3>");
}



//Verificação numero par ou impar
if ($num2 % 2 == 0) {
    document.write("<h3>Numero e Par</h3>");
} else {
    document.write("<h3>Numero e ImPar</h3>");
}



if ($num1 > 0 && $num2 > 0) {
    $result = $num1 + $num2
} else {
    alert("Numero tem de ser positivo! Obrigado")
}

document.write("A soma dos Numeros: " +
    $num1 + " e " + $num2 + " eh " + $result); */