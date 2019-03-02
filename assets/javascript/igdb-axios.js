axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/genres",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '9e200e5f3ba806bf8825821dd078350c',
    },
    data: "fields created_at,name,slug,updated_at,url;"
})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });