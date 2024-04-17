valgsideEl=document.querySelector("#valgside");
personvernEL=document.querySelector("#personvern");
personvernsideEL=document.querySelector("#personvernside");
alleSiderEl=document.querySelector("#alleSider");
alleSiderEl.addEventListener("click", tilAlleSider);
personvernEL.addEventListener("click", tilPersonvern);

function tilPersonvern(){
    personvernsideEL.style.display="block";
    valgsideEl.style.display="none";
    console.log("Personvern");
}
function tilAlleSider(){
    personvernsideEL.style.display="none";
    valgsideEl.style.display="none";
    alleSiderEl.style.display="none";
    console.log("Alle sider");
}