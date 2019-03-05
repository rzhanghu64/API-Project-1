$.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    jsonp: 'json_callback',
    url: 'http://www.giantbomb.com/api/genres/?format=jsonp&api_key=3e367e43b48af015b21cb7640630f3fa0e510098'
}).done(function (response) {
    console.log(response);
    var results = response.results;
    for (i=0; i<results.length; i++){
        var formOption = $("<option>")
        formOption.text(results[i].name);
        formOption.attr("data-guid",results[i].guid);
        $("#search-genre").append(formOption);
    }
}).fail(function () {
    alert("ajax error");
}).always(function () {
    alert("ajax complete");
});
