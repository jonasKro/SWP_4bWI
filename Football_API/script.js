const loadData = () => {


    fetch('https://api.openligadb.de/getbltable/bl2/2021').then((result) => {
        result.json().then((data) => {

            filltable(data)
            console.log(data)
        })

    })


}
loadData();



const filltable = (data) => {

    let html = "";
    data.forEach(element => {
        html += ' <div class="tablecontent"> \
        <div class="logoname">\
            <div>\
                <img src="' + element.teamIconUrl + '" alt="" class="img"></img>\
            </div>\
            <div>\
            ' + element.teamName + '\
            </div>\
        </div>\
\
        <div class="teamstats">\
            <div>' + element.points + '</div>\
            <div>' + element.matches + '</div>\
            <div>' + element.won + '</div>\
            <div>' + element.lost + '</div>\
            <div>' + element.goals + '</div>\
            <div>' + element.opponentGoals + '</div>\
            <div>' + element.goalDiff + '</div>\
\
        </div>\
    </div>\ '
    });
    document.getElementById("output").innerHTML = html;
}