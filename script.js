const el = document.getElementById("goBtn");
el.addEventListener("click", (ev) => {
    const inp = document.getElementById("numInput");
    const mnp = document.getElementById("mediaInput").value;
    let tableBody = document.querySelector("#tableBody");
    const theParent = document.querySelector("#list-contents");
    let list = document.querySelector("#list");
    let par = document.querySelector("#par");


    let len = "q=";
    len = len + mnp;
    len = len + "&limit=";
    len = len + inp.valueAsNumber;
    len = len + "&k=347212-JesseDav-YV62QH1P"
    len = len + "&info=1"

    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.lastChild);
    }
    
    while (par.hasChildNodes()){
        par.removeChild(par.lastChild);
    }


    fetch(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?${len}`)
    .then(r => r.json())
    .then((d) =>{
        const inp = document.getElementById("numInput");
    const theParent = document.querySelector("#list-contents");
    let victims = document.querySelectorAll(".listItem");

    console.log("Got some data",d);


    let len = inp.valueAsNumber;

    if(d.Similar.Results.length > 0){
        for (let k = 0; k < len; k++) {
            let tableRow = document.createElement("tr");
            let listItem = document.createElement("td");
            let listValue = document.createTextNode(d.Similar.Results[k].Name);
            listItem.classList.add("listItem");
            listItem.classList.add("name");
            listItem.appendChild(listValue);
            tableRow.appendChild(listItem);
    
            listItem = document.createElement("td");
            listValue = document.createTextNode(d.Similar.Results[k].Type);
            listItem.classList.add("listItem");
            listItem.classList.add("remove");
            listItem.appendChild(listValue);
            tableRow.appendChild(listItem);

            listItem = document.createElement("td");
            listValue = document.createTextNode(d.Similar.Results[k].wUrl);
            listItem.classList.add("listItem");
            listItem.classList.add("remove");
            listItem.appendChild(listValue);
            tableRow.appendChild(listItem);
    
            tableBody.appendChild(tableRow);
        }
    }
    else{
        let noResult = document.createTextNode("There are no results for this entry.");
        par.appendChild(noResult);
        list.appendChild(par);
    }
        
    
    });
});