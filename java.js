var num_pantalla = [] // numeros que se muestran en pantalla
var num_operacion1 = [] // es el array 1 que son los numeros antes del operador
var num_operacion2 = [] // es el arrat 2 que son los numeros del 3 operador
var num1; // numero 1 
var num2;
var numeros_en_pantalla ;
var operacion_xd = false;
//var operacionn = ["+"]
// document.getElementById("titulo").innerHTML = num_pantalla
var pantalla = document.getElementById("pantalla")  

document.getElementsByClassName("div-teclas")

zero.addEventListener("click",tecla_zero)
function tecla_zero (){
// pantalla.setAttribute("value","0")
num_pantalla.push("0")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(0);
}else num_operacion2.push(0);
}

one.addEventListener("click",tecla_one)
function tecla_one (){
// pantalla.setAttribute("value","1")
num_pantalla.push("1")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(1);
} else num_operacion2.push(1);
}

two.addEventListener("click",tecla_two)
function tecla_two (){
// pantalla.setAttribute("value","2")
num_pantalla.push("2")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(2);
} else num_operacion2.push(2);
}

tre.addEventListener("click",tecla_tre)
function tecla_tre (){
// pantalla.setAttribute("value","3")
num_pantalla.push("3")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(3);
}else num_operacion2.push(3);
}

four.addEventListener("click",tecla_four)
function tecla_four (){
// pantalla.setAttribute("value","4")
num_pantalla.push("4")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(4);
}else num_operacion2.push(4);
}

five.addEventListener("click",tecla_five)
function tecla_five (){
// pantalla.setAttribute("value","5")
num_pantalla.push("5")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(5);
}else num_operacion2.push(5);
}

six.addEventListener("click",tecla_six)
function tecla_six (){
// pantalla.setAttribute("value","6")
num_pantalla.push("6")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(6);
}else num_operacion2.push(6);
}

seven.addEventListener("click",tecla_seven)
function tecla_seven (){
pantalla.setAttribute("value","7")
num_pantalla.push("7")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(7);
}else num_operacion2.push(7);
}

eight.addEventListener("click",tecla_eight)
function tecla_eight (){
// pantalla.setAttribute("value","8")
num_pantalla.push("8")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(8);
}else num_operacion2.push(8);
}

nine.addEventListener("click",tecla_nine)
function tecla_nine (){
pantalla.setAttribute("value","9")
num_pantalla.push("9")
ponerenpantalla();
if (operacion_xd === false){
  num_operacion1.push(9);
}else num_operacion2.push(9);
}

igual.addEventListener("click",operacion)

mas.addEventListener("click",tecla_mas)
function tecla_mas (){
// pantalla.setAttribute("value","+")
num_pantalla.push("+")
ponerenpantalla();
operacion_xd = true ;
operacionn = "+";
}

menos.addEventListener("click",tecla_menos)
function tecla_menos (){
// pantalla.setAttribute("value","-")
num_pantalla.push("-")
ponerenpantalla();
operacion_xd = true
operacionn = "-";
}

por.addEventListener("click",tecla_por)
function tecla_por (){
// pantalla.setAttribute("value","x")
num_pantalla.push("x")
ponerenpantalla();
operacion_xd = true
operacionn = "*";
}

divi.addEventListener("click",tecla_divi)
function tecla_divi (){
// pantalla.setAttribute("value","/")
num_pantalla.push("/")
ponerenpantalla();
operacion_xd = true
operacionn = "/";
}

c.addEventListener("click",tecla_C)
function tecla_C (){
for(var i=0; i<31; i++){
 num_pantalla.pop()
 num_operacion1.pop()
 num_operacion2.pop()
}
operacion_xd = false;
num1= 0;
num2= 0;
pantalla.setAttribute("value", 0)
} 
  function ponerenpantalla() {
   pantalla.setAttribute("value",num_pantalla.join(""))
 }
 function fucionha() {
   num1 = Math.round(num_operacion1.join(""))
   num2 = Math.round(num_operacion2.join(""))
 }
//  function suma(x,y) {
   
//    return alert(x+y) & x+y
//    }
   
//    function resta(x,y) {
//       return alert (x-y)
//    }
   
//    function multiplica(x,y) {
//      return alert(x*y)
//    }
   
//    function divide(x,y) {
//     return alert(x/y)
//    }
// // //   Cree una nueva función operate que tome un operador y 2 números y luego llame a una de las funciones anteriores en los números.
  function operacion(){
    fucionha();
    if (operacionn == "/"){
      pantalla.setAttribute("value",num1/num2)
    } if (operacionn == "*"){
      pantalla.setAttribute("value",num1*num2)
    } if (operacionn == "+"){
      pantalla.setAttribute("value",num1+num2)
    } if (operacionn == "-"){
      pantalla.setAttribute("value",num1-num2)
    }
  }

// Cree una calculadora HTML básica con botones para cada dígito, cada una de las funciones anteriores y una tecla "Igual".
// No se preocupe por conectar el JS todavía.
// También debería haber una pantalla para la calculadora, continúe y rellénela con algunos números ficticios para que se vea bien.
// Agregue un botón "borrar".
// document.addEventListener("keydown", dibujarteclado);
//  var teclas = {
//    zero:  document.getElementById("zero"),
//    one: document.getElementById("one"),
//    two: document.getElementById("two"),
//    tre: document.getElementById("tre"),
//    four: document.getElementById("four"),
//    five: document.getElementById("five"),
//    six: document.getElementById("six"),
//    seven: document.getElementById("seven"),
//    eight: document.getElementById("eight"),
//    nine: document.getElementById("nine"),
//    igual: document.getElementById("igual"),
//    mas: document.getElementById("mas"),
//    menos: document.getElementById("menos"),
//    por: document.getElementById("por"),
//    divi: document.getElementById("divi"),
//     C: document.getElementById("c")
//   } // var teclas = document.querySelectorAll("zero",)