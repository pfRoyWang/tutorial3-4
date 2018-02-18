var disp =document.getElementById("display");
var bgin =document.getElementById("bgText");
var menu =document.getElementById("menu");

var ir =document.getElementById("red");
var ig =document.getElementById("green");
var ib =document.getElementById("blue");

var rr =document.getElementById("rred");
var rg =document.getElementById("rgreen");
var rb =document.getElementById("rblue");

var colorInp = document.getElementById("colorinp");

var curElement = disp;
menu.addEventListener("click",function(){
    curElement =menu;
});
disp.addEventListener("click",function(){
    curElement =disp;
});
bgin.addEventListener("click",function(){
    curElement =bgin;
});
document.getElementById("change").addEventListener("click",function(){
    console.log(bgin.value);
    curElement.style.backgroundColor = bgin.value;
    bgin.value ="";
});
ir.addEventListener("change",function(){
    curElement.style.backgroundColor ="rgb("+ir.value+","+ig.value+","+ib.value+")";
    rr.value = ir.value;
});
ib.addEventListener("change",function(){
    curElement.style.backgroundColor ="rgb("+ir.value+","+ig.value+","+ib.value+")";
    rb.value = ib.value;
});
ig.addEventListener("change",function(){
    curElement.style.backgroundColor ="rgb("+ir.value+","+ig.value+","+ib.value+")";
    rg.value = ig.value;
});
rr.addEventListener("change",function(){
    curElement.style.backgroundColor ="rgb("+rr.value+","+rg.value+","+rb.value+")";
    ir.value = rr.value;
});
rb.addEventListener("change",function(){
    curElement.style.backgroundColor ="rgb("+rr.value+","+rg.value+","+rb.value+")";
    ib.value = rb.value;
});
rg.addEventListener("change",function(){
    curElement.style.backgroundColor ="rgb("+rr.value+","+rg.value+","+rb.value+")";
    ig.value = rg.value;
});
colorInp.addEventListener("change",function(){
    curElement.style.backgroundColor = colorInp.value;
});

