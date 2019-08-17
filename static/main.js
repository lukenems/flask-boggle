const $BASE_URL = 'http://127.0.0.1:5000';
const $game = $("#game-board");
const $guessBtn = $("#guess-btn");
const $guessVal = $("#guess-value");
const $guessForm = $("#guess-form");
const $message = $("#msg");
const $points = $("#score");



console.log("here!!")

$(function () {

  function showMessage(msg, points) {
    $message.text(msg);
    if (points || points === 0) {
      $points.text(points + 1);
    }
  }


  
  let time = 10;
  
  let timer = setInterval(() => {
    time -= 1
    console.log(time)
    if (time === 0 ) {
      console.log('here')
      clearInterval(timer)
      $game.hide();
      $("body").append($points)
    }
   }, 1000)


  $guessForm.on("submit", async function (evt) {
    evt.preventDefault();
    let $guess = $guessVal.val();
    let response = await axios.get(`${$BASE_URL}/check`, { params: { 'guess': $guess } });

    let message = response.data.result;

    if (message === "not-word") {
      showMessage(message);
    } else if (message === "not-on-board") {
      showMessage(message);
    }
    else {
      showMessage(message, +$points.text());
    }

  })

})
