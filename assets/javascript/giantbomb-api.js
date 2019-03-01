var searchTerm = $("#search-term").val();
var queryURL = "https://www.giantbomb.com/api/games/?api_key=3e367e43b48af015b21cb7640630f3fa0e510098";

if ($("#name-field").value() != ""){
    queryURL = queryURL + "&filter=name" + $("#name-field").value();
}
if ($("#genre-field").value() != ""){
    queryURL = queryURL + "&filter=name" + $("#genre-field").value();
}

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        var results = response.docs;
        for (var i = 0; i < results.length; i++) {
            var articleDiv = $("<div>");
            var h = $("<h3>");
            h.text(results[i].snippet);
            h.attr("src", results[i].web_url)
            articleDiv.append(h);
            $("#input.articles").prepend(articleDiv);
        }
    });