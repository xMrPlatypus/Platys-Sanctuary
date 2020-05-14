function addItem(){
    var ul = document.getElementById("list");
    var candidate = document.getElementById("item");
    var li = document.createElement("li");
    li.setAttribute('id',item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
}

