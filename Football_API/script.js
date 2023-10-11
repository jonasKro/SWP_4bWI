const loadData = () => {


    fetch('https://api.openligadb.de/getbltable/bl1/2021').then((result) => {
        result.json().then((data) => {

                filltable(data)
                console.log(data)
            })
            /*result.json().then((data) => {
                    getHTMLForTodos(data);
                }) */

    })


}
loadData();

const statlist = document.getElementById("statlist");
//statlist.style.display = "none";
const filltable = (data) => {

    let html = "";
    data.forEach(element => {
        html += '<div class="teamoverview">' + element.teamName + " " + element.points + "</div>";
        html += '<ul class="teamstats" id="statlist">' + "<li>" + element.draw + "</li>" + "<li>" + element.won + "</li>" + "<li>" + element.lost + "</li>" + "</ul>"
        html += '<img id="buttonimg" src="">'
    });
    document.getElementById("output").innerHTML = html;
}