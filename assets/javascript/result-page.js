$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/game/' + localStorage.getItem("guid") +'/?format=jsonp&api_key=3e367e43b48af015b21cb7640630f3fa0e510098'
}).done(function (response) {
    console.log(response);
    var result = response.results;
    // for (i = 0; i < results.length; i++) {
    var resultMainDiv = $('<div>');
    resultMainDiv.attr('id','result-main');
    resultMainDiv.addClass('col-md-12');

    var h = $('<h2>').text(result.name);
    h.attr('id','result-main-title');
    
    var p = $('<p>').text(result.deck);
    p.attr('id','result-main-deck');

    var img = $('<img>');
    img.attr('id', 'result-main-image');
    img.attr('src', result.image.original_url);

    resultMainDiv.append(h);
    resultMainDiv.append(img);
    resultMainDiv.append(p);

    $('#result-main-container').append(resultMainDiv);

    // }

    for (i = 0; (i < result.similar_games.length) && (i < 4) ; i++)
    {
        console.log(i);
        console.log(result.similar_games.length);
        console.log(result.similar_games[i].id);
        var guid = "3030-" + result.similar_games[i].id;
        var div = $('<div>');
        var h = $('<h5>');
        div.addClass('card');
        div.addClass('col-md-3');
        h.text(result.similar_games[i].name);
        div.attr('id','similar-div-'+i);
        div.attr('data-guid', guid);
        div.attr('data-api-url', guid);
        div.append(h);

        $('#result-similar-container').append(div);

    var h = $('<h2>').text(result.name);
    h.attr('id','result-main-title');
    }

}).fail(function () {
    alert("ajax error");
});

localStorage.getItem("guid")