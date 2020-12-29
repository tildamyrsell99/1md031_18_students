/*for (i in food) {
        this.name = name;
        this.img = img;
        this.kCal = kCal;
        this.Lactos = Lactos;
        this.Gluten = Gluten;
    }
    this.productInfo = function () {
        return this.name + ' ' + this.kCal;
    }
    console.log(productInfo());
*/
var myMenu = document.getElementById('main');

function menu() {
    for (i in food) {
        var box = document.createElement("div")
        box.setAttribute('class', 'box');

        var products = document.createElement("h2")
        products.innerHTML = food[i].name;
        box.appendChild(products);

        var MenuImg = document.createElement("img");
        MenuImg.setAttribute('src', food[i].img);
        MenuImg.setAttribute('width', '450px');
        box.appendChild(MenuImg);

        var listkCal = document.createElement("li");
        listkCal.innerHTML = food[i].kCal;
        box.appendChild(listkCal);

        var listGluten = document.createElement("li");
        listGluten.innerHTML = food[i].Gluten;
        box.appendChild(listGluten);

        var listLactos = document.createElement("li");
        listLactos.innerHTML = food[i].Lactos;
        box.appendChild(listLactos);

        myMenu.appendChild(box);
    }
    
    var btn = document.createElement('button');
    var txt = document.createTextNode('Click Here');
    var myButton = document.getElementbyId('myButtonID');
    myButton.addEventListener("click", functionName);
}
    function customerArray() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var payment = document.getElementById('payment').value;
        var gender = document.getElementById('gender');
        var info = [name, email, payment];
        console.log(gender);
        /*for(var i = 0; i<gender.clientHeight; i++) {
            if(gender[i].checked){
                var gender = gender[i].value;
                info.push(gender);
            }
        }*/
        console.log(info);
        return info;
        
    }
