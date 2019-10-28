const formula=document.getElementById('formula');
const result=document.getElementById('result');
formula.innerHTML=0;
result.innerHTML=0;
let z=0;
let v;
let x;
let y;
document.addEventListener("keypress",function char(){
  x=event.charCode;
  y=event.key;
  //numerical and charCodes:
    if(x>=48 && x<58 || x==46){
      zero();
      if(x==46 && formula.innerHTML.includes('.')){
        return;
      }
      else{
      result.innerHTML=0;
      formula.innerHTML+=""+y;
      result.innerHTML=formula.innerHTML;
      return;
      }
    }
    else if(x==42 || x==45 || x==43 || x==47){
      if(formula.innerHTML=="0"){
        z=result.innerHTML;
      }
      else {
        z=formula.innerHTML;
      }
      v=y;
      formula.innerHTML='';
      return;
    }
//equals and return function:
    else if(x==61 || x==13){
      if(v=="+")
      result.innerHTML=Number(z)+Number(formula.innerHTML);
      else if(v=="-")
      result.innerHTML=Number(z)-Number(formula.innerHTML);
      else if(v=="*")
      result.innerHTML=Number(z)*Number(formula.innerHTML);
      else if(v=="/"){
        if(formula.innerHTML==0){
         // result.innerHTML=0;
	  alert("ERROR...");
	}
        else{
        result.innerHTML=Number(z)/Number(formula.innerHTML);
        }
      }
      formula.innerHTML=0;
      v='';
      z=0;
      return;
    }
//default in case of non-numerical value:
    else return;
});
//delete function:
document.addEventListener("keydown",function del(){
  let z=event.keyCode;
    if(z==8){
      formula.innerHTML=formula.innerHTML.slice(0,-1);
    return;
    }
  else return;
});
//Gets rid of initial zero value:
function zero(){if(formula.innerHTML==0){
  formula.innerHTML='';
  return;
}
  else return;};
//Button click function:
document.getElementById("one").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='1';
});
document.getElementById("two").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='2';
});
three.addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='3';
});
document.getElementById("four").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='4';
});
document.getElementById("five").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='5';
});
document.getElementById("six").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='6';
});
document.getElementById("seven").addEventListener("click",function btn(){
    zero();
formula.innerHTML+='7';
});
document.getElementById("eight").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='8';
});
document.getElementById("nine").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='9';
});
document.getElementById("zero").addEventListener("click",function btn(){
    zero();
    formula.innerHTML+='0';
});
document.getElementById("decimal").addEventListener("click",function btn(){
    if(formula.innerHTML.includes('.')){
      return;
    }
    else{
    formula.innerHTML+='.';
    }
});
document.getElementById("clear").addEventListener("click",function btn(){
    formula.innerHTML='0';
    result.innerHTML='0';
    document.getElementById('enter').focus();
    return;
});
document.getElementById("delete").addEventListener("click",function btn(){
formula.innerHTML=formula.innerHTML.slice(0,-1);
return;
});

document.getElementById("multiply").addEventListener("click",function btn(){
  if(formula.innerHTML=="0"){
    z=result.innerHTML;
  }
  else {
    z=formula.innerHTML;
  }
  v='*';
  formula.innerHTML='';
  return;
});

document.getElementById("divide").addEventListener("click",function btn(){
  if(formula.innerHTML=="0"){
    z=result.innerHTML;
  }
  else {
    z=formula.innerHTML;
  }
  v='/';
  formula.innerHTML='';
  return;
});

document.getElementById("plus").addEventListener("click",function btn(){
  if(formula.innerHTML=="0"){
    z=result.innerHTML;
  }
  else {
    z=formula.innerHTML;
  }
  v='+';
  formula.innerHTML='';
  return;
});

document.getElementById("minus").addEventListener("click",function btn(){
  if(formula.innerHTML=="0"){
    z=result.innerHTML;
  }
  else {
    z=formula.innerHTML;
  }
  v='-';
  formula.innerHTML='';
  return;
});
document.getElementById("enter").addEventListener("click",function btn(){
if(v=="+")
result.innerHTML=Number(z)+Number(formula.innerHTML);
else if(v=="-")
result.innerHTML=Number(z)-Number(formula.innerHTML);
else if(v=="*")
result.innerHTML=Number(z)*Number(formula.innerHTML);
else if(v=="/")
result.innerHTML=Number(z)/Number(formula.innerHTML);
formula.innerHTML=0;
v='';
z=0;
return;
});
