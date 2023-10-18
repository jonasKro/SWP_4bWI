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


//statlist.style.display = "none";
const filltable = (data) => {

    let html = "";
    data.forEach(element => {
        /*
                html += '<div class="teamoverview">' + '<img src="' + element.teamIconURl + '">' + "</img>" + element.teamName + "    " + '<div class="points">' +
            element.points + "</div>" + '<img id="buttonimg" src="button.jpg" class="buttonimg" onclick="toggleStats()">' + '</img>' + "</div>";
        html += '<ul class="teamstats" id="statlist">' + "<li>" + element.draw + "</li>" + "<li>" + element.won + "</li>" + "<li>" + element.lost + "</li>" + "</ul>"

        */
    });
    document.getElementById("output").innerHTML = html;
}


function toggleStats() {
    document.getElementById("statlist").classList.toggle("show");
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}