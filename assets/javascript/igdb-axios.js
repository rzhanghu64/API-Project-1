axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '9e200e5f3ba806bf8825821dd078350c',
    },

    //https://api-docs.igdb.com/?javascript#examples-12 and https://api-docs.igdb.com/?javascript#game
    data: "fields *; where genres = (8,9,11) & platforms = 48;"
})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });

axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/genres",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': '9e200e5f3ba806bf8825821dd078350c',
    },
    //https://api-docs.igdb.com/?javascript#examples-12
    data: "fields *; limit 40;"
})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });