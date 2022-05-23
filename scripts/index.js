//store the products array in localstorage as "products"
document.querySelector("#products").addEventListener("submit",myfun);
var data=JSON.parse(localStorage.getItem("products"))||[];
function myfun(){
    event.preventDefault();
    
    var type1=document.querySelector("#type").value;
    var desc1=document.querySelector("#desc").value;
    var price1=document.querySelector("#price").value;
    var image1=document.querySelector("#image").value;

    var box=document.createElement("div");
    var type=document.createElement("p");
    type.innerText=type1;

    var desc=document.createElement("p");
    desc.innerText=desc1;

    var price=document.createElement("p");
    price.innerText=price1;

    var img=document.createElement("img");
    img.src=image1;
    
    box.append(img,type,desc,price);

    data.push(type1,desc1,price1,image1);
    localStorage.setItem("products",JSON.stringify(data));
    window.location.reload();
}