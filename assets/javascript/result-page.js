var similarGamesLength;

$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/game/' + localStorage.getItem("guid") +'/?format=jsonp&api_key=3e367e43b48af015b21cb7640630f3fa0e510098'
}).done(function (response) {
    console.log(response);
    var result = response.results;
    var resultMainDiv = $('<div>');
    resultMainDiv.attr('id','result-main');
    resultMainDiv.addClass('col-md-12');

    var h2 = $('<h2>').text(result.name);
    h2.attr('id','result-main-title');

    var h5Rating = $('<h5>').text(result.original_game_rating[0].name);
    var h5Date = $('<h5>').text(result.original_release_date);

    // appending genres???
    // for (i = 0; i < results.genres.length; i++) {
    // var h4 = $('<h4>').text(result.genres[i].name);
    // h4.attr('id','result-main-category');
    // }
    
    var p = $('<p>').text(result.deck);
    p.attr('id','result-main-deck');

    var img = $('<img>');
    img.attr('id', 'result-main-image'); 
    img.attr('src', result.image.original_url);

    resultMainDiv.append(h2);
    // resultMainDiv.append(h4);
    resultMainDiv.append(h5Rating);
    resultMainDiv.append(h5Date);
    resultMainDiv.append(img);
    resultMainDiv.append(p);

    $('#result-main-container').append(resultMainDiv);

    similarGamesLength = result.similar_games.length;
    for (i = 0; (i < result.similar_games.length) && (i < 6) ; i++)
    {
        console.log(i);
        console.log(result.similar_games.length);
        console.log(result.similar_games[i].id);
        var guid = "3030-" + result.similar_games[i].id;
        var div = $('<div>');
        var h = $('<h5>');
        div.addClass('card');
        div.addClass('col-md-2');
        h.text(result.similar_games[i].name);
        div.attr('id','similar-div-'+i);
        div.attr('data-guid', guid);
        div.attr('data-api-url', guid);
        div.append(h);
        $('#result-similar-container').append(div);
        fetchCovers();
    var h = $('<h2>').text(result.name);
    h.attr('id','result-main-title');
    }

}).fail(function () {
    alert("ajax error");
});

function fetchCovers()
{
    for (i=0; (i < similarGamesLength) && (i < 6); i++)
    var currentguid = $('');
    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/game/' + localStorage.getItem("guid") +'/?format=jsonp&api_key=3e367e43b48af015b21cb7640630f3fa0e510098'
    }).done(function (response) {
        
    }).fail(function () {
        alert("ajax error");
    });
}

localStorage.getItem("guid");