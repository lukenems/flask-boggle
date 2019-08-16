const $BASE_URL = 'http://127.0.0.1:5000/'
const $guessBtn = $("#guess-btn");
const $guessVal = $("#guess-value")
const $guessForm = $("#guess-form")

console.log("here!!");

$(function () {
    $guessForm.on("submit", async function (evt) {
        evt.preventDefault();
        let $guess = $guessVal.val();
        console.log("this is our response", $guess);
        let response = await axios.get(`${$BASE_URL}/check`, `{"data": {"guess": "${$guess}"}}`);
    })

})
