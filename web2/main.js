let http = new XMLHttpRequest();
http.open('get', 'pizza.json', true);
http.send();

http.onload = function(){
    if (this.readyState == 4 && this.status == 200){
        let pizzas = JSON.parse(this.responseText);

        let output = "";

        for(let item of pizzas){
            output += `
                <div class = "item">
                    <img src = "${item.img}" alt = "${item.name}"></img>
                    <h4 id ="${item.id}"> ${item.name}</h4>
                    <span></span>

                    <div class = "checkboxes">
                        <input type = "checkbox" id = "check1">
                        <label for = "check1">Small</label>
                    </div>
                    <div class = "checkboxes">
                        <input type = "checkbox" id = "check2">
                        <label for = "check2">Medium</label>
                    </div>
                    <div class = "checkboxes">
                    <input type = "checkbox" id = "check3">
                    <label for = "check3">Large</label>
                    </div>

                    <button onclick="togglePopup()">Add</a></button>
                </div>
            `;
         }
        
        document.querySelector(".items").innerHTML = output;
    }
}



function togglePopup(){

    http.open('get', 'pizza.json', true);
    http.send();

    http.onload = function(){
        if (this.readyState == 4 && this.status == 200){
            let pizzas = JSON.parse(this.responseText);
    
            let output = "";
    
            for(let item of pizzas){
                output += `
                <div class="content">
                    <div class="close-btn" onclick="togglePopup()">&times;</div>
                    <img src = "${item.img}" alt = "${item.name}"></img>
                    <h4 id ="${item.id}"> ${item.name}</h4>
                    <p> Lorem ipsum.gshjdhgjh dgfdkgjklg
                        gfjkgjdlkgjd
                        gdfkgldgj.
                    </p>
                </div>
                `;
             }
            
            document.querySelector(".popup").innerHTML = output;
        }
    }

    //var radios = document.getElementsByClassName("radio");

    document.getElementById("popup-1").classList.toggle("active");
    //document.getElementById("itemname").innerHTML = document.getElementById(id).innerHTML;


}