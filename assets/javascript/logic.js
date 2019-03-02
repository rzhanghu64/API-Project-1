axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '9e200e5f3ba806bf8825821dd078350c',
    },

    //https://api-docs.igdb.com/?javascript#examples-12 and https://api-docs.igdb.com/?javascript#game
    data: "fields *; where genres = (8) & platforms = 48;"
})
    .then(response => {
        var results = response.data;
        console.log(response.data);
        for (var i = 0; i < 4; i++) {
            var gameID = results[i].id;
            var cardDiv = $('<div>');
            cardDiv.addClass("card");
            var name = results[i].name;
            var h = $("<h5>").text(name);
            h.addClass("card-title");
            var img = $("<img>");
            img.addClass("game-image");
            console.log(getCover(gameID));
            img.attr("src", getCover(gameID));
            cardDiv.append(img);
            cardDiv.append(h);
            $("#card-container").prepend(cardDiv);
        }
    })
    .catch(err => {
        console.error(err);
    });

function getCover(id) {
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
            console.log(response.data);
            var results = response.data;
            return results[0].url;
        })
        .catch(err => {
            console.error(err);
        });
};

