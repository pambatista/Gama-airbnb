   let card = document.querySelector("#card");

    console.log(card);

    let xhr = new XMLHttpRequest;

    xhr.open("GET", " http://airbnb.douglasmaia.com/api/properties");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let dados = JSON.parse(xhr.responseText);
                let texto = "";
               for(let i = 0; i < dados.length; i++){
                   texto += `
                   <div id="card-lugares">
                    <img src=${dados[i].photo}>
                    <div>
                        <h1>${dados[i].name}</h1>
                        <p>${dados[i].city}</p>
                        <p>${dados[i].price}</p>
                    </div>
                   </div>
                   `

               }     
               
               card.innerHTML = texto;
        
            } else {
                console.log("não conseguiu pegar os dados");
            }
        }
    }

    xhr.send();

    
    





