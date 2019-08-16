const axios = require('axios');
const $BASE_URL = 'http://127.0.0.1:5000/'
const $guessBtn = $("#guess-btn");

console.log('im here!!!!!')

$(function () {
    $guessBtn.on("submit", async function (evt) {
        evt.preventDefault();
        debugger
        guess = evt.target.value;
        console.log("this is our response", guess);
        let response = await axios.post(`${$BASE_URL}/game`, `{"data": {"guess": "${guess}"}}`);
    })

})
