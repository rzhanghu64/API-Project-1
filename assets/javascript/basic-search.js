// Genre - API result

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/genres/?format=jsonp&api_key=3e367e43b48af015b21cb7640630f3fa0e510098'
}).done(function (response) {
    console.log(response);
    var results = response.results;
    for (i = 0; i < results.length; i++) {
        var formOption = $("<option>")
        formOption.text(results[i].name);
        formOption.attr("data-guid", results[i].guid);
        $("#search-genre").append(formOption);
    }
}).fail(function () {
    alert("ajax error");
});

//search for a specific game
$(document).ready(function () {
    $("#search-submit").click(function () {
        console.log("clicked");
        var gameInput = $("#game-input").val();
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            jsonp: 'json_callback',
            url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key=3e367e43b48af015b21cb7640630f3fa0e510098',
            data: {
                "query": gameInput,
                "resources": "game",
            },
        }).done(function (response) {
            console.log(response);
            $("#search-results-container").empty();
            var results = response.results;
            for (i = 0; i < results.length; i++) {
                var gameDiv = $("<div>");
                var h = $("<h5>");
                h.text(results[i].name);
                gameDiv.attr("data-guid", results[i].guid);
                gameDiv.click(loadGamePage);
                gameDiv.append(h);
                $("#search-results-container").append(gameDiv);
            }
        }).fail(function () {
            alert("ajax error");
        })
    });
});

function loadGamePage() {
    console.log(this);
    localStorage.setItem("guid", $(this).data("guid"));
    window.location = "results.html";
};


//*thoughts and ideas
//make search based on name OR genre?

//logic flow for search based on specific game
//user enters specific game -> redirect to list of possible games (results html page) 
//-> get game guid from api -> use object 'related' in array
//-> display recommendations, possibly cycle through them using bootstrap carousel or modals?

