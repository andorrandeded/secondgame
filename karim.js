
//craeted by assouane abdelkarim in 22/03//2020//
//try take code noway stop//
//all the copy in my file//
//all the copyright are saved//


function refreshData()
{

if(localStorage.getItem("a")!=null){
document.getElementById("score").innerText=localStorage.getItem("a");
c = document.getElementById("con").innerText;
if(c==0){
resu = document.getElementById("resu").value;
 number1 = document.getElementById("farst").innerText;
 number2 = document.getElementById("second").innerText;
solu = parseFloat( number1)+parseFloat(number2);
if(resu==solu){
//score +2 and change the value of h1 and h2 done here//
document.getElementById("score").innerText=parseFloat(document.getElementById("score").innerText)+2;
localStorage.setItem("a",document.getElementById("score").innerText);

document.getElementById("resu").value="0";
document.getElementById("con").innerText="6";
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
d = gn.substring(0 , 1);
c = gnn.substring(1, 2);
if(d==1 ||d==9|| d==0|| d==c||c==0||c==1||c==2){
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
m = gn.substring(0 , 3);
n= gnn.substring(0, 1);
document.getElementById("farst").innerText=m;
document.getElementById("second").innerText=n;
}else{
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
c = gn.substring(0 , 1);
d = gnn.substring(0, 1);
 document.getElementById("farst").innerText=c;
document.getElementById("second").innerText=d;
}

}else{

document.getElementById("score").innerText=parseFloat(document.getElementById("score").innerText)-2;
localStorage.setItem("a",document.getElementById("score").innerText);

document.getElementById("resu").value=0;
document.getElementById("con").innerText="6";

document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
d = gn.substring(0 , 1);
c= gnn.substring(0, 1);
if(d==1 ||d==9|| d==0|| d==c||c==0||c==1||c==2){
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
m = gn.substring(0 , 3);
n= gnn.substring(0, 1);
document.getElementById("farst").innerText=m;
document.getElementById("second").innerText=n;
}else{
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
c = gn.substring(0 , 1);
d = gnn.substring(0, 1);
 document.getElementById("farst").innerText=c;
document.getElementById("second").innerText=d;
}


}





}else{

document.getElementById("con").innerText=parseFloat(document.getElementById("con").innerText)-1;
}
}else{



//if the local storage not here so//

c = document.getElementById("con").innerText;
if(c==0){
resu = document.getElementById("resu").value;
 number1 = document.getElementById("farst").innerText;
 number2 = document.getElementById("second").innerText;
solu = parseFloat( number1)+parseFloat(number2);
if(resu==solu){
//score +2 and change the value of h1 and h2 done here//
document.getElementById("score").innerText=parseFloat(document.getElementById("score").innerText)+2;
localStorage.setItem("a",document.getElementById("score").innerText);

document.getElementById("resu").value=0;
document.getElementById("con").innerText="6";
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
d = gn.substring(0 , 3);
c= gnn.substring(0, 1);
if(d==1 ||d==9|| d==0|| d==c||c==0||c==1||c==2){
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
m = gn.substring(0 , 3);
n= gnn.substring(0, 1);
document.getElementById("farst").innerText=m;
document.getElementById("second").innerText=n;
}else{
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
c = gn.substring(0 , 1);
d = gnn.substring(0, 1);

}


}else{

document.getElementById("score").innerText=parseFloat(document.getElementById("score").innerText)-2;
localStorage.setItem("a",document.getElementById("score").innerText);

document.getElementById("resu").value=0;
document.getElementById("con").innerText="6";

document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
c = gn.substring(0 , 1);
d = gnn.substring(1, 2);
if(d==1 ||d==9|| d==0|| d==c||c==0||c==1||c==2){
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
m = gn.substring(0 , 3);
n= gnn.substring(0, 1);
document.getElementById("farst").innerText=m;
document.getElementById("second").innerText=n;
}else{
document.getElementById("hid2").innerText=Math.floor(Math.random() *90+09);
gnn = document.getElementById("hid2").innerText;
document.getElementById("hid").innerText=Math.floor(Math.random() *91+10);
gn = document.getElementById("hid").innerText;
c = gn.substring(0 , 1);
d = gnn.substring(0, 1);

}


}





}else{

document.getElementById("con").innerText=parseFloat(document.getElementById("con").innerText)-1;
}
}
 setTimeout(refreshData, 1000);
}

refreshData();



