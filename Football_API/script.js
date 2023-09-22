document.getElementById("load").addEventListener("click", function() {
    fetch('https://api.openligadb.de/getbltable/bl1/2021').then((result) => {
        result.json().then((data) => {
            getHTMLForTodos(data);
        })

    })

})



function getHTMLForTodos(data) {
    let html = ""
    data.forEach(element => {
        html += "<div>" + element.points + "by Teamelement.teamName" + "</li>"
    });

    document.getElementById("Content").innerHTML = html;
}