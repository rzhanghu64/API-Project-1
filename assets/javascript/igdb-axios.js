var API_KEY = "9e200e5f3ba806bf8825821dd078350c";

axios({
    url: "https://api-v3.igdb.com/genres",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': API_KEY
    },
    data: "fields created_at,name,slug,updated_at,url;"
})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });