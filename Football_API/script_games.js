const loadData = () => {


    fetch('https://api.openligadb.de/getmatchdata/bl2/2021').then((result) => {
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

        const shortDate = element.matchDateTime.slice(0, 10);
        html += '<div class="gamewrapper">\
        <div class="gamebg">\
            <div class="datetime"> ' + shortDate + ' </div>\
            <div class="gamestats">\
                <div class="team1">\
                    <div class="teamwrapper"><img src="' + element.team1.teamIconUrl + '" alt="" class="imgt1"></img>\
                        <div class="teamname">' + element.team1.teamName + '</div>\
                    </div>\
\
                </div>\
                <div class="score">' + element.matchResults[1].pointsTeam1 + ' :  ' + element.matchResults[1].pointsTeam2 + '</div>\
                <div class="team2">\
\
                    <div class="teamwrapper">\
                        <div class="teamname">' + element.team2.teamName + '</div>\
                        <img src="' + element.team2.teamIconUrl + '" alt="" class="imgt2"></img>\
\
                    </div>\
                </div>\
            </div>\
              </div>\
            </div>'
    });
    document.getElementById("output").innerHTML = html;
}