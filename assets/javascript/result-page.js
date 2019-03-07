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
    
    var p1 = $('<p>').text(result.description);
    p1.attr('id','result-main-description');
    var p2 = $('<p>').text(result.deck);
    p2.attr('id','result-main-deck');

    var img = $('<img>');
    img.attr('id', 'result-main-image');
    img.attr('src', result.image.original_url);

    resultMainDiv.append(h);
    resultMainDiv.append(img);
    resultMainDiv.append(p1);
    resultMainDiv.append(p2);

    $('#result-main-container').append(resultMainDiv);

    // }

}).fail(function () {
    alert("ajax error");
});

localStorage.getItem("guid")