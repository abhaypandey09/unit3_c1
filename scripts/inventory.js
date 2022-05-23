var data=JSON.parse(localStorage.getItem("products"));

data.map(function (elem, index) {
    var box=document.createElement("div");
    var type=document.createElement("p");
    type.innerText=elem.type1;

    var desc=document.createElement("p");
    desc.innerText=elem.desc1;

    var price=document.createElement("p");
    price.innerText=elem.price1;

    var img=document.createElement("img");
    img.src=elem.image1;
    
   
  
    var btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.addEventListener("click", function () {
      removeItem(elem, index);
    });
  
    box.append(img,type,desc,price);
  
    document.querySelector("#all_products").append(box);
  });
  
  function removeItem(elem, index) {
    data.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(data));
    window.location.reload();
  }