const coder=document.getElementById("coder");
console.log(coder);

coder.addEventListener("input",function(){
    document.getElementById("resultat").innerHTML=coder.value;
    document.getElementById("count").innerHTML=document.getElementById("resultat").textContent.length;    
})


