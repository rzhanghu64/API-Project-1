const CARDSAMOUNT = 4;

async function initializeCards() {
    axios({
        url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': '9e200e5f3ba806bf8825821dd078350c',
        },
        //https://api-docs.igdb.com/?javascript#examples-12 and https://api-docs.igdb.com/?javascript#game
        data: "fields name,popularity; sort popularity desc;"
    }).then(async response => {
        var results = response.data;
        createCards(results, CARDSAMOUNT);
        setCovers();
    });
   
};
initializeCards();

function createCards(results, cardsAmount) {
    for (var i = 0; i < cardsAmount; i++) {
        var cardDiv = $('<div>');
        cardDiv.addClass("card");
        cardDiv.attr("id", "card-div-"+i)
        cardDiv.addClass("col-3");
        var h = $("<h5>").text(results[i].name);
        h.addClass("card-title");
        var p = $("<p>").text(results[i].summary)
        var img = $("<img>");
        img.addClass("game-image");
        img.attr("id", "game-image-"+i)
        img.attr("data-gameid", results[i].id);
        console.log("data-gameid attribute " + results[i].id);
        img.attr("src", "https://via.placeholder.com/100");
        cardDiv.append(img);
        cardDiv.append(h);
        cardDiv.append(p);
        $("#card-container").append(cardDiv);
    }
}

async function setCovers() {
    console.log("setCovers() called");
    for (var i = 0; i < CARDSAMOUNT; i++) {
        console.log("i=" + i);
        var img = $("#game-image-" + i);
        var currentGameID = img.attr("data-gameid");
        console.log("currentGameID" + currentGameID);
        //imgsrc = JSON.stringify(await getCover(currentGameID));
        //console.log("after getCover() " + imgsrc);
        img.attr("src", "https:"+(await getCover(currentGameID)));
        $("#card-div-" + i).prepend(img);
    }
}

async function getCover(id) {
    console.log("Inside getCover()");
    console.log(id);
    await axios({
        url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': '9e200e5f3ba806bf8825821dd078350c',
        },
        //https://api-docs.igdb.com/?javascript#examples-12 and https://api-docs.igdb.com/?javascript#game
        data: "fields *; where game = " + id + ";"
    })
    .then( function (response) {
        var results = response.data;
        console.log("response url " + results[0].url);
        var imgsrc = results[0].url;
        console.log("getCover()'s imgsrc " + "https:"+results[0].url);
        return JSON.stringify(results[0].url);
    })
    .catch(err => {
        console.error(err);
    });
}