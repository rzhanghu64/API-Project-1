var queryURL = "https://www.giantbomb.com/api/genres/?api_key=3e367e43b48af015b21cb7640630f3fa0e510098";
var dropdown = [];
var dict = {
    name: "",
    guid: "",
  };

$.ajax({
    url: queryURL,
    dataType: "jsonp",
    jsonp: 'json_callback',
    method: "GET",
})
    .then(function (response) {
        console.log("hey");
        var results = response.docs;
        for (var i = 0; i < results.length; i++) {
            var d = new dict;
            d.name =  results.name;
            d.guid = results.guid;
            dropdown.push(d);
        }
    });