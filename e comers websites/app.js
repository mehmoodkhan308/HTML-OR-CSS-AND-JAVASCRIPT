
var data = [];



fetch('https://fakestoreapi.com/products')
.then(function(reponse){
    return reponse.json()
})
.then(function(res){
 data = res

     var parent1 = document.getElementById("parent1")
    parent1.innerHTML = ""  // clear first

    for(var product of data){
        parent1.innerHTML += `
        <div class="col  md-3 sm-3 mb-4"> 
            <div class="card">
                <img src="${product.image}" class="card-img-top" style="height:100px; object-fit:contain;">
                <div class="card-body">
                    <h5>${product.title}</h5>
                    <a href="#" class="btn btn-primary">${product.price}</a>
                </div>
            </div>
        </div>`

    
}
})

.catch(function(error){
    console.log( error ,'error');
    
})








function searchProduct(){
var search = document.getElementById("search").value.toLowerCase()

var filtered = [];
for(var product of data){

 if(search===""){
    filtered = data;
 }else{
 
 if( product.title.toLowerCase().indexOf(search) !== -1){
 filtered.push(product)
 }
   
 }  

}




var parent1 = document.getElementById("parent1")
parent1.innerHTML = ""
for(var product of filtered){
  
 parent1.innerHTML +=`
<div class="col md-3 sm-3 mb-4"> 
    <div class="card" >
  <img src="${product.image}" class="card-img-top" alt="..." style="height:100px; object-fit:contain;">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
        <p class="card-text"></p>

    <a href="#" class="btn btn-primary">${product.price}</a>
  </div>
</div>
</div>`
    
}


}










function togglemenu(){
console.log('toggle');

var menu = document.getElementById("menu");

menu.classList.toggle('show');

}






