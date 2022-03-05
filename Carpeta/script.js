a = 0;
b = 1;
c = 2;
d = 3; 
e = 4;
f = 5;
g = 6;
h = 7;
i = 8;

var tiempo = "verde";
var x1 = document.getElementById("1");
var x2 = document.getElementById("2");
var x3 = document.getElementById("3");
var x4 = document.getElementById("4");
var x5 = document.getElementById("5");
var x6 = document.getElementById("6");
var x7 = document.getElementById("7");
var x8 = document.getElementById("8");
var x9 = document.getElementById("9");

x1.addEventListener("mousedown",faux1);
x2.addEventListener("mousedown",faux2);
x3.addEventListener("mousedown",faux3);
x4.addEventListener("mousedown",faux4);
x5.addEventListener("mousedown",faux5);
x6.addEventListener("mousedown",faux6);
x7.addEventListener("mousedown",faux7);
x8.addEventListener("mousedown",faux8);
x9.addEventListener("mousedown",faux9);

x1.addEventListener("mouseup",removedor1);
x2.addEventListener("mouseup",removedor2);
x3.addEventListener("mouseup",removedor3);
x4.addEventListener("mouseup",removedor4);
x5.addEventListener("mouseup",removedor5);
x6.addEventListener("mouseup",removedor6);
x7.addEventListener("mouseup",removedor7);
x8.addEventListener("mouseup",removedor8);
x9.addEventListener("mouseup",removedor9);


function funciontemporal(n,m){
    if (tiempo == "verde"){
        
        
        switch(m){
            case "a":
                a = "verde"; ;break;
            case "b":
                b= "verde";break;
            case "c":
                c = "verde";break;
            case "d":
                d = "verde";break;
            case "e":
                e = "verde";break;
            case "f":
                f = "verde";break;
            case "g":
                g = "verde";break;
            case "h":
                h = "verde";break;
            case "i":
                i = "verde";break;
        }
        if ((a==b && a==c) || (d==e&& d==f) || (g==h && g==i) || (a==d && a==g) || (b==e && b==h) || (c==f && c==i) || (a==e && a==i) || (c==e && c==g)){
            document.getElementById("elh").innerHTML= "Gano el VERDE";
            removedorTotal();
        }
        tiempo = "rojo";
        n.innerHTML= "X"
        n.style.color= "green"
    }    else{
        
        
        switch(m){
            case "a":
                a = "rojo";break;
            case "b":
                b= "rojo";break;
            case "c":
                c = "rojo";break;
            case "d":
                d = "rojo";break;
            case "e":
                e = "rojo";break;
            case "f":
                f = "rojo";break;
            case "g":
                g = "rojo";break;
            case "h":
                h = "rojo";break;
            case "i":
                i = "rojo";break;
        }
        if ((a==b && a==c) || (d==e&& d==f) || (g==h && g==i) || (a==d && a==g) || (b==e && b==h) || (c==f && c==i) || (a==e && a==i) || (c==e && c==g)){
             document.getElementById("elh").innerHTML= "Gano el ROJO";
             removedorTotal();
        }
        tiempo = "verde";
        n.innerHTML= "O"
        n.style.color= "red"
    }}

function faux1(){
    varia = "a";
    funciontemporal(x1,varia)
}
function faux2(){
    varia = "b";
    funciontemporal(x2,varia)
}
function faux3(){
    varia = "c";
    funciontemporal(x3,varia)
}
function faux4(){
    varia = "d";
    funciontemporal(x4,varia)
}
function faux5(){
    varia = "e";
    funciontemporal(x5,varia)   
}
function faux6(){
    varia = "f";
    funciontemporal(x6,varia)
}
function faux7(){
    varia = "g";
    funciontemporal(x7,varia) 
}
function faux8(){
    varia = "h";
    funciontemporal(x8,varia)
   
}
function faux9(){
    varia = "i";
    funciontemporal(x9,varia)
    
}

function removedor1(){
    x1.removeEventListener("mousedown",faux1);
}
function removedor2(){
    x2.removeEventListener("mousedown",faux2);
}
function removedor3(){
    x3.removeEventListener("mousedown",faux3);
}
function removedor4(){
    x4.removeEventListener("mousedown",faux4);
}
function removedor5(){
    x5.removeEventListener("mousedown",faux5);
}
function removedor6(){
    x6.removeEventListener("mousedown",faux6);
}
function removedor7(){
    x7.removeEventListener("mousedown",faux7);
}
function removedor8(){
    x8.removeEventListener("mousedown",faux8);
}
function removedor9(){
    x9.removeEventListener("mousedown",faux9);
}


function removedorTotal(){
    x1.removeEventListener("mousedown",faux1);
    x2.removeEventListener("mousedown",faux2);
    x3.removeEventListener("mousedown",faux3);
    x4.removeEventListener("mousedown",faux4);
    x5.removeEventListener("mousedown",faux5);
    x6.removeEventListener("mousedown",faux6);
    x7.removeEventListener("mousedown",faux7);
    x8.removeEventListener("mousedown",faux8);
    x9.removeEventListener("mousedown",faux9);
}

