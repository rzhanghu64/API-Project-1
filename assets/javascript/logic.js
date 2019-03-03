async function initialCall(){
axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '9e200e5f3ba806bf8825821dd078350c',
    },

    //https://api-docs.igdb.com/?javascript#examples-12 and https://api-docs.igdb.com/?javascript#game
    data: "fields *; where genres = (12) & platforms = 48;"
})
    .then(async response => {
        var results = response.data;
        console.log(response.data);
        for (var i = 0; i < 4; i++) {
            var gameID = results[i].id;
            var cardDiv = $('<div>');
            cardDiv.addClass("card");
            cardDiv.addClass("col-3");
            var h = $("<h5>").text(results[i].name);
            h.addClass("card-title");
            var p = $("<p>").text(results[i].summary)
            var img = $("<img>");
            img.addClass("game-image");
            img.data("gameID", gameID);
            var imgLocation = "https://via.placeholder.com/100";
            //await getCover(gameID);
            //console.log(imgLocation);
            img.attr("src", imgLocation);
            cardDiv.append(img);
            cardDiv.append(h);
            cardDiv.append(p);
            $("#card-container").append(cardDiv);
        }
    })
    .catch(err => {
        console.error(err);
    });
};
initialCall();

async function getCover(id) {
    axios({
        url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': '9e200e5f3ba806bf8825821dd078350c',
        },
    
        //https://api-docs.igdb.com/?javascript#examples-12 and https://api-docs.igdb.com/?javascript#game
        data: "fields *; where game = " + id + ";"
    })
        .then(response => {
            var results = response.data;
            imgLocation = results[0].url;
        })
        .catch(err => {
            console.error(err);
        });
};

