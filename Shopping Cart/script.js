// supprimer un item
let remove=Array.from(document.querySelectorAll(".fa-trash-alt"))
remove.map(el=>el.addEventListener("click", function(){
    el.parentNode.remove()
    somme()
    sommeTotal();
}))

//aimer un item
let like=Array.from(document.querySelectorAll(".fa-heart"))
like.map(el=>el.addEventListener("click",function(){
    if(el.style.color==="red"){
             el.style.color="gray"
        }
        else el.style.color="red"

        //el.classList.toggle('red')
}))

//ajouter quantité
let add=Array.from(document.querySelectorAll(".add"))
add.map(el=>el.addEventListener("click", function(){
    el.nextElementSibling.innerHTML++;
    somme();
    sommeTotal();
}))

//reduire qte
let reduce=Array.from(document.querySelectorAll(".minus"))
reduce.map(el=>el.addEventListener("click", function(){
    if(el.previousElementSibling.innerHTML>0){
    el.previousElementSibling.innerHTML--;
    somme();
    sommeTotal();
}

}))

//somme des item
function somme(){
    let price=document.getElementsByClassName("price");
    let qte=document.getElementsByClassName("quantity");
    let x=Array.from(document.getElementsByClassName("totalp"));
    for (let i=0;i<qte.length;i++){
        x[i].innerHTML=qte[i].innerHTML * price[i].innerHTML  
    } 
    
}

//somme total
function sommeTotal(){
    let tot=document.getElementsByClassName("totalp");
    let sum=0;
    for (let i=0;i<tot.length;i++){
        sum+= tot[i].innerHTML*1;
    }
        return document.getElementById("total-bag").innerHTML = "Total : $" + sum;
}

